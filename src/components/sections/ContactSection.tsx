import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import gsap from 'gsap';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_INFO = [
  {
    icon: Mail,
    title: 'Email',
    value: 'johndoe@example.com',
    href: 'mailto:johndoe@example.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'New York, NY',
    href: 'https://maps.google.com/?q=New+York',
  },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/' },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

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

    // Form animation
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        },
      }
    );

    // Contact info animation
    gsap.fromTo(
      '.contact-info-item',
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
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
            Get In <span className="text-primary-600">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto mt-6">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out. I'm always open to discussing new projects, 
            creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-dark-700">
              <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">
                Send a Message
              </h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Thank you for your message! I'll get back to you soon.
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                      placeholder="Hello, I'd like to discuss a project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2" size={18} />
                      </>
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div ref={contactInfoRef} className="lg:col-span-2">
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-dark-700 h-full">
              <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {CONTACT_INFO.map((item, index) => (
                  <div key={index} className="contact-info-item flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-500 mr-4 flex-shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-dark-900 dark:text-white">
                        {item.title}
                      </h4>
                      <a
                        href={item.href}
                        className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h4 className="text-lg font-semibold mb-4 text-dark-900 dark:text-white">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-dark-100 dark:bg-dark-700 flex items-center justify-center text-dark-700 dark:text-dark-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-10 p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                <h4 className="font-semibold mb-2 text-dark-900 dark:text-white">
                  Availability
                </h4>
                <p className="text-dark-600 dark:text-dark-400">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-dark-600 dark:text-dark-400">
                  Saturday: 10:00 AM - 3:00 PM
                </p>
                <p className="text-dark-600 dark:text-dark-400">
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;