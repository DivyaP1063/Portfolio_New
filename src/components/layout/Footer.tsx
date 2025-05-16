import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/' },
  { name: 'Email', icon: Mail, url: 'mailto:johndoe@example.com' },
];

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Contact', path: '/#contact' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-bold text-dark-900 dark:text-white flex items-center">
              <span className="text-primary-600">John</span>
              <span className="ml-1">Doe</span>
            </a>
            <p className="mt-4 text-dark-600 dark:text-dark-400 max-w-md">
              Full Stack MERN Developer passionate about creating elegant solutions to complex problems.
              Let's build something amazing together.
            </p>
            <div className="mt-6 flex space-x-4">
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
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark-900 dark:text-white">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-dark-600 hover:text-primary-600 dark:text-dark-400 dark:hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-dark-900 dark:text-white">Contact</h3>
            <ul className="space-y-2 text-dark-600 dark:text-dark-400">
              <li>New York, NY</li>
              <li>johndoe@example.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-600 dark:text-dark-400 text-sm">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-dark-600 dark:text-dark-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="text-red-500 mx-1" /> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;