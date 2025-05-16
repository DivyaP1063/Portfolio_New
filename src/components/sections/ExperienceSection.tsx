import React, { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import gsap from 'gsap';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    location: 'New York, NY',
    period: 'Jan 2023 - Present',
    description: [
      'Lead a team of 5 developers building enterprise-level web applications using the MERN stack',
      'Redesigned authentication system, improving security and reducing login times by 40%',
      'Implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 60%',
      'Optimized database queries, resulting in a 30% improvement in application performance'
    ],
    type: 'work'
  },
  {
    title: 'Full Stack Developer',
    company: 'WebSolutions LLC',
    location: 'San Francisco, CA',
    period: 'Jun 2021 - Dec 2022',
    description: [
      'Developed and maintained multiple client projects using React, Node.js, and MongoDB',
      'Created a custom CMS for e-commerce clients, increasing content management efficiency by 50%',
      'Integrated third-party APIs for payment processing, shipping, and social media',
      'Collaborated with design team to implement responsive UIs and improve user experience'
    ],
    type: 'work'
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Digital Agency',
    location: 'Boston, MA',
    period: 'Feb 2020 - May 2021',
    description: [
      'Built interactive websites for clients using React, Redux, and Tailwind CSS',
      'Implemented responsive designs ensuring cross-browser compatibility',
      'Optimized web performance, achieving 90+ scores on Google PageSpeed Insights',
      'Worked with backend developers to integrate REST APIs and GraphQL endpoints'
    ],
    type: 'work'
  },
  {
    title: 'M.S. in Computer Science',
    company: 'Tech University',
    location: 'New York, NY',
    period: '2018 - 2020',
    description: [
      'Specialized in Web Technologies and Distributed Systems',
      'Thesis: "Optimizing Performance of React Applications in Resource-Constrained Environments"',
      'GPA: 3.9/4.0',
      'Teaching Assistant for Data Structures and Algorithms'
    ],
    type: 'education'
  },
  {
    title: 'B.S. in Computer Science',
    company: 'State University',
    location: 'Chicago, IL',
    period: '2014 - 2018',
    description: [
      'Minor in Mathematics',
      'Developed a library management system as capstone project',
      'GPA: 3.8/4.0',
      'Dean\'s List for 7 semesters'
    ],
    type: 'education'
  }
];

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

    // Timeline items animation
    gsap.fromTo(
      '.timeline-item',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute -top-40 right-1/3 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 left-1/3 w-60 h-60 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="heading-lg text-dark-900 dark:text-white">
            Work <span className="text-primary-600">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto mt-6">
            My professional journey as a developer, showcasing my growth and expertise in the industry.
          </p>
        </div>

        {/* Toggle buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-dark-800 inline-flex rounded-lg p-1.5 shadow-sm">
            <button
              onClick={() => {
                document.getElementById('work-experience')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2 rounded-md font-medium bg-primary-600 text-white"
            >
              <Briefcase size={16} className="inline-block mr-2" />
              Work
            </button>
            <button
              onClick={() => {
                document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-2 rounded-md font-medium text-dark-700 dark:text-dark-300 hover:bg-gray-100 dark:hover:bg-dark-700"
            >
              <GraduationCap size={16} className="inline-block mr-2" />
              Education
            </button>
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div id="work-experience" ref={timelineRef} className="mb-16 scroll-mt-24">
          <h3 className="heading-md mb-8 text-dark-900 dark:text-white flex items-center">
            <Briefcase size={24} className="mr-2" />
            Work Experience
          </h3>
          
          <div className="timeline">
            {EXPERIENCE_ITEMS.filter(item => item.type === 'work').map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot">
                  <Briefcase size={16} className="text-white" />
                </div>
                
                <div className="ml-4">
                  <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                      <h4 className="text-xl font-semibold text-dark-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-sm text-primary-600 dark:text-primary-500 font-medium mt-1 md:mt-0">
                        {item.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-dark-700 dark:text-dark-300 font-medium">
                        {item.company}
                      </span>
                      <span className="mx-2 text-dark-400">•</span>
                      <span className="text-dark-600 dark:text-dark-400">
                        {item.location}
                      </span>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-dark-600 dark:text-dark-400">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div id="education" className="scroll-mt-24">
          <h3 className="heading-md mb-8 text-dark-900 dark:text-white flex items-center">
            <GraduationCap size={24} className="mr-2" />
            Education
          </h3>
          
          <div className="timeline">
            {EXPERIENCE_ITEMS.filter(item => item.type === 'education').map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot">
                  <GraduationCap size={16} className="text-white" />
                </div>
                
                <div className="ml-4">
                  <div className="bg-white dark:bg-dark-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                      <h4 className="text-xl font-semibold text-dark-900 dark:text-white">
                        {item.title}
                      </h4>
                      <span className="text-sm text-primary-600 dark:text-primary-500 font-medium mt-1 md:mt-0">
                        {item.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <span className="text-dark-700 dark:text-dark-300 font-medium">
                        {item.company}
                      </span>
                      <span className="mx-2 text-dark-400">•</span>
                      <span className="text-dark-600 dark:text-dark-400">
                        {item.location}
                      </span>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-dark-600 dark:text-dark-400">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center mt-16">
          <a
            href="/resume.pdf"
            download
            className="btn btn-primary inline-flex items-center"
          >
            Download Full Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;