import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ConsultationForm from './pages/Consultation.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import CaseStudies from './pages/CaseStudies.tsx';
import Blog from './pages/Blog.tsx';
import BlogPost from './pages/BlogPost.tsx';
import FilteredBlog from './pages/FilteredBlog.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import Terms from './pages/Terms.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/consultation" element={<ConsultationForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/blog/filter/:type/:value" element={<FilteredBlog />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  </StrictMode>
);