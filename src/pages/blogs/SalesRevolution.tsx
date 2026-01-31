import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const SalesRevolution = () => {
    return (
        <>
            <Navbar />
            <div className="gradient-bg" />
            <section className="section-padding" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
                <article className="container glass-card" style={{ maxWidth: '800px', padding: '3rem' }}>
                    <Link to="/blogs" className="flex-center" style={{ width: 'fit-content', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                        <ArrowLeft size={18} /> Back to Blogs
                    </Link>

                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The AI Sales Revolution in Bangladesh</h1>
                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', color: 'var(--text-secondary)', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '2rem' }}>
                        <span>Jan 28, 2024</span>
                        <span>By Mangomind Team</span>
                    </div>

                    <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#e2e8f0' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The traditional call center model in Bangladesh is facing a seismic shift. For decades, businesses have relied on large teams of humans to handle customer queries, outbound sales, and lead generation. While this created jobs, it also created massive overheads: office rent, electricity, salaries, bonuses, and the inevitable human error.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Enter the <strong>AI Sales Agent</strong>.
                        </p>
                        <h3 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>The 24/7 Advantage</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Humans need sleep. AI doesn't. An AI agent can handle thousands of simultaneous conversations on WhatsApp, Messenger, or your website without a single delay. For ease-of-business in Dhaka's fast-paced market, immediate response is the difference between a sale and a lost lead.
                        </p>
                        <h3 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Cost vs. Human Capital</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            A standard 4-person sales team might cost a business upwards of 1 Lakh BDT per month when you factor in all expenses. An AI system, once set up, runs for a fraction of that cost—often maintaining higher accuracy and better data logging.
                        </p>
                        <p>
                            At Mangomind, we are seeing local businesses reduce their operational spend by 60-70% within the first month of deploying our custom AI sales agents. The revolution isn't coming; it's already here.
                        </p>
                    </div>
                </article>
            </section>
        </>
    );
};

export default SalesRevolution;
