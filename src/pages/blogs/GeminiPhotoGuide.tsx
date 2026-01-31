import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Image as ImageIcon, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const GeminiPhotoGuide = () => {
    return (
        <article className="section-padding" style={{ paddingTop: '120px', background: 'var(--bg-primary)', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                <Link to="/blogs" className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem', color: 'var(--accent-orange)', textDecoration: 'none', marginBottom: '2rem', fontSize: '0.9rem' }}>
                    <ArrowLeft size={16} /> Back to Blogs
                </Link>

                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ marginBottom: '3rem' }}
                >
                    <div className="badge">Tutorials</div>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.2 }}><span className="text-gradient">Gemini AI Photo</span> Generator: How to Create Hyper-Realistic Images</h1>

                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Clock size={16} /> 8 min read</span>
                        <span className="flex-center" style={{ gap: '0.5rem' }}><Tag size={16} /> #GeminiPhoto #Imagen3 #AIArt</span>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)' }}
                >
                    <img src="/blogs/gemini-ai-photo-hero.png" alt="Gemini AI Photo Generation" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </motion.div>

                <div className="blog-content" style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.9 }}>
                    <p style={{ fontSize: '1.35rem', color: 'white', marginBottom: '2.5rem', fontWeight: 500 }}>
                        When people think of "AI Images," they think of Midjourney. But there's a sleeping giant that has awoken: Google's Imagen 3 model, available on MangoMind, has quietly become one of the best photorealism engines on the planet.
                    </p>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>Why Use Gemini for Photos?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', margin: '3rem 0' }}>
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                            <ImageIcon size={32} color="var(--accent-orange)" style={{ marginBottom: '1rem' }} />
                            <h4>Text Rendering</h4>
                            <p style={{ fontSize: '0.85rem' }}>Accurate text on signs, shirts, and logos.</p>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                            <Target size={32} color="var(--accent-orange)" style={{ marginBottom: '1rem' }} />
                            <h4>Prompt Adherence</h4>
                            <p style={{ fontSize: '0.85rem' }}>Strictly follows complex spatial instructions.</p>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                            <Sparkles size={32} color="var(--accent-orange)" style={{ marginBottom: '1rem' }} />
                            <h4>Photorealism</h4>
                            <p style={{ fontSize: '0.85rem' }}>Superior skin texture and natural lighting.</p>
                        </div>
                    </div>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>Step-by-Step Guide</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', margin: '3rem 0' }}>
                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'var(--accent-orange)', color: 'black', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>1</div>
                            <div>
                                <strong style={{ color: 'white', fontSize: '1.2rem' }}>Access the Model</strong>
                                <p style={{ margin: '0.5rem 0' }}>Log in to MangoMind and select <strong>Imagen 3</strong> or <strong>Gemini 3 Pro</strong> from the model list.</p>
                            </div>
                        </div>
                        <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '2rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'var(--accent-orange)', color: 'black', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>2</div>
                            <div>
                                <strong style={{ color: 'white', fontSize: '1.2rem' }}>Write a Descriptive Prompt</strong>
                                <p style={{ margin: '0.5rem 0' }}>Gemini loves detail. Instead of "A cool car," use "A 1967 Mustang Fastback speeding down a rainy Tokyo highway at night, neon reflections, shot on 35mm film."</p>
                            </div>
                        </div>
                    </div>

                    <h2 style={{ color: 'white', marginTop: '4rem', marginBottom: '1.5rem', fontSize: '2rem' }}>Gallery: Tested Prompts</h2>
                    <div className="glass-card" style={{ padding: '2.5rem', margin: '2rem 0' }}>
                        <code style={{ display: 'block', background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', fontSize: '0.95rem', border: '1px solid var(--glass-border)' }}>
                            Hyper-realistic cinematic full-body portrait of a stylish woman in a Tokyo street at night. She is wearing a cyberpunk leather jacket with neon accents. Rain reflecting city lights on the pavement. 8k resolution.
                        </code>
                        <code style={{ display: 'block', background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '12px', fontSize: '0.95rem', border: '1px solid var(--glass-border)' }}>
                            Luxury fashion magazine cover shot. High-fashion model wearing an avant-garde dress made of flowing water and white silk. Standing on a black volcanic beach.
                        </code>
                    </div>

                    <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: '24px', textAlign: 'center', border: '1px solid var(--accent-orange)' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>Get the MangoMind Advantage</h3>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>Don't settle for one model. Get Gemini, Grok-2, Midjourney, and Nano Banana in one subscription.</p>
                        <Link to="/models" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>Explore 300+ Models →</Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default GeminiPhotoGuide;
