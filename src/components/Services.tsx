import { motion } from 'framer-motion';
import { Users, Bot, Search, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    const icons = [
        <Users size={32} color="#f97316" />,
        <Bot size={32} color="#f97316" />,
        <Search size={32} color="#f97316" />
    ];

    const gradients = [
        "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(15, 23, 42, 0))",
        "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(15, 23, 42, 0))",
        "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(15, 23, 42, 0))"
    ];

    return (
        <section id="services" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>{t.services.title} <span className="text-gradient">{t.services.titleHighlight}</span></h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        {t.services.subtitle}
                    </p>
                </motion.div>

                <div className="services-grid">
                    {t.services.items.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card"
                        >
                            <div
                                className="hover-gradient"
                                style={{ background: gradients[index] }}
                            />

                            <div className="card-content">
                                <div className="card-icon">
                                    {icons[index]}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>

                                <div className="card-link">
                                    <span>{t.services.learnMore}</span>
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
