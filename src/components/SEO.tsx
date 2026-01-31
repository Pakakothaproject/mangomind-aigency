import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    articleSchema?: {
        headline: string;
        datePublished: string;
        author: string;
        image?: string;
    };
    organizationSchema?: boolean;
    faqSchema?: Array<{ question: string; answer: string }>;
    localBusinessSchema?: {
        address: string;
        telephone: string;
        priceRange: string;
        openingHours: string;
    };
    serviceSchema?: Array<{ name: string; description: string }>;
    websiteSchema?: boolean;
    breadcrumbSchema?: Array<{ name: string; item: string }>;
}

const SEO = ({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = '/og-default.png',
    articleSchema,
    organizationSchema,
    faqSchema,
    localBusinessSchema,
    serviceSchema,
    websiteSchema,
    breadcrumbSchema
}: SEOProps) => {
    useEffect(() => {
        // ... previous meta tag logic remains ...
        document.title = title;

        const setMeta = (name: string, content: string, isProperty = false) => {
            const attr = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        setMeta('description', description);
        if (keywords) setMeta('keywords', keywords);
        setMeta('og:title', title, true);
        setMeta('og:description', description, true);
        setMeta('og:type', articleSchema ? 'article' : 'website', true);
        if (ogImage) setMeta('og:image', ogImage, true);
        if (canonicalUrl) setMeta('og:url', canonicalUrl, true);
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', title);
        setMeta('twitter:description', description);
        if (ogImage) setMeta('twitter:image', ogImage);

        let link = document.querySelector('link[rel="canonical"]');
        if (canonicalUrl) {
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                document.head.appendChild(link);
            }
            link.setAttribute('href', canonicalUrl);
        }

        // Structured Data Generation
        const existingScripts = document.querySelectorAll('script[data-schema]');
        existingScripts.forEach(s => s.remove());

        const schemas: any[] = [];

        if (organizationSchema) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "MangoMind AI Automation",
                "url": "https://mangomindbd.com",
                "logo": "https://mangomindbd.com/icon.png",
                "description": "The No.1 AI Platform in Bangladesh 🇧🇩. Access 400+ AI models including GPT-5, Gemini 3, Sora, and more with local bKash/Nagad payments.",
                "sameAs": [
                    "https://www.facebook.com/mangomindai",
                    "https://x.com/MangomindAi",
                    "https://huggingface.co/MangoMindAI"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+880-1911-730703",
                    "contactType": "customer service",
                    "areaServed": "BD",
                    "availableLanguage": ["English", "Bengali"]
                }
            });
        }

        if (websiteSchema) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "MangoMind AI",
                "url": "https://mangomindbd.com",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://mangomindbd.com/models?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            });
        }

        if (localBusinessSchema) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "MangoMind AI Automation",
                "image": "https://mangomindbd.com/icon.png",
                "@id": "https://mangomindbd.com",
                "url": "https://mangomindbd.com",
                "telephone": localBusinessSchema.telephone,
                "priceRange": localBusinessSchema.priceRange,
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": localBusinessSchema.address,
                    "addressLocality": "Dhaka",
                    "addressRegion": "BD",
                    "addressCountry": "BD"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    "opens": "00:00",
                    "closes": "23:59"
                }
            });
        }

        if (faqSchema) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqSchema.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                }))
            });
        }

        if (serviceSchema) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "AI Automation",
                "provider": { "@type": "Organization", "name": "MangoMind AI Automation" },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "AI Solutions",
                    "itemListElement": serviceSchema.map(s => ({
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": s.name,
                            "description": s.description
                        }
                    }))
                }
            });
        }

        if (breadcrumbSchema) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbSchema.map((b, i) => ({
                    "@type": "ListItem",
                    "position": i + 1,
                    "name": b.name,
                    "item": b.item
                }))
            });
        }

        if (articleSchema) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": articleSchema.headline,
                "image": articleSchema.image || ogImage,
                "author": { "@type": "Organization", "name": articleSchema.author },
                "publisher": {
                    "@type": "Organization",
                    "name": "MangoMind AI Automation",
                    "logo": { "@type": "ImageObject", "url": "https://mangomindbd.com/icon.png" }
                },
                "datePublished": articleSchema.datePublished
            });
        }

        schemas.forEach((schema, index) => {
            const script = document.createElement('script');
            script.setAttribute('data-schema', `schema-${index}`);
            script.type = 'application/ld+json';
            script.textContent = JSON.stringify(schema);
            document.head.appendChild(script);
        });

        // Cleanup function
        return () => {
            document.querySelectorAll('script[data-schema]').forEach(s => s.remove());
        };
    }, [title, description, keywords, canonicalUrl, ogImage, articleSchema, organizationSchema, faqSchema, localBusinessSchema, serviceSchema, websiteSchema, breadcrumbSchema]);

    return null; // This component doesn't render anything
};

export default SEO;
