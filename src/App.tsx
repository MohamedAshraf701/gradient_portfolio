import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;