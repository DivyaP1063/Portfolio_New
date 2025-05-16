import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Code } from 'lucide-react';
import gsap from 'gsap';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: ['Full Stack', 'Web App'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'task-management',
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop interface, user authentication, and team collaboration features.',
    image: 'https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: ['Full Stack', 'Web App'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    description: 'A dashboard to track and analyze social media metrics across multiple platforms in real-time.',
    image: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: ['Frontend', 'Dashboard'],
    technologies: ['React', 'TypeScript', 'Redux', 'Chart.js', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'weather-app',
    title: 'Weather Application',
    description: 'A weather application with location detection, 5-day forecast, and customizable units.',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: ['Frontend'],
    technologies: ['React', 'OpenWeather API', 'Geolocation API', 'CSS3'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'blog-platform',
    title: 'Blog Platform',
    description: 'A blog platform with rich text editing, comments, and social sharing features.',
    image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: ['Full Stack', 'Web App'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Draft.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'crypto-tracker',
    title: 'Cryptocurrency Tracker',
    description: 'A real-time cryptocurrency tracker with price charts, alerts, and portfolio management.',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: ['Frontend', 'Web App'],
    technologies: ['React', 'TypeScript', 'CoinGecko API', 'Chart.js', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'Web App', 'Dashboard'];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS);
  
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(
        PROJECTS.filter((project) => project.category.includes(activeCategory))
      );
    }
  }, [activeCategory]);

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

    // Filters animation
    gsap.fromTo(
      filtersRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: filtersRef.current,
          start: 'top 85%',
        },
      }
    );

    // Project cards animation
    animateProjectCards();
  }, []);

  useEffect(() => {
    // Re-animate project cards when filter changes
    animateProjectCards();
  }, [filteredProjects]);

  const animateProjectCards = () => {
    // Clear any existing animations
    gsap.killTweensOf('.project-card');
    
    // Animate project cards with stagger effect
    gsap.fromTo(
      '.project-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: projectsGridRef.current,
          start: 'top 85%',
        },
      }
    );
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gray-50 dark:bg-dark-950"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-dark-900 to-transparent"></div>
      <div className="absolute -top-20 left-1/4 w-60 h-60 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 ref={headingRef} className="heading-lg text-dark-900 dark:text-white">
            Featured <span className="text-primary-600">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto mt-6">
            Here are some of my recent projects showcasing my skills in full-stack development.
            Each project demonstrates different aspects of my technical abilities and problem-solving skills.
          </p>
        </div>

        {/* Filters */}
        <div ref={filtersRef} className="flex flex-wrap justify-center mb-12 gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-gray-100 dark:hover:bg-dark-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div 
          ref={projectsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card card group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  <Link
                    to={`/projects/${project.id}`}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-dark-900 hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    <Code size={20} />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-dark-900 dark:text-white group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="skill-badge"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="skill-badge">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <Link 
                  to={`/projects/${project.id}`}
                  className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                >
                  View Project Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View More on GitHub <Github className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;