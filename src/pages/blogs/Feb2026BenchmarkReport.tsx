import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, BarChart2, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Feb2026BenchmarkReport = () => {
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
                    <div className="badge">State of AI</div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>February 2026 Benchmark Report: <span className="text-gradient">The State of AI</span></h1>

                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Clock size={16} /> 15 min read</span>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Tag size={16} /> #Gemini3 #Benchmarks #AIState</span>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)' }}
                >
                    <img src="/blogs/Feb 1.jpg" alt="State of AI February 2026" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>

                <div className="blog-content" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>
                    <p style={{ fontSize: '1.35rem', color: 'white', marginBottom: '2.5rem', fontWeight: 500 }}>
                        This month's benchmark report dives deep into the performance metrics of Gemini 3, contrasting it with the established leaders. Is Google's latest offering enough to dethrone OpenAI and Anthropic?
                    </p>

                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <BarChart2 color="var(--accent-orange)" size={32} /> Gemini 3: The Comprehensive Breakdown
                        </h2>
                        <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                            <h3 style={{ color: 'white', marginBottom: '1rem' }}>Performance vs Efficiency</h3>
                            <p>
                                Gemini 3 Flash has redefined the efficiency curve. In our tests, it achieved a <strong>78% score on SWE-bench Verified</strong> while maintaining inference costs 40% lower than GPT-4o Mini.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>
                                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                    <span>MMLU (Reasoning)</span>
                                    <span style={{ color: 'var(--accent-orange)', fontWeight: 'bold' }}>88.7%</span>
                                </li>
                                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                    <span>MATH (Problem Solving)</span>
                                    <span style={{ color: 'var(--accent-orange)', fontWeight: 'bold' }}>92.4%</span>
                                </li>
                                <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
                                    <span>HumanEval (Coding)</span>
                                    <span style={{ color: 'var(--accent-orange)', fontWeight: 'bold' }}>90.1%</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <TrendingUp color="#4CAF50" size={32} /> Market Shift
                        </h2>
                        <p>
                            The release of Gemini 3 has forced a price correction across the market. With its massive 2M context window now standard, developers are shifting away from RAG-heavy architectures towards context-heavy prompting.
                        </p>
                    </div>

                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Zap color="#FFD700" size={32} /> Latency Comparison
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>15ms</div>
                                <div style={{ color: 'var(--text-secondary)' }}>Gemini 3 Flash (TTFT)</div>
                            </div>
                            <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white' }}>45ms</div>
                                <div style={{ color: 'var(--text-secondary)' }}>GPT-4o (TTFT)</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </article>
    );
};

export default Feb2026BenchmarkReport;
