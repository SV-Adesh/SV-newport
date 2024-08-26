import React from 'react';

const projects = [
  {
    title: 'Secure Portal for Company',
    description: 'A secure portal using React.js and Express.js, addressing the need for a content management system.',
    imageUrl: '/img/pro1.png',
  },
  {
    title: 'Predictive Modeling for Early Detection of Disease',
    description: 'Accurate image detection in machine learning relies on the quality and alignment of input images.',
    imageUrl: '/img/pro2.jpg',
  },
  {
    title: 'Insurance Management System',
    description: 'Designed a super helpful tool for insurance companies to keep track of policies, claims, and customer info all in one place.',
    imageUrl: '/img/pro3.png',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-16 px-8 bg-gradient-to-r from-gray-800 to-black">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-yellow-300 p-6 rounded-lg shadow-lg transform transition hover:-translate-y-2">
            <img src={project.imageUrl} alt={project.title} className="mb-4 rounded-lg" />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
