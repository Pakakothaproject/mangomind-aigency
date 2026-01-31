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
            padding: '1.5rem 0',
            background: '#bd4e00',
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
                    width: '100px',
                    background: 'linear-gradient(to right, #bd4e00, transparent)',
                    zIndex: 2,
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '100px',
                    background: 'linear-gradient(to left, #bd4e00, transparent)',
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
                            height: '40px',
                        }}>
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                style={{
                                    height: '32px',
                                    width: 'auto',
                                    maxWidth: '120px',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                                    opacity: 0.9,
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                    e.currentTarget.style.filter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.opacity = '0.9';
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))';
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
