import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const GLMvsGemini = () => {
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
                    <div className="badge">AI Models</div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}><span className="text-gradient">GLM 4.7 Flash</span> vs. The World: A New Speed King?</h1>

                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Clock size={16} /> 8 min read</span>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Tag size={16} /> #GLM4 #GeminiFlash #AISpeed</span>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)' }}
                >
                    <img src="/blogs/glm-4-7-flash-hero.png" alt="GLM 4.7 Flash vs Gemini 3" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>

                <div className="blog-content" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>
                    <p style={{ fontSize: '1.35rem', color: 'white', marginBottom: '2.5rem', fontWeight: 500 }}>
                        Zhipu AI has entered the chat with GLM 4.7 Flash. Released in mid-January 2026, this model is a direct shot across the bow of Google's Gemini 3 Pro Flash in the race for efficiency.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>Benchmark Battle</h2>
                    <div style={{ overflowX: 'auto', margin: '3rem 0' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', overflow: 'hidden' }}>
                            <thead>
                                <tr style={{ background: 'rgba(249,115,22,0.1)' }}>
                                    <th style={{ padding: '1.5rem', textAlign: 'left' }}>Benchmark</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left' }}>GLM 4.7 Flash</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left' }}>Gemini 3 Flash</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Context Window', '200K', '2M'],
                                    ['GPQA (Reasoning)', '53.1%', '51.8%'],
                                    ['Input Cost', '$0.05 / 1M', '$0.10 / 1M'],
                                    ['Latency', '~12ms', '~25ms']
                                ].map(([stat, glm, gemini], i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 700 }}>{stat}</td>
                                        <td style={{ padding: '1.25rem', color: 'var(--accent-orange)' }}>{glm}</td>
                                        <td style={{ padding: '1.25rem', color: 'var(--text-secondary)' }}>{gemini}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>When to Use Which?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', margin: '3rem 0' }}>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h4 style={{ color: 'var(--accent-orange)', marginBottom: '1.2rem' }}>Choose GLM 4.7 Flash if:</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li>• Lowest possible latency is needed</li>
                                <li>• Building local/edge applications</li>
                                <li>• Cost is the primary constraint</li>
                            </ul>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h4 style={{ color: 'var(--accent-orange)', marginBottom: '1.2rem' }}>Choose Gemini 3 Flash if:</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li>• Massive 2M context required</li>
                                <li>• Deep Google ecosystem integration</li>
                                <li>• Complex architectural coding tasks</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '24px', textAlign: 'center', border: '1px solid var(--accent-orange)' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>Deploy the New King</h3>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Test GLM 4.7 Flash and Gemini 3 side-by-side on our platform.</p>
                        <Link to="/models" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Access Models →</Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default GLMvsGemini;
