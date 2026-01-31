import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="section-padding" style={{ paddingBottom: '8rem' }}>
            <div className="container">
                <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ padding: '4rem 2rem', textAlign: 'center', overflow: 'hidden' }}
                >
                    {/* Background Glow */}
                    <div className="glow-orb" style={{ background: 'var(--accent-orange)', width: '300px', height: '300px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.2 }} />

                    <h2 style={{ marginBottom: '1rem' }}>{t.contact.title} <span className="text-gradient">{t.contact.titleHighlight}</span></h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
                        {t.contact.subtext}
                    </p>

                    <div className="flex-center" style={{ flexDirection: 'column', gap: '1.5rem' }}>
                        <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
                            {t.contact.whatsapp} <ArrowRight />
                        </button>

                        <div className="flex-center" style={{ gap: '2rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
                            <a href="mailto:agent@mangomindbd.com" className="flex-center" style={{ gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
                                <Mail size={18} /> agent@mangomindbd.com
                            </a>
                            <a href="https://wa.me/8801911730703" className="flex-center" style={{ gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
                                <Phone size={18} /> +880 1911 730 703 (WA Business)
                            </a>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

