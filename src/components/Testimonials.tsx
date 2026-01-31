import { motion } from 'framer-motion';
import { Quote, TrendingUp, Smartphone, ShoppingBag, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const { t } = useLanguage();

    const icons = [
        <User className="text-orange-500" />,
        <ShoppingBag className="text-orange-500" />,
        <Smartphone className="text-orange-500" />
    ];

    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>{t.testimonials.title} <span className="text-gradient">{t.testimonials.titleHighlight}</span></h2>
                    <p>{t.testimonials.subtitle}</p>
                </motion.div>

                <div className="services-grid">
                    {t.testimonials.items.map((item, index) => (
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
                                        {icons[index]}
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
