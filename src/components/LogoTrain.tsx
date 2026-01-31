import { motion } from 'framer-motion';

const brands = [
    { name: 'OpenAI', logo: '/models/brands/openai.png' },
    { name: 'Anthropic', logo: '/models/brands/anthropic.png' },
    { name: 'Google', logo: '/models/brands/google.png' },
    { name: 'Meta', logo: '/models/brands/meta-llama.png' },
    { name: 'Mistral', logo: '/models/brands/mistral.png' },
    { name: 'Nvidia', logo: '/models/brands/nvidia.png' },
    { name: 'Microsoft', logo: '/models/brands/microsoft.png' },
    { name: 'Perplexity', logo: '/models/brands/perplexity.png' },
    { name: 'Deepseek', logo: '/models/brands/deepseek.png' },
    { name: 'Qwen', logo: '/models/brands/qwen.png' },
];

const LogoTrain = () => {
    // Duplicate brands to create a seamless loop
    const extendedBrands = [...brands, ...brands, ...brands];

    return (
        <section className="logo-train-section" style={{
            padding: '2rem 0',
            background: 'rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container" style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '150px',
                    background: 'linear-gradient(to right, var(--bg-primary), transparent)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '150px',
                    background: 'linear-gradient(to left, var(--bg-primary), transparent)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }} />

                <motion.div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4rem',
                        whiteSpace: 'nowrap',
                    }}
                    animate={{
                        x: [0, -1500],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {extendedBrands.map((brand, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '120px',
                            height: '50px',
                        }}>
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                style={{
                                    maxHeight: '35px',
                                    maxWidth: '120px',
                                    objectFit: 'contain',
                                    filter: 'grayscale(1) brightness(0.8) contrast(1.2)',
                                    opacity: 0.6,
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(0) brightness(1) contrast(1)';
                                    e.currentTarget.style.opacity = '1';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(1) brightness(0.8) contrast(1.2)';
                                    e.currentTarget.style.opacity = '0.6';
                                }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LogoTrain;
