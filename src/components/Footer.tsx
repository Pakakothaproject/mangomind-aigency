import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Custom icons for X and HuggingFace
const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const HuggingFaceIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 17.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm3 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm-4.5-6c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm6 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer id="main-footer" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', padding: '4rem 0 0' }}>
            <div className="container">
                <div className="footer-grid">

                    {/* Brand */}
                    <div style={{ maxWidth: '300px' }}>
                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
                            <img
                                src="/scs.png"
                                alt="Mangomind Logo"
                                width="110"
                                height="40"
                                style={{ height: '40px', width: 'auto' }}
                            />
                            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Mangomind</span>
                        </div>
                        <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                            {t.footer.about}
                        </p>
                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '1rem' }}>
                            <a href="https://www.facebook.com/mangomindAI/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} title="Facebook" aria-label="Follow us on Facebook"><FacebookIcon /></a>
                            <a href="https://x.com/MangomindAi/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} title="X (Twitter)" aria-label="Follow us on X (Twitter)"><XIcon /></a>
                            <a href="https://huggingface.co/MangoMindAI" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} title="Hugging Face" aria-label="Follow us on Hugging Face"><HuggingFaceIcon /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex-col gap-4">
                        <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{t.footer.company}</h3>
                        <a href="/#about" className="nav-link" style={{ fontSize: '0.9rem' }}>{t.footer.aboutUs}</a>
                        <a href="/#services" className="nav-link" style={{ fontSize: '0.9rem' }}>{t.footer.services}</a>
                        <a href="/models" className="nav-link" style={{ fontSize: '0.9rem' }}>{t.footer.models}</a>
                        <a href="/blogs" className="nav-link" style={{ fontSize: '0.9rem' }}>{t.footer.blog}</a>
                    </div>

                    {/* Contact */}
                    <div className="flex-col gap-4">
                        <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{t.footer.contact}</h3>
                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <Mail size={16} />
                            <span>agent@mangomindbd.com</span>
                        </div>
                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <Phone size={16} />
                            <span>+8801614395930</span>
                        </div>
                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <MapPin size={16} />
                            <span>21, Chowrasta, Jashore & Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', paddingBottom: '0', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <p style={{ margin: 0, paddingBottom: 0 }}>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
