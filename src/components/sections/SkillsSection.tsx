import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { 
        name: 'React', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        proficiency: 'Expert'
      },
      { 
        name: 'JavaScript', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        proficiency: 'Expert'
      },
      { 
        name: 'TypeScript', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        proficiency: 'Advanced'
      },
      { 
        name: 'Redux', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
        proficiency: 'Advanced'
      },
      { 
        name: 'Tailwind CSS', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        proficiency: 'Expert'
      },
      { 
        name: 'HTML5', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        proficiency: 'Expert'
      }
    ],
  },
  {
    title: 'Backend',
    skills: [
      { 
        name: 'Node.js', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        proficiency: 'Expert'
      },
      { 
        name: 'Express', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        proficiency: 'Advanced'
      },
      { 
        name: 'MongoDB', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        proficiency: 'Advanced'
      },
      { 
        name: 'GraphQL', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
        proficiency: 'Intermediate'
      },
      { 
        name: 'Firebase', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        proficiency: 'Advanced'
      },
      { 
        name: 'PostgreSQL', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        proficiency: 'Intermediate'
      }
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { 
        name: 'Git', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        proficiency: 'Expert'
      },
      { 
        name: 'Docker', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        proficiency: 'Intermediate'
      },
      { 
        name: 'Jest', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
        proficiency: 'Advanced'
      },
      { 
        name: 'AWS', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
        proficiency: 'Intermediate'
      },
      { 
        name: 'VS Code', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        proficiency: 'Expert'
      },
      { 
        name: 'Figma', 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        proficiency: 'Intermediate'
      }
    ],
  },
];

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

    // Skills animation
    gsap.fromTo(
      '.skill-category',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
        },
      }
    );

    // Skill icon hover animation setup
    const skillIcons = document.querySelectorAll('.skill-icon');
    skillIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="heading-lg text-dark-900 dark:text-white">
            Technical <span className="text-primary-600">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto mt-6">
            With a strong foundation in Data Structures and Algorithms, I bring expertise in the full MERN stack.
            These are the technologies I've been working with on a regular basis.
          </p>
        </div>

        <div ref={skillsRef} className="grid md:grid-cols-3 gap-12">
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="heading-sm mb-8 text-dark-900 dark:text-white text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group relative flex flex-col items-center"
                  >
                    <div className="skill-icon relative w-16 h-16 mb-3 bg-white dark:bg-dark-800 rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-primary-500/10 dark:bg-primary-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <span className="text-dark-900 dark:text-white font-medium text-sm">
                      {skill.name}
                    </span>
                    <span className={`
                      text-xs mt-1
                      ${skill.proficiency === 'Expert' ? 'text-green-600 dark:text-green-400' : ''}
                      ${skill.proficiency === 'Advanced' ? 'text-blue-600 dark:text-blue-400' : ''}
                      ${skill.proficiency === 'Intermediate' ? 'text-yellow-600 dark:text-yellow-400' : ''}
                      ${skill.proficiency === 'Beginner' ? 'text-red-600 dark:text-red-400' : ''}
                    `}>
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills & Interests */}
        <div className="mt-24 text-center">
          <h3 className="heading-md mb-8 text-dark-900 dark:text-white">
            Additional Skills & Interests
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Data Structures',
              'Algorithms',
              'System Design',
              'UI/UX Design',
              'RESTful APIs',
              'Microservices',
              'CI/CD',
              'Agile',
              'Team Leadership',
              'Problem Solving'
            ].map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white dark:bg-dark-800 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100 dark:border-dark-700"
              >
                <span className="font-medium text-dark-800 dark:text-dark-200">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;