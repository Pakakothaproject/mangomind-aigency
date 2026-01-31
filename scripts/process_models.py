import re
import json
import os
import requests
import time

# File paths
INPUT_FILE = r'c:\Users\pakak\Desktop\mangomind AIgency\newmodels .txt'
OUTPUT_JSON = r'c:\Users\pakak\Desktop\mangomind AIgency\src\data\models.json'
IMAGE_DIR = r'c:\Users\pakak\Desktop\mangomind AIgency\public\models'

# Create directories if they don't exist
os.makedirs(os.path.dirname(OUTPUT_JSON), exist_ok=True)
os.makedirs(IMAGE_DIR, exist_ok=True)

# Map of category/provider to reliable logo URLs (PNG preferred)
LOGO_MAP = {
    'openai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png',
    'anthropic': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/1024px-Anthropic_logo.svg.png',
    'google': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1024px-Google_Gemini_logo.svg.png',
    'llama': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/800px-Meta-Logo.png',
    'meta': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/800px-Meta-Logo.png',
    'mistral': 'https://logo.svgcdn.com/logos/mistral-ai.png',
    'deepseek': 'https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/deepseek/icon.png',
    'qwen': 'https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/qwen/icon.png',
    'alibaba': 'https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/qwen/icon.png',
    'amazon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/1024px-Amazon_icon.svg.png',
    'microsoft': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png',
    'perplexity': 'https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/perplexity-ai/icon.png',
    'cohere': 'https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/cohere/icon.png',
    'bytedance': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/ByteDance_Logo.svg/1024px-ByteDance_Logo.svg.png',
    'nvidia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/NVIDIA_logo.svg/1024px-NVIDIA_logo.svg.png',
    'allenai': 'https://avatars.githubusercontent.com/u/5667695?s=200&v=4', # GitHub avatar is fine
    'stability': 'https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/stability-ai/icon.png'
}

def get_logo_url(category, default_url):
    """
    Returns a reliable logo URL based on the category using LOGO_MAP.
    Falls back to default_url if no map entry found.
    """
    if not category:
        return default_url
    
    key = category.lower().strip()
    
    # Check for direct match or substring
    for provider, url in LOGO_MAP.items():
        if provider in key:
            return url
            
    # Additional check: sometimes category is 'Other' but name suggests provider
    # This logic is handled in the main loop if needed, 
    # but for now we rely on the explicitly provided category.
    
    return default_url

def download_image(url, filename):
    if not url or url == '' or url.lower() == 'null':
        return False
    
    # Handle multiple URLs concatenated
    if 'http' in url[4:]:
        parts = url.split('http')
        if len(parts) > 2:
             url = 'http' + parts[1]

    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code == 200:
            with open(filename, 'wb') as f:
                f.write(response.content)
            return True
        else:
            print(f"Failed download {url} - Status: {response.status_code}")
    except Exception as e:
        print(f"Failed to download {url}: {e}")
    return False

def parse_sql_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    start_marker = "VALUES ("
    start_index = content.find(start_marker)
    if start_index == -1:
        print("Could not find VALUES clause")
        return []

    values_part = content[start_index + len(start_marker):-2]
    
    # Quick hack split by "), ("
    raw_records = values_part.split("), (")
    
    models = []

    for raw in raw_records:
        # Simple parser again
        fields = []
        curr_field = ""
        in_q = False
        in_arr = False
        
        for char in raw:
            if char == "'" and not in_arr:
                in_q = not in_q
                curr_field += char
            elif char == '[':
                in_arr = True
                curr_field += char
            elif char == ']':
                in_arr = False
                curr_field += char
            elif char == ',' and not in_q and not in_arr:
                fields.append(curr_field.strip())
                curr_field = ""
            else:
                curr_field += char
        fields.append(curr_field.strip())
        
        if len(fields) >= 5:
            def clean(s):
                if s.startswith("'") and s.endswith("'"):
                    return s[1:-1].replace("''", "'")
                return s

            model_id = clean(fields[0])
            name = clean(fields[1])
            category = clean(fields[2])
            
            # IMPROVED LOGO SELECTION
            original_logo_url = clean(fields[3])
            
            # Check if category is 'Llama' (case insensitive) or similar and override
            if 'llama' in category.lower() or 'meta' in category.lower():
                logo_url_to_use = LOGO_MAP['llama']
            elif 'baidub' in category.lower(): # Typo check?
                 logo_url_to_use = original_logo_url 
            else:
                logo_url_to_use = get_logo_url(category, original_logo_url)
            
            # Special case for "Free" category? 
            # If category is "Free", look at ID to guess provider
            if category.lower() == 'free':
                if 'google' in model_id.lower() or 'gemini' in model_id.lower() or 'gemma' in model_id.lower():
                    logo_url_to_use = LOGO_MAP['google']
                elif 'llama' in model_id.lower():
                    logo_url_to_use = LOGO_MAP['llama']
                elif 'mistral' in model_id.lower() or 'mixtral' in model_id.lower():
                    logo_url_to_use = LOGO_MAP['mistral']
                elif 'deepseek' in model_id.lower():
                     logo_url_to_use = LOGO_MAP['deepseek']
                elif 'qwen' in model_id.lower():
                     logo_url_to_use = LOGO_MAP['qwen']
                elif 'openai' in model_id.lower() or 'gpt' in model_id.lower():
                     logo_url_to_use = LOGO_MAP['openai']

            # Tags
            tags_raw = fields[4]
            tags = []
            if 'ARRAY[' in tags_raw:
                inner = tags_raw[tags_raw.find('[')+1 : tags_raw.rfind(']')]
                t_parts = inner.split(',')
                for t in t_parts:
                    t = t.strip()
                    if t:
                        tags.append(clean(t.replace('"', "'")))

            input_cost = "0"
            output_cost = "0"
            if len(fields) >= 15:
                input_cost = clean(fields[13])
                output_cost = clean(fields[14])

            # Generate local image filename
            # Use category name in filename to avoid conflicts if IDs are same? ID should be unique.
            safe_id = model_id.replace('/', '_').replace(':', '_')
            image_filename = f"{safe_id}.png"
            local_image_path = f"/models/{image_filename}"
            full_download_path = os.path.join(IMAGE_DIR, image_filename)
            
            # Re-download if file missing OR if we are forcing an update because of bad logos
            # To be safe, let's just checking if it exists. 
            # Note: User complained about logos. Some might be cached bad ones.
            # Ideally we should overwrite if the source URL is different from what we used before?
            # But we don't know what specified before.
            # I will force re-download if the file size is small (error) or just trust the new URL mapping.
            # Let's force download for the mapped categories to ensure they are correct.
            
            should_download = False
            if not os.path.exists(full_download_path):
                should_download = True
            
            # If we are using a mapped URL, let's assume we want to enforce it.
            # But downloading every time takes time.
            # Let's just download.
            
            if logo_url_to_use and logo_url_to_use.lower() != 'null':
                if not os.path.exists(full_download_path): # Only if missing to save time? 
                    # User said logos are incorrect. They exist but are wrong.
                    # We MUST overwrite them if they are wrong.
                    # I'll check if I can delete specific categories' images?
                    # Or just overwrite all. Overwriting all 300 might take a while.
                    # But it's necessary for correctness.
                    # I'll add a print.
                    pass
                
                # Let's try to overwrite only if we have a MAP match (meaning high confidence correct logo)
                # OR if it doesn't exist.
                is_mapped = False
                for k in LOGO_MAP:
                    if k in category.lower() or (category.lower()=='free' and k in model_id.lower()):
                         is_mapped = True
                         break
                
                if is_mapped or not os.path.exists(full_download_path):
                     # print(f"Downloading/Updating {name} logo...") 
                     # download_image(logo_url_to_use, full_download_path)
                     # To avoid spamming logs and time, let's do it.
                     pass

            models.append({
                "id": model_id,
                "name": name,
                "category": category,
                "tags": tags,
                "image": local_image_path, # We assume download will succeed or has succeeded
                "original_image": logo_url_to_use,
                "input_cost": input_cost,
                "output_cost": output_cost
            })

    return models

def process_downloads(models):
    print(f"Processing downloads for {len(models)} models...")
    count = 0
    for model in models:
        url = model['original_image']
        path = os.path.join(IMAGE_DIR, os.path.basename(model['image']))
        
        # We enforce download for mapped providers to fix bad logos
        # But skip if it's already there and NOT mapped (to save bandwidth on obscure ones that were arguably fine?)
        # Actually, let's just be aggressive on the ones we know were bad (Llama, etc)
        
        # Logic: Always download if missing. 
        # If exists: Overwrite IF it matches our LOGO_MAP keys (because we know those are superior/fixed).
        
        should_overwrite = False
        cat = model['category'].lower()
        mid = model['id'].lower()
        
        for k in LOGO_MAP:
             if k in cat or (cat=='free' and k in mid):
                 should_overwrite = True
                 break
        
        if should_overwrite or not os.path.exists(path):
            if url:
                # print(f"Downloading {model['name']}...")
                download_image(url, path)
                count += 1
                if count % 10 == 0:
                    print(f"Downloaded {count} images...")
                time.sleep(3) # Respect rate limits strongly
    print(f"Finished downloading {count} images.")

print("Starting processing...")
models_data = parse_sql_file(INPUT_FILE)
print(f"Parsed {len(models_data)} models.")

# Write JSON immediately so UI has data
with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
    json.dump(models_data, f, indent=2)
print("Updated models.json with metadata.")

process_downloads(models_data)
print("Done!")
