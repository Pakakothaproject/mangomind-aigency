import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Globe, Smartphone, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIStudioBD = () => {
    return (
        <article className="section-padding" style={{ paddingTop: '120px', background: 'var(--bg-primary)', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <Link to="/blogs" className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', color: 'var(--accent-orange)', textDecoration: 'none', marginBottom: '2rem', fontSize: '0.9rem' }}>
                    <ArrowLeft size={16} /> Back to Blogs
                </Link>

                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginBottom: '3rem' }}
                >
                    <div className="badge">Platform Updates</div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Google AI Studio Models: Accessing <span className="text-gradient">Gemini & Veo in Bangladesh</span></h1>

                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Clock size={16} /> 7 min read</span>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Tag size={16} /> #GoogleAI #Bangladesh #GeminiFlash</span>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)' }}
                >
                    <img src="/blogs/google-ai-studio-hero.png" alt="Google AI Studio Access" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>

                <div className="blog-content" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>
                    <p style={{ fontSize: '1.35rem', color: 'white', marginBottom: '2.5rem', fontWeight: 500 }}>
                        Want access to Google's most powerful models without the API headache? Discover how to use Gemini 1.5 Pro, Flash, and Veo directly through MangoMind.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>The MangoMind Bridge 🥭</h2>
                    <p>
                        Accessing Google AI Studio in Bangladesh can be tricky—requiring VPNs, overseas billing, and complex API keys. MangoMind acts as your bridge, integrating these cutting-edge models into a local, easy-to-use platform.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', margin: '3rem 0' }}>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <Smartphone size={32} color="var(--accent-orange)" style={{ marginBottom: '1rem' }} />
                            <h4>Local Payments</h4>
                            <p style={{ fontSize: '0.85rem' }}>No credit card. Use bKash, Nagad, or Rocket.</p>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <Globe size={32} color="var(--accent-orange)" style={{ marginBottom: '1rem' }} />
                            <h4>No VPN</h4>
                            <p style={{ fontSize: '0.85rem' }}>Direct integration means no region locks.</p>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <Zap size={32} color="var(--accent-orange)" style={{ marginBottom: '1rem' }} />
                            <h4>Priority Access</h4>
                            <p style={{ fontSize: '0.85rem' }}>Skip waitlists for models like Veo.</p>
                        </div>
                    </div>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '2rem', fontSize: '2rem' }}>What Models Can You Access?</h2>
                    <ul style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', padding: 0, listStyle: 'none' }}>
                        <li className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem' }}>
                            <CheckCircle2 color="var(--accent-orange)" size={24} style={{ flexShrink: 0 }} />
                            <div>
                                <strong style={{ color: 'white' }}>Gemini 1.5 Pro (Latest)</strong>
                                <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>Upload entire books or massive codebases with the 2 million token context window.</p>
                            </div>
                        </li>
                        <li className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem' }}>
                            <CheckCircle2 color="var(--accent-orange)" size={24} style={{ flexShrink: 0 }} />
                            <div>
                                <strong style={{ color: 'white' }}>Gemini Flash</strong>
                                <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>The lightning-fast, high-efficiency workhorse for everyday tasks.</p>
                            </div>
                        </li>
                        <li className="glass-card" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem' }}>
                            <CheckCircle2 color="var(--accent-orange)" size={24} style={{ flexShrink: 0 }} />
                            <div>
                                <strong style={{ color: 'white' }}>Google Veo (Coming Soon)</strong>
                                <p style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>Cinema-grade video generation right inside your MangoMind dashboard.</p>
                            </div>
                        </li>
                    </ul>

                    <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '24px', textAlign: 'center', border: '1px solid var(--accent-orange)' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>Skip the API Headache</h3>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Get the smartest Google models without the "enterprise" setup.</p>
                        <Link to="/models" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Start Chatting Now →</Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default AIStudioBD;
