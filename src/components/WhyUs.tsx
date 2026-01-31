import { motion } from 'framer-motion';
import { Truck, CheckCircle, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const WhyUs = () => {
    const { t } = useLanguage();

    const icons = [
        <Shield size={24} className="text-orange-500" />,
        <Truck size={24} className="text-orange-500" />,
        <CheckCircle size={24} className="text-orange-500" />
    ];

    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="flex-col md:flex-row flex-between gap-8">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>{t.whyUs.title} <span className="text-gradient">{t.whyUs.titleHighlight}?</span></h2>
                        <p style={{ maxWidth: '400px', marginTop: '1rem' }}>
                            {t.hero.subtext}
                        </p>

                        <div className="flex-col gap-4" style={{ marginTop: '2rem' }}>
                            {t.whyUs.benefits.map((reason, index) => (
                                <div key={index} className="flex-center" style={{ justifyContent: 'flex-start', gap: '1rem' }}>
                                    <div style={{ background: 'rgba(249, 115, 22, 0.1)', padding: '0.75rem', borderRadius: '8px', color: 'var(--accent-orange)' }}>
                                        {icons[index]}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{reason.title}</h3>
                                        <p style={{ fontSize: '0.9rem', marginBottom: 0, color: 'var(--text-secondary)' }}>{reason.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="flex-1 flex-center" style={{ gap: '1rem', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {t.whyUs.stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="glass-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * (index + 1) }}
                                viewport={{ once: true }}
                                style={{ flex: 1, minWidth: '140px', padding: '1.5rem 1rem', textAlign: 'center' }}
                            >
                                <span className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', display: 'block', lineHeight: 1 }}>{stat.value}</span>
                                <span style={{ fontSize: '0.9rem', color: 'white' }}>{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '5rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{ fontSize: '2rem' }}>{t.math.title} <span className="text-gradient">{t.math.titleHighlight}</span></h2>
                    <p>{t.math.subtitle}</p>
                </motion.div>

                <div className="responsive-flex gap-8" style={{ alignItems: 'stretch' }}>
                    {/* Before Card */}
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: 1, padding: 0, overflow: 'hidden' }}
                    >
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <img
                                src="/office-before.png"
                                alt="Traditional Office"
                                loading="lazy"
                                width="500"
                                height="276"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                            />
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '1.25rem' }}>{t.math.before.title}</h3>
                            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {t.math.before.items.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }}></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#fca5a5' }}>{t.math.before.costLabel} <strong>{t.math.before.costValue}</strong></p>
                            </div>
                        </div>
                    </motion.div>

                    {/* After Card */}
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: 1, padding: 0, overflow: 'hidden', border: '1px solid var(--accent-orange)' }}
                    >
                        <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                            <img
                                src="/office-after.png"
                                alt="AI Optimized Office"
                                loading="lazy"
                                width="500"
                                height="276"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'var(--accent-orange)', color: 'black', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                {t.math.after.badge}
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <h3 style={{ color: 'var(--accent-orange)', marginBottom: '1rem', fontSize: '1.25rem' }}>{t.math.after.title}</h3>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {t.math.after.items.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                                        <CheckCircle size={16} className="text-orange-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
                                <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--accent-orange)', fontWeight: 'bold' }}>{t.math.after.savingsLabel} {t.math.after.savingsValue}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
