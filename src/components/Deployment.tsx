import { motion } from 'framer-motion';
import { Cloud, Cpu, DollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Deployment = () => {
    const { t } = useLanguage();

    const icons = [
        <Cloud size={32} className="text-orange-500" />,
        <Cpu size={32} className="text-orange-500" />,
        <DollarSign size={32} className="text-orange-500" />
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
                    <h2>{t.deployment.title} <span className="text-gradient">{t.deployment.titleHighlight}</span></h2>
                    <p>{t.deployment.subtitle}</p>
                </motion.div>

                <div className="services-grid">
                    {t.deployment.options.map((opt, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card"
                            style={{ padding: '2rem', textAlign: 'left' }}
                        >
                            <div style={{ background: 'rgba(249, 115, 22, 0.1)', width: 'fit-content', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                {icons[index]}
                            </div>
                            <h3>{opt.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{opt.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Deployment;
