import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download, Github } from 'lucide-react';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bgShapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const text = textRef.current;
    const buttons = buttonsRef.current;
    const image = imageRef.current;
    const bgShape = bgShapeRef.current;

    if (!section || !heading || !text || !buttons || !image || !bgShape) return;

    // Initialize animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      heading,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
      .fromTo(
        text,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        buttons,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        image,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1 },
        '-=0.8'
      )
      .fromTo(
        bgShape,
        { opacity: 0, scale: 0.5, rotation: -10 },
        { opacity: 0.8, scale: 1, rotation: 0, duration: 1.5 },
        '-=1.5'
      );

    // Mouse move parallax effect
    section.addEventListener('mousemove', (e) => {
      const xPos = (e.clientX / window.innerWidth - 0.5) * 30;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 30;

      gsap.to(bgShape, {
        x: xPos,
        y: yPos,
        rotation: xPos * 0.05,
        duration: 1,
        ease: 'power2.out',
      });
    });

    return () => {
      section.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="hero"
      className="min-h-screen relative flex items-center overflow-hidden pt-24"
    >
      {/* Background shape */}
      <div 
        ref={bgShapeRef}
        className="absolute -z-10 right-0 top-1/4 w-3/4 h-3/4 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-full blur-3xl opacity-80"
      ></div>
      
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <div className="z-10">
          <h1 ref={headingRef} className="heading-xl mb-6">
            <span className="block">Hello, I'm</span>
            <span className="text-primary-600">Divya Prakash</span>
          </h1>
          
          <p ref={textRef} className="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-xl">
            A Full Stack MERN Developer passionate about creating beautiful, functional, and user-friendly websites and applications. With expertise in modern web technologies and a strong foundation in data structures and algorithms.
          </p>
          
          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight className="ml-2" size={18} />
            </a>
            
            <a href="/resume.pdf" className="btn btn-outline">
              Download CV <Download className="ml-2" size={18} />
            </a>
            
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub <Github className="ml-2" size={18} />
            </a>
          </div>
        </div>
        
        {/* Image */}
        <div 
          ref={imageRef}
          className="relative hidden md:block"
        >
          <div className="relative z-10 p-4">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="John Doe" 
              className="rounded-2xl shadow-2xl object-cover max-h-[70vh]"
            />
            
            {/* Tech stack floating pills */}
            <div className="absolute -left-10 top-10 bg-white dark:bg-dark-800 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary-500"></div>
              <span className="font-medium">React</span>
            </div>
            
            <div className="absolute -right-10 top-1/3 bg-white dark:bg-dark-800 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
              <span className="font-medium">MongoDB</span>
            </div>
            
            <div className="absolute -left-16 bottom-20 bg-white dark:bg-dark-800 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="font-medium">Express</span>
            </div>
            
            <div className="absolute -right-8 -bottom-4 bg-white dark:bg-dark-800 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="font-medium">Node.js</span>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 w-40 h-40 bg-primary-500/20 rounded-full top-10 -left-10 blur-xl"></div>
          <div className="absolute -z-10 w-60 h-60 bg-secondary-500/20 rounded-full -bottom-10 -right-10 blur-xl"></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-dark-600 dark:text-dark-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-dark-400 dark:border-dark-500 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-dark-600 dark:bg-dark-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;