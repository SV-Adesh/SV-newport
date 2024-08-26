import React from 'react';

function About() {
  return (
    <section id="about" className="py-16 px-8 bg-gradient-to-r from-gray-800 to-black">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-yellow-300 mb-8">Technical Skills</h3>
        <ul className="flex flex-wrap justify-center gap-4">
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">HTML & CSS</li>
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">Python</li>
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">React.js</li>
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">React.js</li>
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">Node.js</li>
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">Express.js</li>
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">MongoDB</li>
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">C</li>
          <li className="bg-yellow-300 text-black px-6 py-2 rounded-full shadow-lg">C++</li>
          
          {/* Add other skills */}
        </ul>
      </div>
    </section>
  );
}

export default About;
