import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <header className="fixed w-full bg-transparent p-4 z-50">
        <nav className="flex justify-center space-x-9">
          <a href="#hero" className="text-yellow-300 hover:text-yellow-500">Home</a>
          <a href="#projects" className="text-yellow-300 hover:text-yellow-500">Projects</a>
          <a href="#about" className="text-yellow-300 hover:text-yellow-500">About</a>
          <a href="#contact" className="text-yellow-300 hover:text-yellow-500">Contact</a>
        </nav>
      </header>
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
