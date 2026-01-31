import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
    const { t } = useLanguage();

    const icons = [
        <Zap size={24} className="text-orange-500" />,
        <Bot size={24} className="text-orange-500" />
    ];

    return (
        <section id="pricing" className="section-padding">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>{t.pricing.title} <span className="text-gradient">{t.pricing.titleHighlight}</span></h2>
                    <p>{t.pricing.subtitle}</p>
                </motion.div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'stretch' }}>
                    {t.pricing.plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '2.5rem',
                                flex: 1,
                                maxWidth: '450px',
                                border: plan.popular ? '1px solid var(--accent-orange)' : '1px solid rgba(255,255,255,0.1)',
                                background: plan.popular ? 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(249, 115, 22, 0.05) 100%)' : 'transparent',
                                position: 'relative'
                            }}
                        >
                            {plan.popular && (
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--accent-orange)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', color: 'black' }}>
                                    POPULAR
                                </div>
                            )}

                            <div style={{ marginBottom: '1.5rem' }}>
                                <div style={{ background: 'rgba(249, 115, 22, 0.1)', width: 'fit-content', padding: '0.75rem', borderRadius: '12px', marginBottom: '1rem' }}>
                                    {icons[index]}
                                </div>
                                <h3>{plan.name}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{plan.desc}</p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <span style={{ fontSize: index === 0 ? '2.5rem' : '2rem', fontWeight: 'bold' }}>{plan.price}</span>
                                {plan.period && <span style={{ color: 'var(--text-secondary)' }}> {plan.period}</span>}
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                        {plan.popular ? <Check size={18} className="text-orange-500" /> : <Check size={18} className="text-green-500" />}
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://wa.me/8801911730703"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={plan.popular ? "btn-primary" : "btn-outline"}
                                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                            >
                                {plan.cta} {plan.popular && <ArrowRight size={16} />}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
