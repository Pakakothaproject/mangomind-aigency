import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Cpu, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExamAssistantBlog = () => {
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
                    <div className="badge">Guides & Tutorials</div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>MangoMind <span className="text-gradient">Exam Assistant</span>: The Ultimate AI Study Hack for Windows</h1>

                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Clock size={16} /> 7 min read</span>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Tag size={16} /> #ExamHelper #StudyHack #AIWindows</span>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)' }}
                >
                    {/* Note: using a general AI image or generating one if hero missing */}
                    <img src="/blogs/exam-assistant-hotkeys.png" alt="Exam Assistant App" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>

                <div className="blog-content" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>
                    <p style={{ fontSize: '1.35rem', color: 'white', marginBottom: '2.5rem', fontWeight: 500 }}>
                        Struggling with tough questions? Meet the MangoMind Exam Assistant for Windows—your secret weapon for acing exams and understanding complex topics instantly.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>🚀 The AI Exam Hacker</h2>
                    <p>
                        The Exam Assistant isn't just a chatbot; it's a powerful screen overlay tool designed for students who want the upper hand. It stays hidden until you need it, and with a simple hotkey, it captures the question on your screen and provides the correct answer instantly.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', margin: '3rem 0' }}>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <Layout size={32} color="var(--accent-orange)" style={{ marginBottom: '1rem' }} />
                            <h4>Screen Overlay</h4>
                            <p style={{ fontSize: '0.95rem' }}>No more switching tabs. The AI appears directly over your exam window.</p>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <Cpu size={32} color="var(--accent-orange)" style={{ marginBottom: '1rem' }} />
                            <h4>Smart Detection</h4>
                            <p style={{ fontSize: '0.95rem' }}>Automatically detects MCQs and highlights the correct choice.</p>
                        </div>
                    </div>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>🎮 Master the Controls: Hotkeys</h2>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '1.5rem' }}>
                                <div style={{ background: 'var(--accent-orange)', color: 'black', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 700, minWidth: '120px', textAlign: 'center' }}>Shift + Q</div>
                                <span>Capture question area</span>
                            </div>
                            <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '1.5rem' }}>
                                <div style={{ background: 'var(--accent-orange)', color: 'black', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 700, minWidth: '120px', textAlign: 'center' }}>Shift + Q (Hold)</div>
                                <span>Trigger Deep Research mode</span>
                            </div>
                            <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '1.5rem' }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontWeight: 700, minWidth: '120px', textAlign: 'center' }}>Shift + W</div>
                                <span>Clear the overlay</span>
                            </div>
                        </div>
                    </div>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.3rem', fontSize: '1.8rem' }}>The Token Advantage</h2>
                    <p>
                        We use MangoMind Tokens, so you aren't locked into a subscription. Have a light study month? You pay less. Cramming for finals? Top up as needed.
                    </p>

                    <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '24px', textAlign: 'center', border: '1px solid var(--accent-orange)' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>Ready to Study Smarter?</h3>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Download the Exam Support AI today from your dashboard.</p>
                        <Link to="/#contact" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Download Assistant →</Link>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2rem' }}>*Please use responsibly and adhere to academic integrity guidelines.*</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ExamAssistantBlog;
