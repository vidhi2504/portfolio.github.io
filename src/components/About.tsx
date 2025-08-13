import React from 'react';
import { Code, Users, Award, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={28} />,
      title: '2.5+ Years Experience',
      description: 'Building scalable web applications and software solutions with modern technologies'
    },
    {
      icon: <Users size={28} />,
      title: 'Team Leadership',
      description: 'Leading cross-functional teams and mentoring junior developers in agile environments'
    },
    {
      icon: <Award size={28} />,
      title: 'Problem Solver',
      description: 'Passionate about tackling complex technical challenges with innovative solutions'
    },
    {
      icon: <Target size={28} />,
      title: 'Results Driven',
      description: 'Focused on delivering high-quality products that exceed client expectations'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated software engineer with a passion for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate software engineer with over 2.5 years of experience in full-stack 
              development. I specialize in React, Next js, JavaScript, Java and modern web technologies, with a 
              strong focus on creating scalable applications that deliver exceptional user experiences.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in software development began with a curiosity about how technology can 
              solve real-world problems. This curiosity has evolved into a deep passion for crafting 
              clean, efficient code and building products that make a meaningful impact.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in continuous learning and staying updated with the latest industry trends. 
              When I'm not coding, you'll find me contributing to open-source projects, writing 
              technical articles, or mentoring aspiring developers.
            </p>

            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Values</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Clean, maintainable code
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  User-centered design approach
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Continuous learning and improvement
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Collaborative team environment
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mb-4 mx-auto">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;