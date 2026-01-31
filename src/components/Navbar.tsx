import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, toggleLanguage } = useLanguage();

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
        <Link to="/" className="flex-center" style={{ textDecoration: 'none' }}>
          <img src="/scs.png" alt="Mangomind Logo" style={{ height: '40px', width: 'auto' }} />
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-nav nav-links">
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
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '0.4rem 0.8rem',
              color: 'white',
              cursor: 'pointer',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            <Globe size={14} />
            {t.nav.languageToggle}
          </button>

          <a href="https://www.mangomindbd.com" target="_blank" rel="noopener noreferrer" className="nav-link" style={{ color: 'var(--accent-orange)' }}>
            Try AI Apps
          </a>
          <a href="https://wa.me/8801911730703" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
            {t.nav.ctaButton}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle flex-center"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '8px'
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            <div className="flex-col gap-4">
              <a href="/#services" className="nav-link" onClick={() => setIsOpen(false)}>{t.nav.services}</a>
              <a href="/#process" className="nav-link" onClick={() => setIsOpen(false)}>Process</a>
              <a href="/#about" className="nav-link" onClick={() => setIsOpen(false)}>Why Us</a>
              <Link to="/models" className="nav-link" onClick={() => setIsOpen(false)}>{t.nav.models}</Link>
              <Link to="/blogs" className="nav-link" onClick={() => setIsOpen(false)}>{t.nav.blogs}</Link>
              <a href="https://www.mangomindbd.com" className="nav-link" style={{ color: 'var(--accent-orange)' }} onClick={() => setIsOpen(false)}>Try AI Apps</a>

              <div className="flex-between" style={{ marginTop: '1rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                <button
                  onClick={() => { toggleLanguage(); setIsOpen(false); }}
                  className="flex-center"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    padding: '0.6rem 1.2rem',
                    color: 'white',
                    cursor: 'pointer',
                    gap: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  <Globe size={16} />
                  {t.nav.languageToggle === 'EN' ? 'English' : 'Bengali'}
                </button>
                <a
                  href="https://wa.me/8801911730703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.ctaButton}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

