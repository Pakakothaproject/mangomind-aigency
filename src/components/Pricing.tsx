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

                <div className="pricing-grid">
                    {t.pricing.plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{
                                border: plan.popular ? '1px solid var(--accent-orange)' : '1px solid rgba(255,255,255,0.1)',
                                background: plan.popular ? 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(249, 115, 22, 0.05) 100%)' : 'transparent',
                            }}
                        >
                            {plan.popular && (
                                <div className="popular-badge">
                                    POPULAR
                                </div>
                            )}

                            <div className="plan-header">
                                <div className="icon-wrapper">
                                    {icons[index]}
                                </div>
                                <h3>{plan.name}</h3>
                                <p className="plan-desc">{plan.desc}</p>
                            </div>

                            <div className="plan-price">
                                <span className="price-value">{plan.price}</span>
                                {plan.period && <span className="price-period"> {plan.period}</span>}
                            </div>

                            <ul className="feature-list">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex-center feature-item">
                                        {plan.popular ? <Check size={18} className="text-orange-500" /> : <Check size={18} className="text-green-500" />}
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://wa.me/8801911730703"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${plan.popular ? "btn-primary" : "btn-outline"} btn-compact`}
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
