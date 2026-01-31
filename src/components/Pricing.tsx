import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Bot } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="pricing" className="section-padding">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Simple <span className="text-gradient">Pricing</span></h2>
                    <p>Transparent costs. High ROI.</p>
                </motion.div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'stretch' }}>
                    {/* Package 1: AI Search Visibility */}
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ padding: '2.5rem', flex: 1, maxWidth: '450px', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ background: 'rgba(249, 115, 22, 0.1)', width: 'fit-content', padding: '0.75rem', borderRadius: '12px', marginBottom: '1rem' }}>
                                <Zap size={24} className="text-orange-500" />
                            </div>
                            <h3>AI Search Visibility</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Rank on ChatGPT, Gemini & Perplexity</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>৳10,000</span>
                            <span style={{ color: 'var(--text-secondary)' }}> /one-time</span>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                <Check size={18} className="text-green-500" /> <span>Content Optimization for LLMs</span>
                            </li>
                            <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                <Check size={18} className="text-green-500" /> <span>Knowledge Graph Injection</span>
                            </li>
                            <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                <Check size={18} className="text-green-500" /> <span>Brand Authority Setup</span>
                            </li>
                            <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                <Check size={18} className="text-green-500" /> <span>30-Day Performance Report</span>
                            </li>
                        </ul>

                        <a href="https://wa.me/8801911730703" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            Get Optimized
                        </a>
                    </motion.div>

                    {/* Package 2: Custom Agent */}
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ padding: '2.5rem', flex: 1, maxWidth: '450px', border: '1px solid var(--accent-orange)', background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(249, 115, 22, 0.05) 100%)', position: 'relative' }}
                    >
                        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--accent-orange)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', color: 'black' }}>
                            POPULAR
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ background: 'rgba(249, 115, 22, 0.1)', width: 'fit-content', padding: '0.75rem', borderRadius: '12px', marginBottom: '1rem' }}>
                                <Bot size={24} className="text-orange-500" />
                            </div>
                            <h3>Custom AI Agent</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Tailored automation for your needs</p>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>Custom Quote</span>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                <Check size={18} className="text-orange-500" /> <span>Full Workflow Analysis</span>
                            </li>
                            <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                <Check size={18} className="text-orange-500" /> <span>Development & Integration</span>
                            </li>
                            <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                <Check size={18} className="text-orange-500" /> <span>Staff Training & Support</span>
                            </li>
                            <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem' }}>
                                <Check size={18} className="text-orange-500" /> <span>Local GPU or Cloud Hosting</span>
                            </li>
                        </ul>

                        <a href="https://wa.me/8801911730703" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            Contact for Agent <ArrowRight size={16} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
