import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogs = [
    {
        id: 'ai-startups',
        image: "/blogs/ai-startups.png",
        date: "Feb 1, 2026",
        author: "Mangomind Strategy",
        title: "AI for Startups: Low-Cost Automation Strategies",
        excerpt: "Budget-friendly tips for small businesses looking to scale."
    },
    {
        id: 'ai-trends-2026',
        image: "/blogs/ai-trends.png",
        date: "Jan 31, 2026",
        author: "Future Labs",
        title: "2026 AI Trends: Workplace Transformation",
        excerpt: "Predictions on automation and visibility tech in 2026."
    },
    {
        id: 'voice-search',
        image: "/blogs/voice-search.png",
        date: "Jan 28, 2026",
        author: "SEO Team",
        title: "The Role of AI in Voice Search Optimization",
        excerpt: "Strategies for Alexa and Siri-friendly content."
    }
];

const Blogs = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Latest <span className="text-gradient">Insights</span></h2>
                    <p>Trends and strategies for the modern business.</p>
                </motion.div>

                <div className="services-grid">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card"
                            style={{ padding: '0', overflow: 'hidden' }}
                        >
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} />
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                    <span className="flex-center" style={{ gap: '0.3rem' }}><Calendar size={14} /> {blog.date}</span>
                                    <span className="flex-center" style={{ gap: '0.3rem' }}><User size={14} /> {blog.author}</span>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4' }}>{blog.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{blog.excerpt}</p>
                                <Link to={`/blog/${blog.id}`} className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', color: 'var(--accent-orange)', fontWeight: 'bold', textDecoration: 'none' }}>
                                    Read More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
