import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import pages
import HomePage from './pages/HomePage';
import ProjectDetails from './pages/ProjectDetails';

// Import components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import ThemeProvider from './context/ThemeProvider';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Custom cursor effect
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    
    cursorRef.current = cursor;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.2,
        ease: 'power2.out'
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.3
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.2
      });
    };

    const onMouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2
      });
    };

    // Interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
          scale: 1.5,
          duration: 0.3
        });
      });
      
      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3
        });
      });
    });

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => {});
        el.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;