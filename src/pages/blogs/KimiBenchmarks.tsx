import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Activity, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const KimiBenchmarks = () => {
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
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Kimi k2.5: The <span className="text-gradient">Open Source Moonshot</span></h1>

                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Clock size={16} /> 9 min read</span>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Tag size={16} /> #Kimi #MoonshotAI #OpenSource</span>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)' }}
                >
                    <img src="/blogs/kimi-k2-5-hero.png" alt="Kimi k2.5 Model Review" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>

                <div className="blog-content" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>
                    <p style={{ fontSize: '1.35rem', color: 'white', marginBottom: '2.5rem', fontWeight: 500 }}>
                        The release of Kimi k2.5 by Moonshot AI feels like an earthquake. This 1.04T parameter MoE giant isn't just another entrant; it's a statement about the power of open weights.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>Technical Specifications</h2>
                    <div style={{ overflowX: 'auto', margin: '3rem 0' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', overflow: 'hidden' }}>
                            <thead>
                                <tr style={{ background: 'rgba(249,115,22,0.1)' }}>
                                    <th style={{ padding: '1.5rem', textAlign: 'left' }}>Spec</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left' }}>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Total Parameters', '1.04 Trillion'],
                                    ['Active Parameters', '32 Billion'],
                                    ['Context Window', '256K Tokens'],
                                    ['Training Data', '15 Trillion Tokens'],
                                    ['Architecture', 'Native Multimodal MoE']
                                ].map(([label, val], i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 700 }}>{label}</td>
                                        <td style={{ padding: '1.25rem', color: 'var(--accent-orange)' }}>{val}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Agent Swarm Technology</h2>
                    <p>
                        What makes Kimi k2.5 truly special is its performance in agentic workflows. It coordinate up to 100 sub-agents for complex tasks—researchers, analysts, writers, and critics.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', margin: '3rem 0' }}>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <Activity size={32} color="var(--accent-orange)" style={{ marginBottom: '1rem' }} />
                            <h4>HLE Benchmark</h4>
                            <p style={{ fontSize: '2rem', color: 'white', fontWeight: 700 }}>50.2%</p>
                            <p style={{ fontSize: '0.85rem' }}>Beats GPT-5.2 (45.8%)</p>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <Box size={32} color="var(--accent-orange)" style={{ marginBottom: '1rem' }} />
                            <h4>Efficiency</h4>
                            <p style={{ fontSize: '2rem', color: 'white', fontWeight: 700 }}>16-25x</p>
                            <p style={{ fontSize: '0.85rem' }}>Cheaper operational costs than competitors</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '24px', textAlign: 'center', border: '1px solid var(--accent-orange)' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>Build with the Hive</h3>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Deploy Kimi k2.5 for your most complex multi-step agentic tasks.</p>
                        <Link to="/models" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Try Kimi k2.5 →</Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default KimiBenchmarks;
