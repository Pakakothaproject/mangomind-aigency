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
            title: 'AI-Powered Solutions',
            titleHighlight: 'For Your Business',
            items: [
                { title: 'Custom AI Agents', desc: 'Trained on your business data to handle specific tasks 24/7' },
                { title: 'Workflow Automation', desc: 'Eliminate repetitive tasks and reduce operational costs' },
                { title: 'AI Integration', desc: 'Connect AI to your existing tools and software seamlessly' },
                { title: 'Voice & Chat Bots', desc: 'Handle customer queries in Bengali or English, any time' },
                { title: 'Data Analysis', desc: 'Turn your business data into actionable insights' },
                { title: 'AI Consulting', desc: 'Strategic guidance on how AI can transform your operations' },
            ],
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
        },

        // Process Section
        process: {
            badge: 'Our Process',
            title: 'How We',
            titleHighlight: 'Work',
            steps: [
                { num: '01', title: 'Understand', desc: 'We analyze your business needs and identify automation opportunities' },
                { num: '02', title: 'Create', desc: 'Our team builds custom AI agents tailored to your workflow' },
                { num: '03', title: 'Deploy', desc: 'We integrate the solution and train your team to use it' },
            ],
        },

        // Pricing Section
        pricing: {
            badge: 'Pricing',
            title: 'Simple',
            titleHighlight: 'Pricing',
            plans: [
                { name: 'Starter Agent', price: '৳10,000', period: '/month', features: ['1 Custom AI Agent', 'Basic Integration', 'Email Support', 'Weekly Updates'] },
                { name: 'Custom Solution', price: 'Custom', period: '', features: ['Unlimited Agents', 'Full Integration', '24/7 Priority Support', 'Dedicated Account Manager'] },
            ],
            ctaText: 'Get Started',
            contactText: 'Contact Us',
        },

        // Testimonials
        testimonials: {
            badge: 'Success Stories',
            title: 'What Our',
            titleHighlight: 'Clients Say',
        },

        // Contact Section
        contact: {
            badge: 'Get In Touch',
            title: 'Ready to',
            titleHighlight: 'Automate?',
            subtext: 'Contact us today and let\'s discuss how AI can transform your business.',
            whatsapp: 'Chat on WhatsApp',
            email: 'Email Us',
            phone: 'Call Us',
        },

        // Footer
        footer: {
            tagline: 'Building the future of work in Bangladesh.',
            copyright: '© 2026 MangoMind AI Automation. All rights reserved.',
            quickLinks: 'Quick Links',
            connect: 'Connect',
        },
    },

    bn: {
        // Navbar
        nav: {
            home: 'হোম',
            services: 'Services',
            models: 'Models',
            pricing: 'Pricing',
            blogs: 'Blogs',
            contact: 'Contact',
            ctaButton: 'Agent এর জন্য Contact করুন',
            languageToggle: 'EN',
        },

        // Hero Section
        hero: {
            badge: 'ঢাকার No. 1 AI Agency',
            headline: 'আমরা তৈরি করি Agents',
            headlineHighlight: 'আপনার Workforce এর জন্য',
            subtext: 'MangoMind আপনার Business এর জন্য Custom AI Agents তৈরি করে। যেকোনো ধরনের Business এ Cost কমিয়ে Automation করুন সহজেই।',
            ctaPrimary: 'Automation শুরু করুন',
            ctaSecondary: 'কিভাবে কাজ করে',
        },

        // Services Section
        services: {
            badge: 'আমরা যা করি',
            title: 'AI-Powered Solutions',
            titleHighlight: 'আপনার Business এর জন্য',
            items: [
                { title: 'Custom AI Agents', desc: 'আপনার Business Data দিয়ে Train করা, ২৪/৭ কাজ করবে' },
                { title: 'Workflow Automation', desc: 'Repetitive কাজ বাদ দিন, Operational Cost কমান' },
                { title: 'AI Integration', desc: 'আপনার Tools ও Software এর সাথে সহজেই Connect করুন' },
                { title: 'Voice & Chat Bots', desc: 'বাংলা বা English এ Customer Queries Handle করুন' },
                { title: 'Data Analysis', desc: 'Business Data থেকে Actionable Insights পান' },
                { title: 'AI Consulting', desc: 'AI কিভাবে আপনার Operations Transform করবে তার Strategy' },
            ],
        },

        // Why Us Section
        whyUs: {
            badge: 'কেন আমাদের বেছে নেবেন',
            title: 'MangoMind',
            titleHighlight: 'Advantage',
            stats: [
                { value: '১০০+', label: 'Businesses Served' },
                { value: '৫৭+', label: 'Agents Deployed' },
                { value: '৪৭১+', label: 'AI Models Available' },
            ],
            features: [
                { title: 'Local Expertise', desc: 'বাংলাদেশের Market ও Business Culture আমাদের জানা' },
                { title: 'Affordable Pricing', desc: 'bKash/Nagad এ Pay করুন। International ঝামেলা নেই।' },
                { title: 'Fast Deployment', desc: 'মাস নয়, দিনের মধ্যে Agent Ready' },
                { title: '24/7 Support', desc: 'WhatsApp এ সবসময় Local Support Team' },
            ],
        },

        // Process Section
        process: {
            badge: 'আমাদের Process',
            title: 'আমরা কিভাবে',
            titleHighlight: 'কাজ করি',
            steps: [
                { num: '০১', title: 'বুঝি', desc: 'আপনার Business Needs Analyze করি এবং Automation Opportunities খুঁজি' },
                { num: '০২', title: 'তৈরি করি', desc: 'আপনার Workflow অনুযায়ী Custom AI Agents Build করি' },
                { num: '০৩', title: 'Deploy করি', desc: 'Solution Integrate করি এবং Team কে Train করি' },
            ],
        },

        // Pricing Section
        pricing: {
            badge: 'Pricing',
            title: 'সহজ',
            titleHighlight: 'Pricing',
            plans: [
                { name: 'Starter Agent', price: '৳১০,০০০', period: '/মাস', features: ['১টি Custom AI Agent', 'Basic Integration', 'Email Support', 'Weekly Updates'] },
                { name: 'Custom Solution', price: 'Custom', period: '', features: ['Unlimited Agents', 'Full Integration', '24/7 Priority Support', 'Dedicated Account Manager'] },
            ],
            ctaText: 'শুরু করুন',
            contactText: 'Contact করুন',
        },

        // Testimonials
        testimonials: {
            badge: 'Success Stories',
            title: 'আমাদের',
            titleHighlight: 'Clients যা বলেন',
        },

        // Contact Section
        contact: {
            badge: 'যোগাযোগ করুন',
            title: 'Ready to',
            titleHighlight: 'Automate?',
            subtext: 'আজই Contact করুন এবং জানুন AI কিভাবে আপনার Business Transform করতে পারে।',
            whatsapp: 'WhatsApp এ Chat করুন',
            email: 'Email করুন',
            phone: 'Call করুন',
        },

        // Footer
        footer: {
            tagline: 'বাংলাদেশে Future of Work তৈরি করছি।',
            copyright: '© ২০২৬ MangoMind AI Automation. All rights reserved.',
            quickLinks: 'Quick Links',
            connect: 'Connect',
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
