import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Users } from 'lucide-react';
import gsap from 'gsap';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  gallery?: string[];
  category: string[];
  technologies: string[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  duration?: string;
  date?: string;
  team?: string;
  liveUrl?: string;
  githubUrl?: string;
}

// This would normally come from an API or database
const PROJECTS: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
    longDescription: 'This e-commerce platform provides businesses with a complete solution for selling products online. It features a user-friendly admin dashboard for managing products, orders, and customers, as well as a sleek, responsive storefront for customers to browse and purchase items. The platform integrates with Stripe for secure payment processing and includes features like inventory management, discount codes, and order tracking.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/6169663/pexels-photo-6169663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5076519/pexels-photo-5076519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6231778/pexels-photo-6231778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: ['Full Stack', 'Web App'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe', 'AWS S3', 'Tailwind CSS'],
    features: [
      'User authentication and authorization',
      'Product catalog with categories and filters',
      'Shopping cart and checkout process',
      'Payment processing with Stripe',
      'Order management and tracking',
      'Admin dashboard for managing products and orders',
      'Responsive design for all devices',
      'Image upload and storage with AWS S3'
    ],
    challenges: [
      'Implementing secure payment processing',
      'Managing product inventory in real-time',
      'Building a responsive and user-friendly interface',
      'Optimizing database queries for performance'
    ],
    solutions: [
      'Integrated Stripe API with custom webhooks for payment confirmation',
      'Implemented MongoDB transactions for inventory updates',
      'Used Tailwind CSS and responsive design principles',
      'Created indexes and optimized queries for better performance'
    ],
    duration: '3 months',
    date: 'January 2023',
    team: 'Solo project',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'task-management',
    title: 'Task Management App',
    description: 'A task management application with drag-and-drop interface, user authentication, and team collaboration features.',
    longDescription: 'This task management application helps teams organize work efficiently. It features a drag-and-drop interface for managing tasks across different stages, real-time updates for team collaboration, and detailed analytics to track productivity. The app includes user authentication, role-based permissions, and integration with popular calendar apps.',
    image: 'https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6408282/pexels-photo-6408282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5717415/pexels-photo-5717415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: ['Full Stack', 'Web App'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'React DnD', 'JWT', 'Chart.js'],
    features: [
      'Drag-and-drop task management',
      'Real-time collaboration via Socket.io',
      'User authentication with JWT',
      'Role-based permissions system',
      'Task comments and attachments',
      'Calendar integration',
      'Productivity analytics dashboard',
      'Email notifications for task updates'
    ],
    challenges: [
      'Implementing real-time updates across clients',
      'Building a smooth drag-and-drop interface',
      'Managing state across multiple components',
      'Ensuring data integrity with concurrent users'
    ],
    solutions: [
      'Used Socket.io for real-time data synchronization',
      'Implemented React DnD for intuitive drag-and-drop',
      'Redux for centralized state management',
      'Applied optimistic UI updates with server validation'
    ],
    duration: '2.5 months',
    date: 'August 2022',
    team: 'Solo project with client feedback',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  // Other projects with similar detailed information...
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

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  
  useEffect(() => {
    // Find the project based on the id
    const foundProject = PROJECTS.find(p => p.id === id) || null;
    setProject(foundProject);
    
    if (foundProject) {
      setActiveImage(foundProject.image);
      document.title = `${foundProject.title} | John Doe Portfolio`;
      
      // Animations
      gsap.fromTo(
        '.project-header',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      );
      
      gsap.fromTo(
        '.project-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      );
      
      gsap.fromTo(
        '.project-sidebar',
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.4 }
      );
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
          <p className="mb-6 text-dark-600 dark:text-dark-400">
            The project you are looking for doesn't exist or has been removed.
          </p>
          <Link to="/#projects" className="btn btn-primary">
            <ArrowLeft className="mr-2" size={18} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Back Button */}
        <Link 
          to="/#projects" 
          className="flex items-center text-dark-600 hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-500 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>
        
        {/* Project Header */}
        <div className="project-header mb-12">
          <h1 className="heading-xl mb-4 text-dark-900 dark:text-white">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span key={index} className="skill-badge">
                {tech}
              </span>
            ))}
          </div>
          
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-4xl">
            {project.description}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="project-content space-y-12">
              {/* Gallery */}
              <div>
                <div className="rounded-xl overflow-hidden shadow-lg mb-4">
                  <img
                    src={activeImage}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
                
                {project.gallery && (
                  <div className="flex overflow-x-auto space-x-4 pb-2">
                    <div
                      className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
                        activeImage === project.image
                          ? 'border-primary-600'
                          : 'border-transparent'
                      }`}
                      onClick={() => setActiveImage(project.image)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {project.gallery.map((img, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
                          activeImage === img
                            ? 'border-primary-600'
                            : 'border-transparent'
                        }`}
                        onClick={() => setActiveImage(img)}
                      >
                        <img
                          src={img}
                          alt={`${project.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Description */}
              <div>
                <h2 className="heading-md mb-4 text-dark-900 dark:text-white">
                  Project Overview
                </h2>
                <p className="text-dark-600 dark:text-dark-300 mb-6">
                  {project.longDescription || project.description}
                </p>
              </div>
              
              {/* Features */}
              {project.features && (
                <div>
                  <h2 className="heading-md mb-4 text-dark-900 dark:text-white">
                    Key Features
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-dark-600 dark:text-dark-300">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Challenges & Solutions */}
              {project.challenges && project.solutions && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="heading-sm mb-4 text-dark-900 dark:text-white">
                      Challenges
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-dark-600 dark:text-dark-300">
                      {project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="heading-sm mb-4 text-dark-900 dark:text-white">
                      Solutions
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-dark-600 dark:text-dark-300">
                      {project.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="project-sidebar">
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-dark-700 sticky top-28">
              <h3 className="text-xl font-semibold mb-6 text-dark-900 dark:text-white">
                Project Details
              </h3>
              
              <div className="space-y-6">
                {project.date && (
                  <div className="flex items-center">
                    <Calendar size={20} className="text-primary-600 mr-4" />
                    <div>
                      <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400">
                        Date
                      </h4>
                      <p className="text-dark-900 dark:text-white">{project.date}</p>
                    </div>
                  </div>
                )}
                
                {project.duration && (
                  <div className="flex items-center">
                    <Clock size={20} className="text-primary-600 mr-4" />
                    <div>
                      <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400">
                        Duration
                      </h4>
                      <p className="text-dark-900 dark:text-white">{project.duration}</p>
                    </div>
                  </div>
                )}
                
                {project.team && (
                  <div className="flex items-center">
                    <Users size={20} className="text-primary-600 mr-4" />
                    <div>
                      <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400">
                        Team
                      </h4>
                      <p className="text-dark-900 dark:text-white">{project.team}</p>
                    </div>
                  </div>
                )}
                
                <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
                  <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400 mb-3">
                    Categories
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.category.map((cat, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-dark-700 dark:bg-dark-700 dark:text-dark-300"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
                  <h4 className="text-sm font-medium text-dark-500 dark:text-dark-400 mb-4">
                    Project Links
                  </h4>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-full"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                    
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary w-full"
                      >
                        <Github size={18} className="mr-2" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Next/Previous Project Links (optional) */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-dark-700 flex justify-between">
          <Link
            to="/#projects"
            className="btn btn-outline"
          >
            <ArrowLeft className="mr-2" size={18} />
            All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;