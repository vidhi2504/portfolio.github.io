import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Custom Dashboard Builder (React.js)',
      description: 'A dynamic, drag-and-drop dashboard builder built using React.js. Users can add, move, resize, and organize various widgets such as charts, tables, and text blocks — all through an intuitive interface designed for desktop browsers. Layouts are saved automatically to local storage for persistent user experience.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'JavaScript', 'TypeScript','HTML', 'CSS'],
      github: 'https://github.com/vidhi2504/dragDropWebsite.github.io',
      demo: 'https://vidhi2504.github.io/dragDropWebsite.github.io/',
      year: '2025'
    },
    {
      title: 'Weather App',
      description: 'This weather application is built using JavaScript, along with HTML and CSS for the user interface. It allows users to check the current weather conditions for cities around the world. By integrating a weather API, the app fetches real-time data including temperature, weather status, and more, based on the users input. The goal of the project is to provide a simple and responsive way to stay updated with weather information for any location.',
      image: 'https://www.digitalunite.com/sites/default/files/images/weather%201.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript','HTML','CSS'],
      github: 'https://github.com/vidhi2504/weather-app',
      demo: 'https://vidhi2504.github.io/weather-app/',
      year: '2023'
    },
    {
      title: 'Crime Alert App',
      description: 'This is a progressive web application built with React that helps users stay informed about criminal activities happening in their city. By leveraging real-time data from a crime reporting API, the app notifies users of recent crimes based on their selected or current location. Designed with user awareness and safety in mind, the application provides a clean, responsive interface and can function seamlessly across devices, even offering offline support through PWA features.',
      image: 'https://i.insider.com/5ff36f9f3793140019e283cb?width=1300&format=jpeg&auto=webp?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'UI Libraries'],
      github: 'https://github.com/vidhi2504/crimealert',
      demo: 'https://stayalert.netlify.app/',
      year: '2022'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center text-gray-700 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.year}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;