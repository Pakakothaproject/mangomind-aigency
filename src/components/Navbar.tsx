import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex-between">
        <a href="/" className="flex-center" style={{ textDecoration: 'none' }}>
          <img src="/scs.png" alt="Mangomind Logo" style={{ height: '50px', width: 'auto' }} />
        </a>

        {/* Desktop Menu */}
        <div className="hidden-mobile nav-links">
          <a href="/#services" className="nav-link">{t.nav.services}</a>
          <a href="/#process" className="nav-link">Process</a>
          <a href="/#about" className="nav-link">Why Us</a>
          <Link to="/models" className="nav-link">{t.nav.models}</Link>
          <Link to="/blogs" className="nav-link">{t.nav.blogs}</Link>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex-center"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              padding: '0.4rem 0.8rem',
              color: 'white',
              cursor: 'pointer',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
            title={language === 'en' ? 'Switch to Bangla' : 'Switch to English'}
          >
            <Globe size={14} />
            {t.nav.languageToggle}
          </button>

          <a href="https://www.mangomindbd.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem', background: 'transparent', border: '1px solid var(--accent-orange)', color: 'var(--accent-orange)' }}>
            Try AI Apps
          </a>
          <a href="https://wa.me/8801911730703" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
            {t.nav.ctaButton}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="hidden-md" style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            <a href="/#services" className="nav-link" onClick={() => setIsOpen(false)}>{t.nav.services}</a>
            <a href="/#process" className="nav-link" onClick={() => setIsOpen(false)}>Process</a>
            <a href="/#about" className="nav-link" onClick={() => setIsOpen(false)}>Why Us</a>
            <Link to="/models" className="nav-link" onClick={() => setIsOpen(false)}>{t.nav.models}</Link>
            <Link to="/blogs" className="nav-link" onClick={() => setIsOpen(false)}>{t.nav.blogs}</Link>
            <button
              onClick={() => { toggleLanguage(); setIsOpen(false); }}
              className="flex-center"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                padding: '0.5rem 1rem',
                color: 'white',
                cursor: 'pointer',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                width: 'fit-content'
              }}
            >
              <Globe size={16} />
              {t.nav.languageToggle}
            </button>
            <a href="https://wa.me/8801911730703" target="_blank" rel="noopener noreferrer" className="text-gradient" style={{ fontWeight: 700 }} onClick={() => setIsOpen(false)}>{t.nav.ctaButton}</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

