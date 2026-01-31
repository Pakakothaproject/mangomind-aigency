import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div className="hero-section">
            {/* Background Elements */}
            <div className="glow-orb orb-1" />
            <div className="glow-orb orb-2" />
            <div className="noise-overlay" />

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="badge"
                >
                    <Star size={14} fill="currentColor" />
                    <span>{t.hero.badge}</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {t.hero.headline} <br />
                    <span className="text-span-gradient">
                        {t.hero.headlineHighlight}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ fontSize: '1.25rem', lineHeight: '1.75' }}
                >
                    {t.hero.subtext}
                </motion.p>

                <motion.div
                    className="flex-center"
                    style={{ gap: '1rem', flexWrap: 'wrap' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="https://wa.me/8801911730703" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        {t.hero.ctaPrimary}
                        <ArrowRight size={16} />
                    </a>
                    <a href="#process" className="btn-outline">
                        {t.hero.ctaSecondary}
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;

