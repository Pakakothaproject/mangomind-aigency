import { motion } from 'framer-motion';
import { Cloud, Cpu, DollarSign } from 'lucide-react';

const options = [
    {
        icon: <Cloud size={32} className="text-orange-500" />,
        title: "Managed Cloud AI",
        description: "Don't worry about hardware. We host your agents on our high-speed servers. Perfect for businesses who want zero maintenance."
    },
    {
        icon: <Cpu size={32} className="text-orange-500" />,
        title: "Local GPU Setup",
        description: "Have your own GPU? We can set up open-source models (Llama, Mistral) directly on your hardware. 100% data privacy and zero monthly API costs."
    },
    {
        icon: <DollarSign size={32} className="text-orange-500" />,
        title: "Lowest Cost Guarantee",
        description: "We architect solutions specifically to minimize token usage and running costs. We don't bloat your bill; we optimize it."
    }
];

const Deployment = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Flexible <span className="text-gradient">Deployment</span></h2>
                    <p>We deploy where it costs you the least.</p>
                </motion.div>

                <div className="services-grid">
                    {options.map((opt, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card"
                            style={{ padding: '2rem', textAlign: 'left' }}
                        >
                            <div style={{ background: 'rgba(249, 115, 22, 0.1)', width: 'fit-content', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                {opt.icon}
                            </div>
                            <h3>{opt.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{opt.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Deployment;
