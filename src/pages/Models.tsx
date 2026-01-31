import { motion } from 'framer-motion';
import { Search, Tag, Cpu, DollarSign } from 'lucide-react';
import { useState } from 'react';
import modelsData from '../data/models.json';

interface Model {
    id: string;
    name: string;
    category: string;
    tags: string[];
    image: string | null;
    original_image: string;
    input_cost: string;
    output_cost: string;
}

const Models = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    // Using simple casting or validation in real app
    const models = modelsData as Model[];

    // Get unique categories
    const categories = ['All', ...new Set(models.map(m => m.category))];

    const filteredModels = models.filter(model => {
        const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            model.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'All' || model.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section className="section-padding" style={{ paddingTop: '120px', minHeight: '100vh' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h1>Explore <span className="text-gradient">AI Models</span></h1>
                    <p>Discover {models.length}+ state-of-the-art models available for your agents.</p>
                </motion.div>

                {/* Filters */}
                <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
                        <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                        <input
                            type="text"
                            placeholder="Search models (e.g. Llama, GPT, Vision)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.8rem 1rem 0.8rem 3rem',
                                borderRadius: '50px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'rgba(255,255,255,0.05)',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {categories.slice(0, 10).map((cat) => ( // Show top 10 categories to avoid clutter
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    padding: '0.4rem 1rem',
                                    borderRadius: '50px',
                                    border: selectedCategory === cat ? '1px solid var(--accent-orange)' : '1px solid rgba(255,255,255,0.1)',
                                    background: selectedCategory === cat ? 'rgba(249, 115, 22, 0.1)' : 'transparent',
                                    color: selectedCategory === cat ? 'var(--accent-orange)' : 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {filteredModels.map((model, index) => (
                        <motion.div
                            key={model.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="glass-card"
                            style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    background: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    {model.image ? (
                                        <img src={model.image} alt={model.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    ) : (
                                        <Cpu color="#333" size={30} />
                                    )}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.3rem 0', lineHeight: 1.3 }}>{model.name}</h3>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                                        {model.category}
                                    </span>
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem', flexGrow: 1 }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {model.tags.map(tag => (
                                        <span key={tag} style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                                            <Tag size={10} /> {tag}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>Input / 1M Tokens</span>
                                        <span style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.2rem' }}><DollarSign size={12} />{model.input_cost}</span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>Output / 1M Tokens</span>
                                        <span style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.2rem' }}><DollarSign size={12} />{model.output_cost}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Models;
