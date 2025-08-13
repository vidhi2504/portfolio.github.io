import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 }
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'PostgreSQL', level: 82 },
        { name: 'Java', level: 50 }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'GraphQL', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                      <span className="text-gray-600 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Development Practices</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Agile/Scrum Methodologies</li>
                  <li>• Data Structures and Algorithms</li>
                  <li>• Test-Driven Development</li>
                  <li>• Code Reviews & Pair Programming</li>
                  <li>• CI/CD Implementation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Soft Skills</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Team Leadership</li>
                  <li>• Project Management</li>
                  <li>• Client Communication</li>
                  <li>• Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;