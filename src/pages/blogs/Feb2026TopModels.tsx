import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Trophy, Zap, Globe, Code, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Feb2026TopModels = () => {
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
                    <div className="badge">Market Report</div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Top AI Models of <span className="text-gradient">February 2026</span></h1>

                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Clock size={16} /> 12 min read</span>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Tag size={16} /> #Benchmarks #Sonnet5 #GPT5</span>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)' }}
                >
                    <img src="/blogs/february benchamarks.png" alt="February 2026 AI Benchmarks" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>

                <div className="blog-content" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>
                    <p style={{ fontSize: '1.35rem', color: 'white', marginBottom: '2.5rem', fontWeight: 500 }}>
                        The AI landscape has shifted dramatically this month. With the release of Sonnet 5 and GPT-5.2, the benchmarks for coding and reasoning have been rewritten. Here is the definitive ranking for February 2026.
                    </p>

                    {/* Performance Section */}
                    <div style={{ marginBottom: '5rem' }}>
                        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Trophy color="var(--accent-orange)" size={32} /> Top for Performance (The Kings)
                        </h2>
                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <ModelCard
                                rank="1"
                                name="Claude Sonnet 5"
                                developer="Anthropic"
                                description="The new undisputed king of coding. First model to cross 82% on SWE-Bench Verified. It combines the massive 1M context window with near-zero latency, making it the premier choice for autonomous agents."
                                score="99.2"
                                badge="Best Overall"
                                specs={['82.1% SWE-Bench', 'GPQA 84.8%', '1M Context', '$3/1M Tokens']}
                                benchmarks={[
                                    { label: 'SWE-Bench Verified', value: '82.1%' },
                                    { label: 'MATH', value: '96.2%' },
                                    { label: 'GPQA Diamond', value: '84.8%' }
                                ]}
                            />
                            <ModelCard
                                rank="2"
                                name="GPT-5.2 (Pro)"
                                developer="OpenAI"
                                description="The reasoning giant. While slightly behind in pure coding syntax, it dominates in multi-step logic and nuance. The new 400K context window is nearly perfect in recall."
                                score="98.5"
                                badge="Best Reasoning"
                                specs={['55.6% SWE-Bench Pro', '93.2% GPQA', '400K Context']}
                                benchmarks={[
                                    { label: 'SWE-Bench Pro', value: '55.6%' },
                                    { label: 'GPQA Diamond', value: '93.2%' },
                                    { label: 'AIME 2025', value: '100%' }
                                ]}
                            />
                        </div>
                    </div>

                    {/* Efficiency Section */}
                    <div style={{ marginBottom: '5rem' }}>
                        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Zap color="#FFD700" size={32} /> Top for Efficiency
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            <MiniCard
                                name="Gemini 3 Flash"
                                developer="Google"
                                desc="Pro-grade reasoning at flash speeds. Validated on SWE-Bench Verified (78%). The cost/performance ratio is unbeatable."
                                value="90.4% GPQA"
                            />
                            <MiniCard
                                name="Haiku 3.5"
                                developer="Anthropic"
                                desc="Still the king of pure speed for simple tasks, but losing ground to Gemini 3 Flash in reasoning capability."
                                value="Speed King"
                            />
                        </div>
                    </div>

                    {/* Popularity Section */}
                    <div style={{ marginBottom: '5rem' }}>
                        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Globe color="#4CAF50" size={32} /> Top by Popularity
                        </h2>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                            <ListItem name="GPT-5.2" detail="Remains the default for 65% of enterprise users due to Azure integration." />
                            <ListItem name="Claude 3.5 Sonnet" detail="Still widely used by developers who haven't yet upgraded to v5 workflows." />
                            <ListItem name="DeepSeek V3" detail="Exploding popularity in China and open-source communities for its local runability." />
                        </ul>
                    </div>

                    {/* Open Source Section */}
                    <div style={{ marginBottom: '5rem' }}>
                        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Code color="#9C27B0" size={32} /> Top Open Source
                        </h2>
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1rem' }}>DeepSeek V3 (685B)</h3>
                            <p style={{ marginBottom: '1.5rem' }}>
                                The "Open Weight Champion". It rivals GPT-4o in reasoning and beats everything else you can run on a (very expensive) home server.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <span className="badge" style={{ background: 'rgba(156, 39, 176, 0.2)', color: '#E1BEE7' }}>MoE Architecture</span>
                                <span className="badge" style={{ background: 'rgba(156, 39, 176, 0.2)', color: '#E1BEE7' }}>Top Tier Coding</span>
                            </div>
                        </div>
                    </div>

                    {/* Editor's Picks */}
                    <div style={{ marginBottom: '4rem' }}>
                        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <Star color="var(--accent-orange)" size={32} /> Editor's Picks
                        </h2>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <EditorPick
                                title="Best Value"
                                model="Gemini 3 Flash"
                                reason="It's almost free compared to Sonnet/GPT, yet holds its own in 90% of daily tasks."
                            />
                            <EditorPick
                                title="Best Specialized Coder"
                                model="Qwen 2.5 Coder (32B)"
                                reason="If you need a local model for VS Code, this is it. It understands repo context better than Llama."
                            />
                            <EditorPick
                                title="Legacy Reliability"
                                model="Claude Opus 4.5"
                                reason="It's slower and more expensive, but for creative writing and nuance, it still has a 'human' touch that v5 lacks."
                            />
                        </div>
                    </div>

                </div>
            </div>
        </article>
    );
};

const ModelCard = ({ rank, name, developer, description, score, badge, specs, benchmarks }: any) => (
    <div className="glass-card" style={{ padding: '2rem', position: 'relative', border: rank === '1' ? '1px solid var(--accent-orange)' : '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '3rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }}>
            #{rank}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.25rem', color: 'white' }}>{name}</h3>
                <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>by {developer}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
                <span className="badge" style={{ background: rank === '1' ? 'var(--accent-orange)' : 'rgba(255,255,255,0.1)', color: rank === '1' ? 'black' : 'white', display: 'inline-block', marginBottom: '0.25rem' }}>{badge}</span>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-orange)', fontWeight: 'bold' }}>Score: {score}</div>
            </div>
        </div>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>{description}</p>

        {benchmarks && (
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px' }}>
                {benchmarks.map((b: any, i: number) => (
                    <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'white' }}>{b.value}</div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{b.label}</div>
                    </div>
                ))}
            </div>
        )}

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {specs.map((spec: string, i: number) => (
                <span key={i} style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)' }}>
                    {spec}
                </span>
            ))}
        </div>
    </div>
);

const MiniCard = ({ name, developer, desc, value }: any) => (
    <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem' }}>{name}</h4>
            {value && <span style={{ fontSize: '0.85rem', color: 'var(--accent-orange)', fontWeight: 'bold' }}>{value}</span>}
        </div>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '1rem' }}>{developer}</span>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{desc}</p>
    </div>
);

const ListItem = ({ name, detail }: any) => (
    <li style={{ padding: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontWeight: 700, color: 'white', minWidth: '140px' }}>{name}</span>
        <span style={{ color: 'rgba(255,255,255,0.6)' }}>{detail}</span>
    </li>
);

const EditorPick = ({ title, model, reason }: any) => (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, transparent 100%)', padding: '1.5rem', borderRadius: '16px' }}>
        <div style={{ minWidth: '4px', height: '50px', background: 'var(--accent-orange)' }}></div>
        <div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.75rem', color: 'var(--accent-orange)', display: 'block', marginBottom: '0.25rem' }}>{title}</span>
            <h4 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{model}</h4>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)' }}>{reason}</p>
        </div>
    </div>
);

export default Feb2026TopModels;
