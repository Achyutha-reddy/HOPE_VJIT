import React from 'react';
import './projects.css';

const projects = [
  {
    id: 1,
    title: 'Project A',
    description: 'This is a brief description of Project A. It highlights the key features and objectives.',
    image: 'https://via.placeholder.com/300',
    detailsLink: '/projects/project-a',
  },
  {
    id: 2,
    title: 'Project B',
    description: 'Project B is an advanced application with innovative solutions and features.',
    image: 'https://via.placeholder.com/300',
    detailsLink: '/projects/project-b',
  },
  {
    id: 3,
    title: 'Project C',
    description: 'This project focuses on design, scalability, and a smooth user experience.',
    image: 'https://via.placeholder.com/300',
    detailsLink: '/projects/project-c',
  },
  {
    id: 4,
    title: 'Project D',
    description: 'Project D is an example of modern web development practices with cutting-edge technologies.',
    image: 'https://via.placeholder.com/300',
    detailsLink: '/projects/project-d',
  },
  {
    id: 5,
    title: 'Project E',
    description: 'This project demonstrates the integration of AI and machine learning in real-world applications.',
    image: 'https://via.placeholder.com/300',
    detailsLink: '/projects/project-e',
  },
];

const ProjectCard = ({ title, description, image, detailsLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a href={detailsLink} className="details-link">See Details</a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="projects-title">Our Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              detailsLink={project.detailsLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
