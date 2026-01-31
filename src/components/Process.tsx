import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Understanding Your Workforce",
        description: "We analyze your specific needs and workforce structure to understand exactly where automation fits."
    },
    {
        number: "02",
        title: "Building Your Agents",
        description: "We create custom AI agents you can run for cheap to either replace redundant roles or optimize your existing workforce."
    },
    {
        number: "03",
        title: "Any Type of Business",
        description: "We handle any type of business. Our scalable agents integrate seamlessly into your operations to cut costs."
    }
];

const Process = () => {
    return (
        <section id="process" className="section-padding">
            <div className="container">
                <motion.div
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2>Our <span className="text-gradient">Process</span></h2>
                    <p>Simple. Effective. Transformative.</p>
                </motion.div>

                <div className="services-grid" style={{ gap: '2rem' }}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{ padding: '2rem', borderTop: '1px solid var(--glass-border)', position: 'relative' }}
                        >
                            <span style={{ fontSize: '4rem', fontWeight: 'bold', opacity: 0.1, position: 'absolute', top: '0', right: '1rem', color: 'var(--accent-orange)' }}>
                                {step.number}
                            </span>
                            <h3 style={{ marginTop: '1rem', color: 'var(--accent-orange)' }}>{step.title}</h3>
                            <p>{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
