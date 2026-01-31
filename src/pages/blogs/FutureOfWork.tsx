import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const FutureOfWork = () => {
    return (
        <>
            <Navbar />
            <div className="gradient-bg" />
            <section className="section-padding" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
                <article className="container glass-card" style={{ maxWidth: '800px', padding: '3rem' }}>
                    <Link to="/blogs" className="flex-center" style={{ width: 'fit-content', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                        <ArrowLeft size={18} /> Back to Blogs
                    </Link>

                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Future of Work: AI as a Colleague</h1>
                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', color: 'var(--text-secondary)', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '2rem' }}>
                        <span>Jan 20, 2024</span>
                        <span>By Future Labs</span>
                    </div>

                    <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#e2e8f0' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            There is a fear that AI will replace everyone. At Mangomind, we see a different future: one where AI is your best colleague.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Imagine a "Head of Research" who never sleeps, reads every paper published in real-time, and summarizes it for you by 9 AM. That is what our <strong>Deep Researcher</strong> agent does. It doesn't replace the decision-maker; it makes the decision-maker superhuman.
                        </p>
                        <h3 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Hybrid Workforces</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The most successful Dhaka companies in 2025 will be those that manage "Hybrid Workforces"—teams composed of humans for creativity/strategy and AI agents for execution/repetitive tasks.
                        </p>
                        <p>
                            We are building the interface for this collaboration. WhatsApp, Telegram, or custom Dashboards—we integrate your AI colleagues directly into your existing communication flow.
                        </p>
                    </div>
                </article>
            </section>
        </>
    );
};

export default FutureOfWork;
