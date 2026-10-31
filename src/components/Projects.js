import React from 'react';

const projects = [
  {
    title: 'iRide Loan Management Platform',
    technologies: ['React.js', 'Redux', 'React Native'],
    points: [
      'Developed frontend modules for loan workflows, agent and dealer onboarding, approvals, commission payouts, inventory verification, and analytics dashboards.',
      'Implemented mobile application features involving vehicle discovery, vehicle selection, geolocation, and inventory management using React Native and Expo.',
    ],
  },
  {
    title: 'Malba – Waste Management Platform',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    points: [
      'Independently developing a MERN-stack waste management platform, taking ownership of frontend development, backend services, database integration, and application workflows.',
      'Building application features for waste management workflows involving producers, waste transporters, and collection points.',
      'Implementing reusable React components, REST APIs, and database operations to support application functionality and business workflows.',
      'Evaluating integration approaches for the Delhi Malba Portal, including redirect-based navigation, embedded content, and JavaScript widget integration.',
      'Aligning application workflows with the Construction and Demolition Waste Management Rules, 2025.',
    ],
  },
  {
    title: 'AI-Powered Chrome Extension',
    technologies: ['React.js', 'Chrome Extension APIs'],
    points: [
      'Developed productivity features including context-aware AI question answering, persistent text highlighting, note-taking, screenshot capture, and local data persistence.',
      'Implemented AI-assisted writing tools with keyboard shortcuts and content insertion into supported web pages.',
      'Integrated DOM manipulation, Chrome Extension APIs, and frontend state management to support browser-based productivity workflows.',
    ],
  },
  {
    title: 'Live Traffic Monitoring Application',
    technologies: ['React.js', 'Redux'],
    points: [
      'Developed traffic monitoring and incident management dashboards with responsive interfaces and API integrations.',
      'Implemented authentication workflows, operator management interfaces, and live data update functionality.',
    ],
  },
];

function Projects({ projectRef }) {
  return (
    <div ref={projectRef} id='project' className='Projects'>
      <h2 className='projectheading' >My Projects</h2>

      <div className='projectDetails'>
        {projects.map((project, index) => (
          <article className='project-card' key={project.title}>
            <span className='project-number'>{String(index + 1).padStart(2, '0')}</span>
            <h3 className='project-title'>{project.title}</h3>
            <div className='chips'>
              {project.technologies.map((tech) => <span className='chip' key={tech}>{tech}</span>)}
            </div>
            <ul className='project-points'>
              {project.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        ))}
      </div>

    </div>
  );
}

export default Projects;
