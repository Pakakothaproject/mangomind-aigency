import { motion } from 'framer-motion';
import { Truck, CheckCircle, Shield } from 'lucide-react';

const reasons = [
    {
        icon: <Shield size={24} className="text-orange-500" />,
        title: "No.1 in Bangladesh",
        description: "We are the first and largest dedicated AI automation agency in Dhaka, serving top local enterprises."
    },
    {
        icon: <Truck size={24} className="text-orange-500" />,
        title: "10x Faster Execution",
        description: "Our proprietary AI stacks allow us to deliver solutions 10 times faster than traditional dev shops."
    },
    {
        icon: <CheckCircle size={24} className="text-orange-500" />,
        title: "Proven Results",
        description: "We don't experiment on you. We deploy battle-tested automation flows that are guaranteed to save costs."
    }
];

const WhyUs = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <div className="flex-col md:flex-row flex-between gap-8">
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Why Choose <span className="text-gradient">Mangomind?</span></h2>
                        <p style={{ maxWidth: '400px', marginTop: '1rem' }}>
                            In a world of generic solutions, we build custom AI infrastructure tailored for the Bangladeshi market context.
                        </p>

                        <div className="flex-col gap-4" style={{ marginTop: '2rem' }}>
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex-center" style={{ justifyContent: 'flex-start', gap: '1rem' }}>
                                    <div style={{ background: 'rgba(249, 115, 22, 0.1)', padding: '0.75rem', borderRadius: '8px', color: 'var(--accent-orange)' }}>
                                        {reason.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 'bold' }}>{reason.title}</h4>
                                        <p style={{ fontSize: '0.9rem', marginBottom: 0, color: 'var(--text-secondary)' }}>{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="flex-1 flex-center" style={{ gap: '1rem', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <motion.div
                            className="glass-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            style={{ flex: 1, minWidth: '140px', padding: '1.5rem 1rem', textAlign: 'center' }}
                        >
                            <span className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', display: 'block', lineHeight: 1 }}>100+</span>
                            <span style={{ fontSize: '0.9rem', color: 'white' }}>Businesses Automated</span>
                        </motion.div>

                        <motion.div
                            className="glass-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            style={{ flex: 1, minWidth: '140px', padding: '1.5rem 1rem', textAlign: 'center' }}
                        >
                            <span className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', display: 'block', lineHeight: 1 }}>57</span>
                            <span style={{ fontSize: '0.9rem', color: 'white' }}>Sub-Agents Available</span>
                        </motion.div>

                        <motion.div
                            className="glass-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            style={{ flex: 1, minWidth: '140px', padding: '1.5rem 1rem', textAlign: 'center' }}
                        >
                            <span className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 'bold', display: 'block', lineHeight: 1 }}>400+</span>
                            <span style={{ fontSize: '0.9rem', color: 'white' }}>AI Models Integrated</span>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '5rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h3>The <span className="text-gradient">Optimization Math</span></h3>
                    <p>We replace at least 1 employee for you, saving you a minimum of 20,000 BDT per month instantly.</p>
                </motion.div>

                <div className="responsive-flex gap-8" style={{ alignItems: 'stretch' }}>
                    {/* Before Card */}
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: 1, padding: 0, overflow: 'hidden' }}
                    >
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <img src="/office-before.png" alt="Traditional Office" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <h4 style={{ color: '#ef4444', marginBottom: '1rem' }}>Before Mangomind</h4>
                            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }}></span>
                                    15 Employees (Sales, Admin, Support)
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }}></span>
                                    High Payroll & Overhead Costs
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%' }}></span>
                                    Manual Reporting & Management
                                </li>
                            </ul>
                            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#fca5a5' }}>Monthly Cost: <strong>High</strong></p>
                            </div>
                        </div>
                    </motion.div>

                    {/* After Card */}
                    <motion.div
                        className="glass-card"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: 1, padding: 0, overflow: 'hidden', border: '1px solid var(--accent-orange)' }}
                    >
                        <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                            <img src="/office-after.png" alt="AI Optimized Office" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'var(--accent-orange)', color: 'black', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                OPTIMIZED
                            </div>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <h4 style={{ color: 'var(--accent-orange)', marginBottom: '1rem' }}>After Mangomind</h4>
                            <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                                    <CheckCircle size={16} className="text-orange-500" />
                                    <span>2 Fewer Employees (Saved 40k BDT)</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                                    <CheckCircle size={16} className="text-orange-500" />
                                    <span>Replaced by AI Agents ($30/mo each)</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}>
                                    <CheckCircle size={16} className="text-orange-500" />
                                    <span>Self-Managing & Auto-Reporting</span>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                    <Truck size={16} className="text-orange-500" />
                                    <span>Remaining Team Optimized by 50%</span>
                                </li>
                            </ul>
                            <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
                                <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--accent-orange)', fontWeight: 'bold' }}>Savings: 40,000+ BDT/Month</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
