import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out!
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com" className="text-white hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-white hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="block text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#experience" className="block text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
              <a href="#skills" className="block text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;