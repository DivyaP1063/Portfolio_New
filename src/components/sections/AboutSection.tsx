import React, { useEffect, useRef } from 'react';
import { Code, Brain, Brush, Lightbulb } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CORE_VALUES = [
  {
    icon: Code,
    title: 'Clean Code',
    description:
      'I write clean, maintainable code following best practices and design patterns.',
  },
  {
    icon: Brain,
    title: 'Problem Solving',
    description:
      'Strong analytical skills with a foundation in data structures and algorithms.',
  },
  {
    icon: Brush,
    title: 'User Experience',
    description:
      'Creating intuitive interfaces that provide exceptional user experiences.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'Continuously learning and implementing innovative solutions to complex problems.',
  },
];

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      }
    );

    // Text animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
      }
    );

    // Cards animation
    gsap.fromTo(
      '.value-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        },
      }
    );

    // Image animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gray-50 dark:bg-dark-950"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-dark-900 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="heading-lg text-dark-900 dark:text-white">
            About <span className="text-primary-600">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About John Doe"
                className="rounded-2xl shadow-xl object-cover max-h-[600px] w-full"
              />
              
              {/* Experience badge */}
              <div className="absolute -right-5 -bottom-5 bg-white dark:bg-dark-800 rounded-xl px-6 py-4 shadow-lg">
                <span className="block text-4xl font-bold text-primary-600">4+</span>
                <span className="text-dark-600 dark:text-dark-300">Years Experience</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-primary-500 rounded-2xl"></div>
          </div>

          {/* Content */}
          <div ref={textRef}>
            <h3 className="heading-md mb-4 text-dark-900 dark:text-white">
              Full Stack MERN Developer with a passion for creating beautiful web applications
            </h3>
            
            <p className="text-dark-600 dark:text-dark-300 mb-6">
              I'm a passionate Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). 
              With 4+ years of experience, I've developed a deep understanding of both frontend and backend technologies.
            </p>
            
            <p className="text-dark-600 dark:text-dark-300 mb-8">
              My journey in web development began during my computer science degree, where I discovered my passion for creating 
              interactive web applications. Since then, I've worked on numerous projects, from small business websites to complex 
              enterprise applications, always focusing on writing clean, maintainable code and creating exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="skill-badge">Problem Solving</span>
              <span className="skill-badge">Team Collaboration</span>
              <span className="skill-badge">Communication</span>
              <span className="skill-badge">Time Management</span>
              <span className="skill-badge">Adaptability</span>
            </div>
            
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Core Values */}
        <div ref={cardsRef} className="mt-24">
          <h3 className="heading-md text-center mb-12 text-dark-900 dark:text-white">
            My Core <span className="text-primary-600">Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, index) => (
              <div
                key={index}
                className="value-card card p-6 flex flex-col items-center text-center hover:border-primary-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4 text-primary-600">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-dark-900 dark:text-white">
                  {value.title}
                </h4>
                <p className="text-dark-600 dark:text-dark-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;