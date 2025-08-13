import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'ValueLabs',
      location: 'Hyderabad, India',
      period: '2023 - Present',
      description: 'Worked on B2B Platform of Synnex Australia.',
      achievements: [
        'Reduced application load time by 60% through performance optimization using Lazy Loading and Code Splitting.',
        'Implemented microservices architecture improving system scalability',
        'Led migration from legacy system to modern React-based architecture',
        'Worked on B2B Platform of Synnex Australia.Used React for frontend and axios for API integration.',
        'Worked on NGO website-Margika using NextJS and ReactJS.Implemented full website from scratch.',
        'Awarded "STAR OF THE MONTH" for my work.'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'ValueLabs',
      location: 'Remote',
      period: 'Jan 2023- March 2023',
      description: 'Developed and maintained a client project using React, Java. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Learned and Worked on Java, MySQL, Postgres, SpringBoot and React for Australian B2B Project.',
        'Learned basics of Ubuntu, Agile Technology.'
      ]
    }   
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in software development and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-blue-200"></div>
              )}
              
              <div className="flex items-start gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase size={24} className="text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-blue-600 font-medium mb-2">
                        {exp.company}
                      </h4>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h5 className="text-gray-900 font-semibold mb-3">Key Achievements:</h5>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-700 flex items-start">
                          <span className="text-blue-600 mr-3 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;