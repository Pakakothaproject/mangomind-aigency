import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Models from './pages/Models';
import BlogIndex from './pages/BlogIndex';
import AIStartups from './pages/blogs/AIStartups';
import VoiceSearch from './pages/blogs/VoiceSearch';
import AISEO2026 from './pages/blogs/AISEO2026';
import Feb2026Benchmarks from './pages/blogs/Feb2026Benchmarks';
import AILeaders2026 from './pages/blogs/AILeaders2026';
import AIJobsBangladesh from './pages/blogs/AIJobsBangladesh';
import KimiBenchmarks from './pages/blogs/KimiBenchmarks';
import AIPlatformsBD from './pages/blogs/AIPlatformsBD';
import CheapAIAPIs from './pages/blogs/CheapAIAPIs';
import GeminiPhotoGuide from './pages/blogs/GeminiPhotoGuide';
import GLMvsGemini from './pages/blogs/GLMvsGemini';
import AIStudioBD from './pages/blogs/AIStudioBD';
import ExamAssistant from './pages/blogs/ExamAssistant';
import AIDetectors from './pages/blogs/AIDetectors';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/blogs" element={<BlogIndex />} />
          <Route path="/blog/ai-startups" element={<AIStartups />} />
          <Route path="/blog/voice-search" element={<VoiceSearch />} />
          <Route path="/blog/ai-seo-2026" element={<AISEO2026 />} />
          <Route path="/blog/feb-2026-benchmarks" element={<Feb2026Benchmarks />} />
          <Route path="/blog/ai-leaders-2026" element={<AILeaders2026 />} />
          <Route path="/blog/ai-impact-bangladesh-jobs" element={<AIJobsBangladesh />} />
          <Route path="/blog/kimi-k2-5-benchmarks" element={<KimiBenchmarks />} />
          <Route path="/blog/ai-platforms-bd" element={<AIPlatformsBD />} />
          <Route path="/blog/cheap-ai-apis" element={<CheapAIAPIs />} />
          <Route path="/blog/gemini-photo-guide" element={<GeminiPhotoGuide />} />
          <Route path="/blog/glm-flash-vs-gemini" element={<GLMvsGemini />} />
          <Route path="/blog/ai-studio-bd" element={<AIStudioBD />} />
          <Route path="/blog/exam-assistant" element={<ExamAssistant />} />
          <Route path="/blog/ai-truth-detectors" element={<AIDetectors />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
