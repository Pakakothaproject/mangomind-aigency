import { motion } from 'framer-motion';
import { User, Search, FileText, Globe, MessageSquare, Smartphone } from 'lucide-react';

const agents = [
    {
        icon: <User size={32} className="text-orange-500" />,
        title: "AI Salesman",
        description: "Engage leads 24/7. Our AI Salesman qualifies prospects, answers queries, and closes deals without human intervention."
    },
    {
        icon: <Globe size={32} className="text-orange-500" />,
        title: "Website Salesman",
        description: "Turn visitors into buyers. An intelligent chat agent that guides users through your site and recommends products."
    },
    {
        icon: <Search size={32} className="text-orange-500" />,
        title: "Deep Researcher",
        description: "Scour the web for market trends, competitor analysis, or lead data. Get comprehensive reports in minutes, not days."
    },
    {
        icon: <FileText size={32} className="text-orange-500" />,
        title: "Content & File Creator",
        description: "Generate contracts, blog posts, or marketing copy instantly. Custom-trained on your brand voice."
    },
    {
        icon: <Smartphone size={32} className="text-orange-500" />,
        title: "OpenClaw: Personal Jarvis",
        description: "Your own AI Personal Assistant. Controls your PC, manages files, and handles tasks via WhatsApp/Telegram like a real Jarvis."
    },
    {
        icon: <MessageSquare size={32} className="text-orange-500" />,
        title: "Customer Support 24/7",
        description: "Never miss a query. Handle thousands of support tickets simultaneously with human-like empathy."
    }
];

const AgentShowcase = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Meet Your <span className="text-gradient">Digital Workforce</span></h2>
                    <p>Specialized agents ready to deploy today.</p>
                </motion.div>

                <div className="services-grid">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{ padding: '2rem' }}
                        >
                            <div className="card-icon" style={{ background: 'rgba(249, 115, 22, 0.1)' }}>
                                {agent.icon}
                            </div>
                            <h3>{agent.title}</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{agent.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AgentShowcase;
