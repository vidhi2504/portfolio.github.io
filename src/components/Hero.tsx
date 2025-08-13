import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end">
      <div className="container mx-auto px-6 text-center ">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 mt-10 pt-10">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-pink-600 to-indigo-700 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-4xl font-bold text-white">VM</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Vidhi Mehta
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
            Software Engineer
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experienced software engineer specializing in building scalable web applications 
            and innovative solutions. Passionate about clean code, modern technologies, 
            and delivering exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              View My Work
            </button>
            
            <a target="_blank" href='https://drive.google.com/file/d/1gt4spHgUMO2zh4tm9sZu0AwhPPTEXNKR/view?usp=sharing'><button className="border-2 border-blue-600 text-white-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              View Resume
            </button>
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-16">
            <a 
              href="https://github.com/vidhi2504" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Github size={24} className="text-gray-700 group-hover:text-gray-900" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vidhi-mehta-2252001a8/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={24} className="text-gray-700 group-hover:text-gray-900" />
            </a>
            <a 
              href="mailto:mehta.vidhi2504@gmail.com"
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={24} className="text-gray-700 group-hover:text-gray-900" />
            </a>
          </div>
          
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;