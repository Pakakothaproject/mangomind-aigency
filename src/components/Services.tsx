import { motion } from 'framer-motion';
import { Users, Bot, Search, ArrowUpRight } from 'lucide-react';

const services = [
    {
        icon: <Users size={32} color="#f97316" />,
        title: "Workforce Optimization",
        description: "We analyze your workforce needs and build agents that run for cheap—replacing unnecessary overhead or optimizing existing roles.",
        gradientParams: "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(15, 23, 42, 0))"
    },
    {
        icon: <Bot size={32} color="#f97316" />,
        title: "Custom Agent Creation",
        description: "We handle any type of business. Our custom agents are designed to fit your specific workflow and cut costs immediately.",
        gradientParams: "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(15, 23, 42, 0))"
    },
    {
        icon: <Search size={32} color="#f97316" />,
        title: "AI Search Visibility",
        description: "Rank high on AI platforms like ChatGPT & Gemini. We optimize your answer engine presence starting at just 10,000 BDT.",
        gradientParams: "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(15, 23, 42, 0))"
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Our <span className="text-gradient">Core Solutions</span></h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                        We provide the infrastructure for the next generation of business efficiency.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card"
                        >
                            <div
                                className="hover-gradient"
                                style={{ background: service.gradientParams }}
                            />

                            <div className="card-content">
                                <div className="card-icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>

                                <div className="card-link">
                                    <span>Learn more</span>
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
