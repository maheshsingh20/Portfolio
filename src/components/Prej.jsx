import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {

  const handleClick = () => {
    navigate(`ProjectDetails${project.id}`);
  };
  const projects = [
    {
      title: "Code And Chill",
      description: "Interactive coding platform built with React, Tailwind CSS, and MongoDB. Features coding challenges and community collaboration features that enhance engagement and learning.",
      technologies: ["React", "Tailwind CSS", "MongoDB", "Node.js"],
      status: "In Progress",
      features: [
        "User-focused platform design",
        "Responsive interface",
        "API integration for database operations"
      ],
      links: {
        github: "https://github.com/maheshsingh20/code-and-chill",
        live: ""
      },
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive solution for hospital operations management with role-based access control and secure authentication system.",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
      status: "Completed",
      features: [
        "Automated hospital workflows",
        "Secure user authentication",
        "Real-time data updates"
      ],
      links: {
        github: "https://github.com/maheshsingh20/hospital-management",
        live: "#"
      },
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Binary Tree Visualizer",
      description: "Educational tool for visualizing binary tree algorithms with interactive features to help students learn data structures.",
      technologies: ["D3.js", "JavaScript", "HTML/CSS"],
      status: "Completed",
      features: [
        "Interactive algorithm visualization",
        "Multiple algorithm support",
        "Step-by-step execution"
      ],
      links: {
        github: "https://github.com/maheshsingh20/binary-tree-visualizer",
        live: "#"
      },
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">
        Here are some of my notable projects that demonstrate my skills and experience.
      </p>

      <div className="slider-container">
        <div className="slide">
          <div 
            className="slide-image" 
            style={{ backgroundImage: `url(${projects[currentIndex].image})` }}
          ></div>
          <div className="slide-content">
            <span className={`project-status ${
              projects[currentIndex].status === "In Progress" 
                ? "status-in-progress" 
                : "status-completed"
            }`}>
              {projects[currentIndex].status}
            </span>
            <h3 className="project-name">{projects[currentIndex].title}</h3>
            <p className="project-description">{projects[currentIndex].description}</p>
            
            <div className="project-features">
              {projects[currentIndex].features.map((feature, index) => (
                <div key={index} className="feature-item">{feature}</div>
              ))}
            </div>
            
            <div className="technologies">
              {projects[currentIndex].technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            <div className="project-links">
              <a 
                href={projects[currentIndex].links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link link-code"
              >
                <FiGithub style={{ marginRight: '8px' }} /> View Code
              </a>
              <a 
                href={projects[currentIndex].links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link link-demo"
              >
                <FiExternalLink style={{ marginRight: '8px' }} /> Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="slider-nav">
          <button className="nav-button" onClick={prevSlide}>
            <FiChevronLeft size={20} />
          </button>
          <button className="nav-button" onClick={nextSlide}>
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="dots-container">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'dot-active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;