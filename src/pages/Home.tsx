import Hero from '../components/Hero';
import LogoTrain from '../components/LogoTrain';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Deployment from '../components/Deployment';
import AgentShowcase from '../components/AgentShowcase';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <>
            <SEO
                title="MangoMind AI Business | Automate your Business"
                description="Access 400+ Models and top agents that can replace your workforce and cut costs by 50%"
                keywords="AI Bangladesh, AI Platform Bangladesh, Best AI for students and professionals, ChatGPT buy BD, Gemini Bangladesh, Sora access BD, AI agency Dhaka, MangoMind"
                canonicalUrl="https://mangomindbd.com/"
                organizationSchema={true}
                websiteSchema={true}
                localBusinessSchema={{
                    address: "21 Chowrasta, Jashore & Dhaka, Bangladesh",
                    telephone: "+880-1911-730703",
                    priceRange: "$$",
                    openingHours: "Mo-Su 00:00-23:59"
                }}
                serviceSchema={[
                    { name: "Custom AI Agent Development", description: "Building AI agents trained on specific business data for customer service and automation." },
                    { name: "Workflow Automation", description: "Reducing operational costs by 40-70% through intelligent task automation." },
                    { name: "Voice & Chat Bots", description: "Conversational AI that speaks Bengali and English fluently." }
                ]}
                faqSchema={[
                    {
                        question: "What makes MangoMind the best AI automation company in Bangladesh?",
                        answer: "MangoMind combines global AI technology with local expertise, offering bKash/Nagad payments, Bengali support, and local WhatsApp service."
                    },
                    {
                        question: "How quickly can MangoMind deploy an AI agent?",
                        answer: "Most custom AI agents are deployed within 5-10 business days. Simple automations can be live within 48 hours."
                    },
                    {
                        question: "Does MangoMind work with small businesses?",
                        answer: "Yes, MangoMind serves businesses of all sizes, with starter plans beginning at ৳10,000 per month."
                    }
                ]}
            />
            <Hero />
            <LogoTrain />
            <Services />
            <AgentShowcase />
            <WhyUs />
            <Deployment />
            <Process />
            <Pricing />
            <Testimonials />
            <Blogs />
            <Contact />
        </>
    );
};

export default Home;
