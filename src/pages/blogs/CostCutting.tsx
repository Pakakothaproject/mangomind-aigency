import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CostCutting = () => {
    return (
        <>
            <Navbar />
            <div className="gradient-bg" />
            <section className="section-padding" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
                <article className="container glass-card" style={{ maxWidth: '800px', padding: '3rem' }}>
                    <Link to="/blogs" className="flex-center" style={{ width: 'fit-content', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                        <ArrowLeft size={18} /> Back to Blogs
                    </Link>

                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Cut Operational Costs by 70%: The Math of Automation</h1>
                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', color: 'var(--text-secondary)', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '2rem' }}>
                        <span>Jan 25, 2024</span>
                        <span>By OpenClaw Desk</span>
                    </div>

                    <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#e2e8f0' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            "Scale" often means "Hire more people." But in 2024, scaling linearly with headcount is a trap. It increases complexity, management overhead, and potential points of failure.
                        </p>
                        <h3 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>The Hidden Costs of Hiring</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Beyond the salary (15k-25k BDT for a junior entry), you pay for:
                            <ul style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                                <li>Training time (2-4 weeks)</li>
                                <li>Equipment (Laptops, Desks)</li>
                                <li>Office Space per sqft</li>
                                <li>Management bandwidth</li>
                            </ul>
                        </p>
                        <h3 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>The AI Alternative</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Our <strong>OpenClaw</strong> agents can perform the work of 10 data entry clerks or 5 junior researchers instantly. The math is simple:
                            <br /><br />
                            <strong>Human Team (5 people):</strong> ~120,000 BDT/mo
                            <br />
                            <strong>AI Agent Cluster:</strong> ~20,000 BDT/mo (Hosting + API)
                        </p>
                        <p>
                            That is a direct 83% saving. For businesses running on thin margins, this is not just an optimization; it's a survival strategy.
                        </p>
                    </div>
                </article>
            </section>
        </>
    );
};

export default CostCutting;
