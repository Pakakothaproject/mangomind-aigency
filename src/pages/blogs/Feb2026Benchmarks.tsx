import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Feb2026Benchmarks = () => {
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
                    <div className="badge">AI Benchmarks</div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>February 2026 <span className="text-gradient">Benchmark Report</span>: The State of AI</h1>

                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Clock size={16} /> 12 min read</span>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Tag size={16} /> #Gemini3 #Claude4 #Llama4 #AIbenchmarks</span>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)' }}
                >
                    <img src="/blogs/ai-leaders-2026-hero.png" alt="February 2026 AI Benchmarks" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>

                <div className="blog-content" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>
                    <p style={{ fontSize: '1.35rem', color: 'white', marginBottom: '2.5rem', fontWeight: 500 }}>
                        February 2026 marks a pivotal moment in the AI arms race. The gap between proprietary titans and open-source rebels hasn't just narrowed—in some sectors, it has vanished.
                    </p>

                    <h2 style={{ color: 'white', marginBottom: '2rem', fontSize: '2.2rem' }}>🏆 Winner's Circle: Flash Rankings</h2>
                    <div style={{ overflowX: 'auto', margin: '3rem 0' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', overflow: 'hidden' }}>
                            <thead>
                                <tr style={{ background: 'rgba(249,115,22,0.1)' }}>
                                    <th style={{ padding: '1.5rem', textAlign: 'left' }}>Category</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left' }}>Winner</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left' }}>The "Why"</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['Reasoning', 'Gemini 3 Pro', 'Highest GPQA Score (91.9%)'],
                                    ['Coding', 'Claude Opus 4.5', 'Best Agentic Workflow & Intuition'],
                                    ['Speed/Cost', 'Kimi k2.5', 'Unbeatable price-to-performance'],
                                    ['Image Gen', 'Nano Banana Pro', 'Unmatched Photorealism'],
                                    ['Local LLM', 'Llama 4 (70B)', 'Best balance of size and capability']
                                ].map(([cat, winner, why], i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                        <td style={{ padding: '1.25rem', fontWeight: 700 }}>{cat}</td>
                                        <td style={{ padding: '1.25rem', color: 'var(--accent-orange)' }}>{winner}</td>
                                        <td style={{ padding: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{why}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>1. Proprietary Titans refreshes</h2>
                    <p>
                        The "Big Three" have all refreshed their lineups. Here is the nuanced breakdown:
                    </p>
                    <ul>
                        <li><strong>Gemini 3 Pro:</strong> The Multimodal King. 2M context window and native video understanding.</li>
                        <li><strong>Claude Opus 4.5:</strong> The Developer's Muse. Leads in agentic coding benchmarks.</li>
                        <li><strong>Grok 4.2:</strong> The Truth Seeker. Unfiltered access to real-time data via X.</li>
                    </ul>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>2. The Open Source Revolution</h2>
                    <p>
                        The real excitement lies in open-weight models from Moonshot AI and Meta.
                    </p>
                    <ul>
                        <li><strong>Kimi k2.5:</strong> Features "Agent Swarm" technology, coordinating 100 sub-agents.</li>
                        <li><strong>DeepSeek R1:</strong> GPT-4 reasoning at 1/10th the compute cost.</li>
                    </ul>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>3. The Visual Frontier</h2>
                    <p>
                        <strong>Nano Banana Pro</strong> and <strong>Flux 2 Klein</strong> are the definitive leaders. Banana Pro offers anatomical perfection, while Flux 2 is the cult favorite for cinematic flair and local deployment on RTX 50 series cards.
                    </p>

                    <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '24px', textAlign: 'center', border: '1px solid var(--glass-border)' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>Stay Ahead of the Benchmarks</h3>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Test all these leading models side-by-side on our platform.</p>
                        <Link to="/models" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Compare Models →</Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Feb2026Benchmarks;
