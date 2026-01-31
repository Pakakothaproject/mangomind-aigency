import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Process = () => {
    const { t } = useLanguage();

    return (
        <section id="process" className="section-padding">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>{t.processSection.title} <span className="text-gradient">{t.processSection.titleHighlight}</span></h2>
                    <p>{t.processSection.subtitle}</p>
                </motion.div>

                <div className="services-grid" style={{ gap: '2rem' }}>
                    {t.processSection.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{ padding: '2rem', borderTop: '1px solid var(--glass-border)', position: 'relative' }}
                        >
                            <span style={{ fontSize: '4rem', fontWeight: 'bold', opacity: 0.1, position: 'absolute', top: '0', right: '1rem', color: 'var(--accent-orange)' }}>
                                {step.num}
                            </span>
                            <h3 style={{ marginTop: '1rem', color: 'var(--accent-orange)' }}>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
