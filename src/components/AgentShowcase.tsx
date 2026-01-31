import { motion } from 'framer-motion';
import { User, Search, FileText, Globe, MessageSquare, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AgentShowcase = () => {
    const { t } = useLanguage();

    const icons = [
        <User size={32} className="text-orange-500" />,
        <Globe size={32} className="text-orange-500" />,
        <Search size={32} className="text-orange-500" />,
        <FileText size={32} className="text-orange-500" />,
        <Smartphone size={32} className="text-orange-500" />,
        <MessageSquare size={32} className="text-orange-500" />
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>{t.showcase.title} <span className="text-gradient">{t.showcase.titleHighlight}</span></h2>
                    <p>{t.showcase.subtitle}</p>
                </motion.div>

                <div className="services-grid">
                    {t.showcase.agents.map((agent, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{ padding: '2rem' }}
                        >
                            <div className="card-icon" style={{ background: 'rgba(249, 115, 22, 0.1)' }}>
                                {icons[index]}
                            </div>
                            <h3>{agent.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{agent.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgentShowcase;
