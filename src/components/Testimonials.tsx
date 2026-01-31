import { motion } from 'framer-motion';
import { Quote, TrendingUp, Smartphone, ShoppingBag, User } from 'lucide-react';

const testimonials = [
    {
        quote: "We replaced our entire 4-person sales team with Mangomind's AI agents. It was costing us 1,02,000 BDT per month—now we run on autopilot for a fraction of the cost.",
        author: "CEO, Fashion Brand",
        location: "Dhaka",
        icon: <User className="text-orange-500" />,
        stats: [
            { label: "Savings", value: "৳1.02L/mo" },
            { label: "Headcount", value: "-4 Roles" }
        ]
    },
    {
        quote: "My Ecommerce Salesman works 24/7. It handles customer queries on Facebook and my website even when I'm sleeping. Sales increased by 30% in just one week.",
        author: "Owner, Gadget Shop",
        location: "Chittagong",
        icon: <ShoppingBag className="text-orange-500" />,
        stats: [
            { label: "Sales Up", value: "+30%" },
            { label: "Uptime", value: "24/7" }
        ]
    },
    {
        quote: "I control my entire agency from WhatsApp now. My Personal Assistant agent researches topics and creates files for me just by me texting it. It feels like magic.",
        author: "Digital Marketer",
        location: "Sylhet",
        icon: <Smartphone className="text-orange-500" />,
        stats: [
            { label: "Efficiency", value: "10x" },
            { label: "Platform", value: "WhatsApp" }
        ]
    }
];

const Testimonials = () => {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Client <span className="text-gradient">Success Stories</span></h2>
                    <p>Real results from Dhaka's top businesses.</p>
                </motion.div>

                <div className="services-grid">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}
                        >
                            <Quote size={32} className="text-orange-500" style={{ opacity: 0.5, marginBottom: '1rem' }} />
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', flex: 1, fontStyle: 'italic' }}>"{item.quote}"</p>

                            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
                                <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div>
                                        <p style={{ fontWeight: 'bold', color: 'white' }}>{item.author}</p>
                                        <p style={{ fontSize: '0.85rem' }}>{item.location}</p>
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem', borderRadius: '50%' }}>
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="flex-center" style={{ gap: '1rem', background: 'rgba(74, 222, 128, 0.1)', padding: '0.75rem', borderRadius: '8px' }}>
                                    {item.stats.map((stat, i) => (
                                        <div key={i} className="flex-center" style={{ gap: '0.4rem' }}>
                                            <TrendingUp size={14} className="text-green-500" />
                                            <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#4ade80' }}>
                                                {stat.label}: {stat.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
