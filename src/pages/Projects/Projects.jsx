import React from 'react';
import './projects.css';
import projectconnect from '../../assets/images/projectearth.jpg';
import projectsip from '../../assets/images/projectsip.jpg';
import projectshiksha from '../../assets/images/projectshiksha.jpg';
import projectraksha from '../../assets/images/projectraksha.jpg';

const projects = [
  {
    id: 1,
    title: 'CONNECT 2 EARTH',
    description: 'description about project',
    image: projectconnect,
    detailsLink: '/projects/project-a',
  },
  {
    id: 2,
    title: 'SIP AND SHARE',
    description: 'description about project',
    image: projectsip,
    detailsLink: '/projects/project-b',
  },
  {
    id: 3,
    title: 'PROJECT LAAL',
    description: 'description about project',
    image: 'https://via.placeholder.com/300',
    detailsLink: '/projects/project-c',
  },
  {
    id: 4,
    title: 'PROJECT SHIKSHA',
    description: 'description about project',
    image: projectshiksha,
    detailsLink: '/projects/project-d',
  },
  {
    id: 5,
    title: 'Project E',
    description: 'PROJECT RAKSHA',
    image: projectraksha,
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
    <project>
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
    </project>
  );
};

export default Projects;
