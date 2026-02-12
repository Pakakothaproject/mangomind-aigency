import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogs = [
    {
        id: 'seedance-2-video-marketing',
        image: "/blogs/seedance-2-video-marketing.png",
        date: "Feb 11, 2026",
        author: "MangoMind AI Research",
        title: "Seedance 2.0: The End of Manual Video Production?",
        excerpt: "ByteDance's new AI model + MangoMind Agents = The ultimate viral video workflow for 2026."
    },
    {
        id: 'grok-imagine-review',
        image: "/blogs/grok.png",
        date: "Feb 9, 2026",
        author: "AI Research",
        title: "Grok Imagine Review: The Future of AI Media",
        excerpt: "Text-to-Video, Image-to-Video, and Uncensored creative freedom. Is it the best all-in-one AI media tool?"
    },
    {
        id: 'model-comparison-2026',
        image: "/blogs/grokvsnano.png",
        date: "Feb 9, 2026",
        author: "MangoMind AI Research",
        title: "Nano Banana vs Qwen vs Grok: The 2026 Showdown",
        excerpt: "A comprehensive comparison: Cost, creative freedom, and reliability benchmarks."
    },
    {
        id: 'feb-2026-benchmark-report',
        image: "/blogs/Feb 1.jpg",
        date: "Feb 7, 2026",
        author: "AI Research",
        title: "February 2026 Benchmark Report: The State of AI",
        excerpt: "Comprehensive comparison of Gemini 3, Sonnet 5, and the shifting landscape of model efficiency."
    },
    {
        id: 'feb-2026-top-models',
        image: "/blogs/february benchamarks.png",
        date: "Feb 7, 2026",
        author: "Market Watch",
        title: "Top AI Models of February 2026",
        excerpt: "The new kings of code: Sonnet 5, GPT-5.2, and the rise of Flash reasoning."
    },
    {
        id: 'best-local-models',
        image: "/blogs/ollama models openclaw.png",
        date: "Feb 7, 2026",
        author: "Hardware Lab",
        title: "Best Local Models for OpenClaw & Moltbot (2026)",
        excerpt: "Ranked list of top LLMs for agents: DeepSeek V3, Qwen 2.5, and efficient 7B models."
    },
    {
        id: 'openclaw-not-ready',
        image: "/blogs/Openrouter openclaw models 1.png",
        date: "Feb 7, 2026",
        author: "Tech Analysis",
        title: "Why OpenClaw Is Not Ready for Consumers Yet",
        excerpt: "High API costs, hardware barriers, and the trap of 'free' tiers make it a difficult sell for hobbyists."
    },
    {
        id: 'feb-2026-benchmarks',
        image: "/blogs/ai-leaders-2026-hero.png",
        date: "Feb 5, 2026",
        author: "Tech Insights",
        title: "February 2026 Benchmark Report: The State of AI",
        excerpt: "Comprehensive comparison of Gemini 3, Claude 4.5, and Kimi k2.5. Who leads the arms race?"
    },
    {
        id: 'ai-leaders-2026',
        image: "/blogs/ai-leaders-2026-hero.png",
        date: "Feb 4, 2026",
        author: "MangoMind Policy",
        title: "Top 25 AI Leaders & Companies in 2026",
        excerpt: "Global power rankings of AI titans. How US and China are competing for dominance."
    },
    {
        id: 'ai-impact-bangladesh-jobs',
        image: "/blogs/ai-jobs-bangladesh-hero.png",
        date: "Feb 3, 2026",
        author: "Economy Desk",
        title: "The Great Sink: Which Jobs Are Disappearing in Bangladesh?",
        excerpt: "Analyzing the impact of AI on RMG, data entry, and freelancing sectors in Dhaka."
    },
    {
        id: 'kimi-k2-5-benchmarks',
        image: "/blogs/kimi-k2-5-hero.png",
        date: "Feb 2, 2026",
        author: "Model Review",
        title: "Kimi k2.5: The Open Source Moonshot Giant",
        excerpt: "A deep dive into Moonshot AI's latest 1T parameter MoE model and its agentic power."
    },
    {
        id: 'ai-startups',
        image: "/blogs/ai-startups.png",
        date: "Feb 1, 2026",
        author: "Mangomind Strategy",
        title: "AI for Startups: Low-Cost Automation Strategies",
        excerpt: "Budget-friendly tips for small businesses looking to scale. Why startups are searching for automation in 2026."
    },
    {
        id: 'ai-platforms-bd',
        image: "/blogs/ai-startups-bangladesh-hero.png",
        date: "Jan 31, 2026",
        author: "Tech BD",
        title: "Top AI Platforms in Bangladesh 2026",
        excerpt: "Gaze, Sigmind, and MangoMind—the companies leading the AI-First revolution in Dhaka."
    },
    {
        id: 'cheap-ai-apis',
        image: "/blogs/cheap-ai-api-providers.png",
        date: "Jan 30, 2026",
        author: "Dev Corner",
        title: "Top 5 Cheap AI API Providers in 2026",
        excerpt: "Save thousands with OpenRouter, Fal.ai, and Runware. Unified access at the lowest cost."
    },
    {
        id: 'gemini-photo-guide',
        image: "/blogs/gemini-ai-photo-hero.png",
        date: "Jan 29, 2026",
        author: "Creative Labs",
        title: "Gemini AI Photo Generator: Professional Guide",
        excerpt: "How to use Google's Imagen 3 for hyper-realistic image generation with perfect text."
    },
    {
        id: 'voice-search',
        image: "/blogs/voice-search.png",
        date: "Jan 28, 2026",
        author: "SEO Team",
        title: "The Role of AI in Voice Search Optimization",
        excerpt: "Strategies for Alexa and Siri-friendly content. Growing queries for AI voice search explained."
    },
    {
        id: 'glm-flash-vs-gemini',
        image: "/blogs/glm-4-7-flash-hero.png",
        date: "Jan 27, 2026",
        author: "Speed Test",
        title: "GLM 4.7 Flash vs. Gemini: A New Speed King?",
        excerpt: "Is Zhipu AI's latest model faster and cheaper than Google's 1.5 Flash? We test the latency."
    },
    {
        id: 'ai-studio-bd',
        image: "/blogs/google-ai-studio-hero.png",
        date: "Jan 26, 2026",
        author: "Platform News",
        title: "Accessing Gemini & Veo in Bangladesh",
        excerpt: "The MangoMind bridge: Get Google AI Studio models without VPN or credit card."
    },
    {
        id: 'ai-seo-2026',
        image: "/blogs/ai-seo.png",
        date: "Jan 25, 2026",
        author: "Growth Desk",
        title: "Boost Your Website's SEO Ranking in 2026",
        excerpt: "Tips on AI content generators and keyword analyzers. How to rank for hot SEO search terms."
    },
    {
        id: 'exam-assistant',
        image: "/blogs/exam-assistant-hotkeys.png",
        date: "Jan 24, 2026",
        author: "Education Team",
        title: "MangoMind Exam Assistant: Ultimate Study Hack",
        excerpt: "How to use our Windows overlay tool to solve MCQs and master complex subjects."
    },
    {
        id: 'ai-truth-detectors',
        image: "/blogs/ai-detector-hero.png",
        date: "Jan 23, 2026",
        author: "Ethics Lab",
        title: "The Truth About Free AI Detectors",
        excerpt: "Why free checkers fail and how to use our AI Humanizer for authentic writing."
    }
];


const BlogIndex = () => {
    return (
        <>
            <div className="gradient-bg" />
            <section className="section-padding" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
                <div className="container">
                    <Link to="/" className="flex-center" style={{ width: 'fit-content', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                        <ArrowLeft size={18} /> Back to Home
                    </Link>

                    <motion.div
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1>Mangomind <span className="text-gradient">Insights</span></h1>
                        <p>Latest thoughts on AI, Automation, and Business Growth.</p>
                    </motion.div>

                    <div className="services-grid">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card"
                                style={{ padding: '0', overflow: 'hidden' }}
                            >
                                <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                        <img className="blog-card-image" src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                                    </div>
                                    <div style={{ padding: '2rem' }}>
                                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                            <span className="flex-center" style={{ gap: '0.3rem' }}><Calendar size={14} /> {blog.date}</span>
                                            <span className="flex-center" style={{ gap: '0.3rem' }}><User size={14} /> {blog.author}</span>
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4', color: 'var(--text-primary)' }}>{blog.title}</h3>
                                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{blog.excerpt}</p>
                                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', color: 'var(--accent-orange)', fontWeight: 'bold' }}>
                                            Read Article <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogIndex;
