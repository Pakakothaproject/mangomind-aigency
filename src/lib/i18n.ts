// i18n.ts - Internationalization for MangoMind
// Modern Bangladeshi Bangla (Banglish style - mix of English and Bangla)

export type Language = 'en' | 'bn';

export const translations = {
    en: {
        // Navbar
        nav: {
            home: 'Home',
            services: 'Services',
            models: 'Models',
            pricing: 'Pricing',
            blogs: 'Blogs',
            contact: 'Contact',
            process: 'Process',
            whyUs: 'Why Us',
            ctaButton: 'Contact for Agent',
            languageToggle: 'বাং',
        },

        // Hero Section
        hero: {
            badge: 'No. 1 AI Agency in Dhaka, Bangladesh 🇧🇩',
            headline: 'We Build Agents For',
            headlineHighlight: 'Your Workforce',
            subtext: 'Mangomind creates custom AI agents to replace or optimize costs. We handle any type of business—making workforce automation cheap and effective.',
            ctaPrimary: 'Start Automating',
            ctaSecondary: 'How It Works',
        },

        // Services Section
        services: {
            badge: 'What We Do',
            title: 'Our',
            titleHighlight: 'Core Solutions',
            subtitle: 'We provide the infrastructure for the next generation of business efficiency.',
            learnMore: 'Learn more',
            items: [
                { title: 'Workforce Optimization', desc: 'We analyze your workforce needs and build agents that run for cheap—replacing unnecessary overhead or optimizing existing roles.' },
                { title: 'Custom Agent Creation', desc: 'We handle any type of business. Our custom agents are designed to fit your specific workflow and cut costs immediately.' },
                { title: 'AI Search Visibility', desc: 'Rank high on AI platforms like ChatGPT & Gemini. We optimize your answer engine presence starting at just 10,000 BDT.' },
            ],
        },

        // Blogs Section
        blogs: {
            title: 'Latest',
            titleHighlight: 'Insights',
            subtitle: 'Trends and strategies for the modern business.',
            readMore: 'Read More',
        },

        // Why Us Section
        whyUs: {
            badge: 'Why Choose Us',
            title: 'The MangoMind',
            titleHighlight: 'Advantage',
            stats: [
                { value: '100+', label: 'Businesses Served' },
                { value: '57+', label: 'Agents Deployed' },
                { value: '471+', label: 'AI Models Available' },
            ],
            features: [
                { title: 'Local Expertise', desc: 'We understand the Bangladeshi market and business culture' },
                { title: 'Affordable Pricing', desc: 'Pay with bKash/Nagad. No international hassles.' },
                { title: 'Fast Deployment', desc: 'Get your AI agent running within days, not months' },
                { title: '24/7 Support', desc: 'Local support team always available via WhatsApp' },
            ],
            benefits: [
                { title: 'No.1 in Bangladesh', desc: 'We are the first and largest dedicated AI automation agency in Dhaka, serving top local enterprises.' },
                { title: '10x Faster Execution', desc: 'Our proprietary AI stacks allow us to deliver solutions 10 times faster than traditional dev shops.' },
                { title: 'Proven Results', desc: 'We don\'t experiment on you. We deploy battle-tested automation flows that are guaranteed to save costs.' },
            ]
        },

        // Process Section
        processSection: {
            badge: 'Our Process',
            title: 'Our',
            titleHighlight: 'Process',
            subtitle: 'Simple. Effective. Transformative.',
            steps: [
                { num: '01', title: 'Understanding Your Workforce', desc: 'We analyze your specific needs and workforce structure to understand exactly where automation fits.' },
                { num: '02', title: 'Building Your Agents', desc: 'We create custom AI agents you can run for cheap to either replace redundant roles or optimize your existing workforce.' },
                { num: '03', title: 'Any Type of Business', desc: 'We handle any type of business. Our scalable agents integrate seamlessly into your operations to cut costs.' },
            ],
        },

        // Deployment Section
        deployment: {
            title: 'Flexible',
            titleHighlight: 'Deployment',
            subtitle: 'We deploy where it costs you the least.',
            options: [
                { title: 'Managed Cloud AI', desc: 'Don\'t worry about hardware. We host your agents on our high-speed servers. Perfect for businesses who want zero maintenance.' },
                { title: 'Local GPU Setup', desc: 'Have your own GPU? We can set up open-source models (Llama, Mistral) directly on your hardware. 100% data privacy and zero monthly API costs.' },
                { title: 'Lowest Cost Guarantee', desc: 'We architect solutions specifically to minimize token usage and running costs. We don\'t bloat your bill; we optimize it.' },
            ]
        },

        // Agent Showcase
        showcase: {
            title: 'Meet Your',
            titleHighlight: 'Digital Workforce',
            subtitle: 'Specialized agents ready to deploy today.',
            agents: [
                { title: 'AI Salesman', desc: 'Engage leads 24/7. Our AI Salesman qualifies prospects, answers queries, and closes deals without human intervention.' },
                { title: 'Website Salesman', desc: 'Turn visitors into buyers. An intelligent chat agent that guides users through your site and recommends products.' },
                { title: 'Deep Researcher', desc: 'Scour the web for market trends, competitor analysis, or lead data. Get comprehensive reports in minutes, not days.' },
                { title: 'Content & File Creator', desc: 'Generate contracts, blog posts, or marketing copy instantly. Custom-trained on your brand voice.' },
                { title: 'OpenClaw: Personal Jarvis', desc: 'Your own AI Personal Assistant. Controls your PC, manages files, and handles tasks via WhatsApp/Telegram like a real Jarvis.' },
                { title: 'Customer Support 24/7', desc: 'Never miss a query. Handle thousands of support tickets simultaneously with human-like empathy.' },
            ]
        },

        // Optimization Math
        math: {
            title: 'The',
            titleHighlight: 'Optimization Math',
            subtitle: 'We replace at least 1 employee for you, saving you a minimum of 20,000 BDT per month instantly.',
            before: {
                title: 'Before Mangomind',
                items: [
                    '15 Employees (Sales, Admin, Support)',
                    'High Payroll & Overhead Costs',
                    'Manual Reporting & Management'
                ],
                costLabel: 'Monthly Cost:',
                costValue: 'High'
            },
            after: {
                title: 'After Mangomind',
                badge: 'OPTIMIZED',
                items: [
                    '2 Fewer Employees (Saved 40k BDT)',
                    'Replaced by AI Agents ($30/mo each)',
                    'Self-Managing & Auto-Reporting',
                    'Remaining Team Optimized by 50%'
                ],
                savingsLabel: 'Savings:',
                savingsValue: '40,000+ BDT/Month'
            }
        },

        // Pricing Section
        pricing: {
            badge: 'Pricing',
            title: 'Simple',
            titleHighlight: 'Pricing',
            subtitle: 'Transparent costs. High ROI.',
            plans: [
                {
                    name: 'AI Search Visibility',
                    price: '৳10,000',
                    period: '/one-time',
                    desc: 'Rank on ChatGPT, Gemini & Perplexity',
                    features: [
                        'Content Optimization for LLMs',
                        'Knowledge Graph Injection',
                        'Brand Authority Setup',
                        '30-Day Performance Report'
                    ],
                    cta: 'Get Optimized',
                    popular: false
                },
                {
                    name: 'Custom AI Agent',
                    price: 'Custom Quote',
                    period: '',
                    desc: 'Tailored automation for your needs',
                    features: [
                        'Full Workflow Analysis',
                        'Development & Integration',
                        'Staff Training & Support',
                        'Local GPU or Cloud Hosting'
                    ],
                    cta: 'Contact for Agent',
                    popular: true
                }
            ]
        },

        // Testimonials Section
        testimonials: {
            badge: 'Success Stories',
            title: 'Client',
            titleHighlight: 'Success Stories',
            subtitle: 'Real results from Dhaka\'s top businesses.',
            items: [
                {
                    quote: "We replaced our entire 4-person sales team with Mangomind's AI agents. It was costing us 1,02,000 BDT per month—now we run on autopilot for a fraction of the cost.",
                    author: "CEO, Fashion Brand",
                    location: "Dhaka",
                    stats: [
                        { label: "Savings", value: "৳1.02L/mo" },
                        { label: "Headcount", value: "-4 Roles" }
                    ]
                },
                {
                    quote: "My Ecommerce Salesman works 24/7. It handles customer queries on Facebook and my website even when I'm sleeping. Sales increased by 30% in just one week.",
                    author: "Owner, Gadget Shop",
                    location: "Chittagong",
                    stats: [
                        { label: "Sales Up", value: "+30%" },
                        { label: "Uptime", value: "24/7" }
                    ]
                },
                {
                    quote: "I control my entire agency from WhatsApp now. My Personal Assistant agent researches topics and creates files for me just by me texting it. It feels like magic.",
                    author: "Digital Marketer",
                    location: "Sylhet",
                    stats: [
                        { label: "Efficiency", value: "10x" },
                        { label: "Platform", value: "WhatsApp" }
                    ]
                }
            ]
        },

        // Contact Section
        contact: {
            badge: 'Get In Touch',
            title: 'Ready to',
            titleHighlight: 'Automate?',
            subtext: 'Contact us today and let\'s discuss how AI can transform your business.',
            whatsapp: 'Chat on WhatsApp',
            email: 'agent@mangomindbd.com',
            phone: '+880 1911 730 703 (WA Business)'
        },

        // Footer
        footer: {
            tagline: 'Building the future of work in Bangladesh.',
            about: 'Pioneering AI automation in Bangladesh. We build intelligent agents that work 24/7 so you don\'t have to.',
            company: 'Company',
            aboutUs: 'About Us',
            services: 'Services',
            models: 'Models',
            blog: 'Blog',
            contact: 'Contact',
            copyright: 'Mangomind AI Automation. All rights reserved.',
            quickLinks: 'Quick Links',
            connect: 'Connect',
        },
    },

    bn: {
        // Navbar
        nav: {
            home: 'হোম',
            services: 'সার্ভিসেস',
            models: 'মডেলসমূহ',
            pricing: 'প্রাইসিং',
            blogs: 'ব্লগ',
            contact: 'যোগাযোগ',
            process: 'প্রসেস',
            whyUs: 'কেন আমরা',
            ctaButton: 'Agent এর জন্য Contact করুন',
            languageToggle: 'EN',
        },

        // Hero Section
        hero: {
            badge: 'ঢাকার No. 1 AI Agency',
            headline: 'আপনার office এর জন্য',
            headlineHighlight: 'Ai Agent',
            subtext: 'MangoMind আপনার Business এর জন্য Custom AI Agents তৈরি করে। যেকোনো ধরনের Business এ Cost কমিয়ে Automation করুন সহজেই।',
            ctaPrimary: 'Automation শুরু করুন',
            ctaSecondary: 'কিভাবে কাজ করে',
        },

        // Services Section
        services: {
            badge: 'আমরা যা করি',
            title: 'আমাদের',
            titleHighlight: 'মূল লক্ষ্য',
            subtitle: 'আমরা আধুনিক ব্যবসার দক্ষতার জন্য প্রয়োজনীয় ইনফ্রাস্ট্রাকচার তৈরি করি।',
            learnMore: 'আরও জানুন',
            items: [
                { title: 'ওয়ার্কফোর্স অপ্টিমাইজেশন', desc: 'আপনার কর্মীদের চাহিদা বিশ্লেষণ করে আমরা সাশ্রয়ী এজেন্ট তৈরি করি—আপনার প্রতিষ্ঠানের বাড়তি খরচ কমাতে।' },
                { title: 'কাস্টম এজেন্ট তৈরি', desc: 'আমরা যেকোনো ধরণের সার্ভিস দিয়ে থাকি। আমাদের কাস্টম এজেন্টগুলো আপনার প্রতিষ্ঠানের কাজের গতি ত্বরান্বিত করবে।' },
                { title: 'Search Engine Visibility', desc: 'ChatGPT এবং Gemini-র মতো প্ল্যাটফর্মে র‍্যাঙ্ক করুন। মাত্র ১০,০০০ টাকা থেকে আমরা আপনার এআই ভিজিবিলিটির কাজ শুরু করি।' },
            ],
        },

        // Blogs Section
        blogs: {
            title: 'সবশেষ',
            titleHighlight: 'ইনসাইটস',
            subtitle: 'আধুনিক বিজনেসের জন্য প্রয়োজনীয় ট্রেন্ডস এবং স্ট্র্যাটেজি।',
            readMore: 'আরও পড়ুন',
        },

        // Why Us Section
        whyUs: {
            badge: 'কেন আমাদের বেছে নেবেন',
            title: 'MangoMind',
            titleHighlight: 'Advantage',
            stats: [
                { value: '১০০+', label: 'সার্ভিসপ্রাপ্ত কোম্পানি' },
                { value: '৫৭+', label: 'সফল এজেন্ট' },
                { value: '৪৭১+', label: 'এআই মডেলসমূহ' },
            ],
            features: [
                { title: 'লোকাল সাপোর্ট', desc: 'বাংলাদেশের Market ও Business Culture আমাদের জানা' },
                { title: 'সাশ্রয়ী মূল্য', desc: 'bKash/Nagad এ Pay করুন। International ঝামেলা নেই।' },
                { title: 'দ্রুত ডেলিভারি', desc: 'মাস নয়, দিনের মধ্যে Agent Ready' },
                { title: '২৪/৭ কাস্টমার কেয়ার', desc: 'WhatsApp এ সবসময় Local Support Team' },
            ],
            benefits: [
                { title: 'বাংলাদেশে নং ১', desc: 'আমরা ঢাকার প্রথম এবং বৃহত্তম ডেডিকেটেড এআই অটোমেশন এজেন্সি, যারা দেশীয় শীর্ষ প্রতিষ্ঠানগুলোকে সেবা দিচ্ছে।' },
                { title: '১০ গুণ দ্রুত কাজ', desc: 'আমাদের নিজস্ব এআই স্ট্যাক আমাদের সাধারণ ডেভেলপারদের তুলনায় ১০ গুণ দ্রুত সলিউশন দিতে সাহায্য করে।' },
                { title: 'প্রমাণিত ফলাফল', desc: 'আমরা আপনার ওপর পরীক্ষা চালাই না। আমরা এমন অটোমেশন ফ্লো ব্যবহার করি যা খরচ কমাতে গ্যারান্টি দেয়।' },
            ]
        },

        // Process Section
        processSection: {
            badge: 'আমাদের প্রসেস',
            title: 'আমাদের',
            titleHighlight: 'প্রসেস',
            subtitle: 'সহজ। কার্যকর। পরিবর্তনশীল।',
            steps: [
                { num: '০১', title: 'আপনার কর্মীদের দক্ষতা বোঝা', desc: 'আপনার নির্দিষ্ট চাহিদা এবং কর্মীদের স্ট্রাকচার বিশ্লেষণ করে আমরা ঠিক করি কোথায় অটোমেশন প্রয়োজন।' },
                { num: '০২', title: 'এজেন্ট তৈরি করা', desc: 'আপনার অপ্রয়োজনীয় রোলের পরিবর্তে বা বিদ্যমান কর্মীদের কাজের গতি বাড়াতে আমরা সাশ্রয়ী কাস্টম এআই এজেন্ট তৈরি করি।' },
                { num: '০৩', title: 'যেকোনো ধরনের বিজনেস', desc: 'আমরা যেকোনো ধরণের বিজনেস নিয়ে কাজ করি। আমাদের স্কেলেবল এজেন্টগুলো খরচ কমাতে আপনার অপারেশনে নির্বিঘ্নে যুক্ত হয়।' },
            ],
        },

        // Deployment Section
        deployment: {
            title: 'ফ্লেক্সিবল',
            titleHighlight: 'ডিপ্লয়মেন্ট',
            subtitle: 'আমরা সেখানেই ডিপ্লয় করি যেখানে আপনার খরচ সবচেয়ে কম হয়।',
            options: [
                { title: 'ম্যানেজড ক্লাউড এআই', desc: 'হার্ডওয়্যার নিয়ে চিন্তা করবেন না। আমরা আমাদের হাই-স্পিড সার্ভারে আপনার এজেন্টদের হোস্ট করি। জিরো মেইনটেন্যান্সের জন্য পারফেক্ট।' },
                { title: 'লোকাল জিপিইউ সেটাআপ', desc: 'আপনার নিজের জিপিইউ আছে? আমরা সরাসরি আপনার হার্ডওয়্যারে ওপেন-সোর্স মডেল (লালামা, মিস্ট্রাল) সেটআপ করতে পারি। শতভাগ প্রাইভেসি এবং ভাড়ার ঝামেলা নেই।' },
                { title: 'সর্বনিম্ন খরচের গ্যারান্টি', desc: 'আমরা সলিউশনগুলো এমনভাবে ডিজাইন করি যাতে টোকেন খরচ এবং রানিং কস্ট সর্বনিম্ন থাকে। আমরা আপনার বিল বাড়াই না; অপ্টিমাইজ করি।' },
            ]
        },

        // Agent Showcase
        showcase: {
            title: 'আপনার',
            titleHighlight: 'ডিজিটাল ওয়ার্কফোর্স',
            subtitle: 'স্পেশালাইজড এজেন্টগুলো আজই আপনার কাজের জন্য রেডি।',
            agents: [
                { title: 'এআই সেলসম্যান', desc: '২৪/৭ ক্লায়েন্টদের সাথে এনগেজ থাকুন। আমাদের এআই সেলসম্যান প্রস্পেক্টদের খুঁজে বের করে এবং মানুষের সাহায্য ছাড়াই ডিল ক্লোজ করে।' },
                { title: 'ওয়েবসাইট সেলসম্যান', desc: 'ভিজিটরদের ক্রেতায় পরিণত করুন। একটি বুদ্ধিমান চ্যাট এজেন্ট যা আপনার সাইটে ইউজারদের গাইড করবে এবং প্রোডাক্ট রিকমেন্ড করবে।' },
                { title: 'ডিপ রিসার্চার', desc: 'মার্কেট ট্রেন্ড, কম্পিটিটর অ্যানালাইসিস বা লিড ডেটার জন্য ওয়েব রিসার্চ করুন। কয়েক দিন নয়, কয়েক মিনিটেই রিপোর্ট পান।' },
                { title: 'কন্টেন্ট ও ফাইল ক্রিয়েটর', desc: 'তাৎক্ষণিকভাবে কন্ট্রাক্ট, ব্লগ পোস্ট বা মার্কেটিং কপি জেনারেট করুন। আপনার ব্র্যান্ড ভয়েসে কাস্টম-ট্রেইনড।' },
                { title: 'ওপেনক্ল: পার্সোনাল জারভিস', desc: 'আপনার নিজস্ব এআই পার্সোনাল অ্যাসিস্ট্যান্ট। হোয়াটসঅ্যাপ বা টেলিগ্রামের মাধ্যমে আপনার পিসি এবং ফাইলগুলো জারভিসের মতো কন্ট্রোল করতে পারবেন।' },
                { title: 'কাস্টমার সাপোর্ট ২৪/৭', desc: 'কখনোই কোনো কুয়েরি মিস করবেন না। সহানুভূতির সাথে হাজার হাজার সাপোর্ট টিকেট একসাথে হ্যান্ডেল করতে সক্ষম।' },
            ]
        },

        // Optimization Math
        math: {
            title: 'অটোমেশন',
            titleHighlight: 'কস্ট সেভিংস',
            subtitle: 'আমরা অন্তত একজন কর্মীর জায়গা নিতে পারি, যা তাৎক্ষণিকভাবে আপনার প্রতি মাসে অন্তত ২০,০০০ টাকা সেভ করবে।',
            before: {
                title: 'ম্যাঙ্গোমাইন্ডের আগে',
                items: [
                    '১৫ জন কর্মী (সেলস, অ্যাডমিন, সাপোর্ট)',
                    'বেতন এবং ওভারহেড কস্ট অনেক বেশি',
                    'ম্যানুয়াল রিপোর্টিং এবং ম্যানেজমেন্ট'
                ],
                costLabel: 'মাসিক খরচ:',
                costValue: 'বিশাল'
            },
            after: {
                title: 'ম্যাঙ্গোমাইন্ডের পরে',
                badge: 'অপ্টোমাইজড',
                items: [
                    '২ জন কর্মী কম (৪০ হাজার টাকা সেভ)',
                    'এআই এজেন্ট দ্বারা প্রতিস্থাপিত (মাসে মাত্র ৩০০০ টাকা)',
                    'সেলফ-ম্যানেজিং এবং অটো-রিপোর্টিং',
                    'বাকি টিমের কাজের গতি ৫০% বৃদ্ধি'
                ],
                savingsLabel: 'সঞ্চয়:',
                savingsValue: '৪০,০০০+ টাকা/মাস'
            }
        },

        // Pricing Section
        pricing: {
            badge: 'প্রাইসিং',
            title: 'সহজ',
            titleHighlight: 'প্রাইসিং',
            subtitle: 'কোনো হিডেন কস্ট নেই। হাই আর-ও-আই।',
            plans: [
                {
                    name: 'AI Search Visibility',
                    price: '৳১০,০০০',
                    period: '/একবার',
                    desc: 'ChatGPT, Gemini এবং Perplexity-তে র‍্যাঙ্ক করুন',
                    features: [
                        'LLM-এর জন্য কন্টেন্ট অপ্টিমাইজেশন',
                        'নলেজ গ্রাফ ইনজেকশন',
                        'ব্র্যান্ড অথোরিটি সেটআপ',
                        '৩০ দিনের পারফরম্যান্স রিপোর্ট'
                    ],
                    cta: 'Get Optimized',
                    popular: false
                },
                {
                    name: 'Custom AI Agent',
                    price: 'Custom Quote',
                    period: '',
                    desc: 'আপনার প্রয়োজন অনুযায়ী স্পেশাল অটোমেশন',
                    features: [
                        'ফুল ওয়ার্কফ্লো অ্যানালাইসিস',
                        'ডেভেলপমেন্ট এবং ইন্টিগ্রেশন',
                        'স্টাফ ট্রেনিং এবং সাপোর্ট',
                        'লোকাল জিপিইউ বা ক্লাউড হোস্টিং'
                    ],
                    cta: 'Agent-এর জন্য যোগাযোগ করুন',
                    popular: true
                }
            ]
        },

        // Testimonials Section
        testimonials: {
            badge: 'সফলতার গল্প',
            title: 'ক্লাইন্টদের',
            titleHighlight: 'সফলতার গল্প',
            subtitle: 'ঢাকার নামকরা সব বিজনেসের বাস্তব ফলাফল।',
            items: [
                {
                    quote: "আমরা আমাদের ৪ জনের সেলস টিমকে ম্যাঙ্গোমাইন্ডের এআই এজেন্ট দিয়ে রিপ্লেস করেছি। আমাদের মাসে ১,০২,০০০ টাকা খরচ হতো—এখন আমরা অটো-পাইলটে চলছি অনেক কম খরচে।",
                    author: "CEO, ফ্যাশন ব্র্যান্ড",
                    location: "ঢাকা",
                    stats: [
                        { label: "সঞ্চয়", value: "৳১.০২ লাখ/মাস" },
                        { label: "কর্মী সংখ্যা", value: "-৪ জন" }
                    ]
                },
                {
                    quote: "আমার ই-কমার্স সেলসম্যান ২৪/৭ কাজ করে। আমি যখন ঘুমিয়ে থাকি তখন এটি ফেসবুক এবং ওয়েবসাইটে কাস্টমার কুয়েরি হ্যান্ডেল করে। এক সপ্তাহেই সেলস ৩০% বেড়ে গেছে।",
                    author: "মালিক, গ্যাজেট শপ",
                    location: "চট্টগ্রাম",
                    stats: [
                        { label: "সেলস বৃদ্ধি", value: "+৩০%" },
                        { label: "আপটাইম", value: "২৪/৭" }
                    ]
                },
                {
                    quote: "আমি এখন হোয়াটসঅ্যাপ থেকেই পুরো এজেন্সি কন্ট্রোল করছি। আমার পার্সোনাল অ্যাসিস্ট্যান্ট এজেন্ট শুধু মেসেজ দিলেই রিসার্চ করে ফাইল তৈরি করে দেয়। ম্যাজিকের মতো মনে হয়!",
                    author: "ডিজিটাল মার্কেটার",
                    location: "সিলেট",
                    stats: [
                        { label: "দক্ষতা", value: "১০ গুণ" },
                        { label: "প্ল্যাটফর্ম", value: "হোয়াটসঅ্যাপ" }
                    ]
                }
            ]
        },

        // Contact Section
        contact: {
            badge: 'যোগাযোগ করুন',
            title: 'আপনি কি',
            titleHighlight: 'অটোমেশন করতে প্রস্তুত?',
            subtext: 'আজই আমাদের সাথে যোগাযোগ করুন এবং জানুন এআই কিভাবে আপনার বিজনেস বদলে দিতে পারে।',
            whatsapp: 'হোয়াটসঅ্যাপে চ্যাট করুন',
            email: 'agent@mangomindbd.com',
            phone: '+৮৮০ ১৯১১ ৭৩০ ৭০৩ (WA Business)'
        },

        // Footer
        footer: {
            tagline: 'বাংলাদেশে Future of Work তৈরি করছি।',
            about: 'বাংলাদেশে এআই অটোমেশনের পথিকৃৎ। আমরা এমন ইন্টেলিজেন্ট এজেন্ট তৈরি করি যা ২৪/৭ কাজ করে, যাতে আপনাকে করতে না হয়।',
            company: 'কোম্পানি',
            aboutUs: 'আমাদের সম্পর্কে',
            services: 'সার্ভিসেস',
            models: 'মডেলসমূহ',
            blog: 'ব্লগ',
            contact: 'যোগাযোগ',
            copyright: 'Mangomind AI Automation. অল রাইটস রিজার্ভড।',
            quickLinks: 'কুইক লিঙ্ক',
            connect: 'কানেক্ট',
        },
    },
};

// Detect if user is from Bangladesh or West Bengal based on timezone
export const detectLanguage = (): Language => {
    // 1. Check localStorage for user preference
    const saved = localStorage.getItem('mangomind-lang');
    if (saved === 'en' || saved === 'bn') return saved;

    // 2. Check browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('bn')) return 'bn';

    // 3. Check timezone for Bangladesh/Kolkata (West Bengal)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone === 'Asia/Dhaka' || timezone === 'Asia/Kolkata') {
        return 'bn';
    }

    // 4. Default to English
    return 'en';
};

export const saveLanguage = (lang: Language) => {
    localStorage.setItem('mangomind-lang', lang);
};

export type Translations = typeof translations.en;
