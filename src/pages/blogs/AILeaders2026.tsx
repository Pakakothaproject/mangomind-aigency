import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AILeaders2026 = () => {
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
                    <div className="badge">AI Industry</div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Top 25 <span className="text-gradient">AI Leaders & Companies</span> in 2026</h1>

                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Clock size={16} /> 15 min read</span>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Tag size={16} /> #AILeaders #OpenAI #DeepMind #Anthropic</span>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)' }}
                >
                    <img src="/blogs/ai-leaders-2026-hero.png" alt="Top AI Companies 2026" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>

                <div className="blog-content" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>
                    <p style={{ fontSize: '1.35rem', color: 'white', marginBottom: '2.5rem', fontWeight: 500 }}>
                        The AI landscape in 2026 is more competitive than ever. From Silicon Valley giants to Chinese tech titans, companies are racing to build the most powerful, efficient, and capable AI models.
                    </p>

                    <h2 style={{ color: 'white', marginBottom: '2.5rem', fontSize: '2.2rem' }}>🏆 The Frontier Leaders</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {[
                            { name: 'OpenAI 🇺🇸', score: '9.4', highlight: 'GPT-5.2', strength: 'Undisputed king of reasoning and complex tasks.' },
                            { name: 'Anthropic 🇺🇸', score: '9.3', highlight: 'Claude Opus 4.5', strength: 'Exceptional coding, creative writing, and human-like nuance.' },
                            { name: 'Google DeepMind 🇺🇸', score: '9.2', highlight: 'Gemini 3 Pro', highlightExt: '10M Context', strength: 'Native multimodal mastery with massive context windows.' }
                        ].map((leader, i) => (
                            <div key={i} className="glass-card" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem 2rem', background: 'var(--accent-orange)', color: 'black', fontWeight: 800, borderBottomLeftRadius: '20px' }}>
                                    {leader.score}
                                </div>
                                <h3 style={{ color: 'white', fontSize: '1.8rem', marginTop: 0 }}>{leader.name}</h3>
                                <p style={{ color: 'var(--accent-orange)', fontWeight: 600 }}>Flagship: {leader.highlight} {leader.highlightExt && <span className="badge" style={{ verticalAlign: 'middle', marginLeft: '0.5rem' }}>{leader.highlightExt}</span>}</p>
                                <p style={{ margin: 0 }}>{leader.strength}</p>
                            </div>
                        ))}
                    </div>

                    <h2 style={{ color: 'white', marginTop: '5rem', marginBottom: '2rem', fontSize: '2rem' }}>🌍 AI Models by Country</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', margin: '3rem 0' }}>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>🇺🇸 United States</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
                                <li>• OpenAI</li>
                                <li>• Anthropic</li>
                                <li>• Google DeepMind</li>
                                <li>• Meta (Llama)</li>
                                <li>• NVIDIA / Amazon</li>
                            </ul>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>🇨🇳 China</h4>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
                                <li>• DeepSeek</li>
                                <li>• Alibaba (Qwen)</li>
                                <li>• Moonshot AI (Kimi)</li>
                                <li>• Zhipu AI / Baidu</li>
                                <li>• ByteDance (Seed)</li>
                            </ul>
                        </div>
                    </div>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>Key Takeaways for 2026</h2>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0, listStyle: 'none' }}>
                        <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '1rem', alignItems: 'flex-start' }}>
                            <CheckCircle2 color="var(--accent-orange)" size={20} style={{ flexShrink: 0, marginTop: '4px' }} />
                            <span><strong>Context Windows Explode:</strong> Gemini 3 Pro offers 10M tokens, allowing ingestion of entire libraries.</span>
                        </li>
                        <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '1rem', alignItems: 'flex-start' }}>
                            <CheckCircle2 color="var(--accent-orange)" size={20} style={{ flexShrink: 0, marginTop: '4px' }} />
                            <span><strong>Cost Race to the Bottom:</strong> DeepSeek offers 90% lower costs than OpenAI with frontier-level performance.</span>
                        </li>
                        <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '1rem', alignItems: 'flex-start' }}>
                            <CheckCircle2 color="var(--accent-orange)" size={20} style={{ flexShrink: 0, marginTop: '4px' }} />
                            <span><strong>Agentic AI is Standard:</strong> Leading models now spawn sub-agents automatically for multi-step objectives.</span>
                        </li>
                    </ul>

                    <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '24px', textAlign: 'center', border: '1px solid var(--accent-orange)' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>Access All the Leaders</h3>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Get unified access to every frontier model mentioned above with local payments.</p>
                        <Link to="/models" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Compare Models on MangoMind →</Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default AILeaders2026;
