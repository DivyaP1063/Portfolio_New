import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../../context/ThemeProvider';
import gsap from 'gsap';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Contact', path: '/#contact' },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      // Animate mobile menu
      gsap.fromTo(
        '.mobile-menu',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.05 }
      );
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="text-2xl font-bold text-dark-900 dark:text-white flex items-center"
        >
          <span className="text-primary-600">Divya</span>
          <span className="ml-1">Prakash</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive || location.hash === link.path.split('#')[1] ? 'active' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-600 hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-500 transition-colors"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg text-dark-900 dark:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800">
          <ul className="container-custom py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.name} className="mobile-menu">
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    `block py-2 px-4 rounded-lg ${
                      isActive || location.hash === link.path.split('#')[1]
                        ? 'bg-primary-50 dark:bg-dark-800 text-primary-600 dark:text-primary-500'
                        : 'text-dark-900 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-800'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            
            {/* Social Links (Mobile) */}
            <li className="mobile-menu pt-2 border-t border-gray-200 dark:border-dark-800 mt-2">
              <div className="flex space-x-4 px-4 py-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-600 hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-500 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;