import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Models = lazy(() => import('./pages/Models'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));

// Lazy load blog posts
const AIStartups = lazy(() => import('./pages/blogs/AIStartups'));
const VoiceSearch = lazy(() => import('./pages/blogs/VoiceSearch'));
const AISEO2026 = lazy(() => import('./pages/blogs/AISEO2026'));
const BestLocalModels = lazy(() => import('./pages/blogs/BestLocalModels'));
const Feb2026TopModels = lazy(() => import('./pages/blogs/Feb2026TopModels'));
const Feb2026BenchmarkReport = lazy(() => import('./pages/blogs/Feb2026BenchmarkReport'));
const OpenClawNotReady = lazy(() => import('./pages/blogs/OpenClawNotReady'));
const Feb2026Benchmarks = lazy(() => import('./pages/blogs/Feb2026Benchmarks'));
const AILeaders2026 = lazy(() => import('./pages/blogs/AILeaders2026'));
const AIJobsBangladesh = lazy(() => import('./pages/blogs/AIJobsBangladesh'));
const KimiBenchmarks = lazy(() => import('./pages/blogs/KimiBenchmarks'));
const AIPlatformsBD = lazy(() => import('./pages/blogs/AIPlatformsBD'));
const CheapAIAPIs = lazy(() => import('./pages/blogs/CheapAIAPIs'));
const GeminiPhotoGuide = lazy(() => import('./pages/blogs/GeminiPhotoGuide'));
const GLMvsGemini = lazy(() => import('./pages/blogs/GLMvsGemini'));
const AIStudioBD = lazy(() => import('./pages/blogs/AIStudioBD'));
const ExamAssistant = lazy(() => import('./pages/blogs/ExamAssistant'));
const AIDetectors = lazy(() => import('./pages/blogs/AIDetectors'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--bg-primary)',
    color: 'var(--accent-orange)'
  }}>
    <div className="loader">Loading...</div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Navbar />
        <main id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/models" element={<Models />} />
              <Route path="/blogs" element={<BlogIndex />} />
              <Route path="/blog/ai-startups" element={<AIStartups />} />
              <Route path="/blog/voice-search" element={<VoiceSearch />} />
              <Route path="/blog/best-local-models" element={<BestLocalModels />} />
              <Route path="/blog/feb-2026-top-models" element={<Feb2026TopModels />} />
              <Route path="/blog/feb-2026-benchmark-report" element={<Feb2026BenchmarkReport />} />
              <Route path="/blog/openclaw-not-ready" element={<OpenClawNotReady />} />
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
