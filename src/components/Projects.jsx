// src/components/Projects.jsx
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: "Code And Chill",
      description: "Interactive coding platform built with React, Tailwind CSS, and MongoDB. Orchestrated a series of 10 coding challenges that attracted over 20 participants, enhancing community engagement and collaboration within the platform while improving user retention by creating meaningful competition experiences.",
      technologies: ["React", "Tailwind CSS", "MongoDB", "Node.js", "Bootstrap"],
      status: "In Progress",
      features: [
        "User-Centric Platform",
        "High-Quality Interface",
        "Developed APIs for smooth database interaction"
      ],
      links: {
        github: "https://github.com/maheshsingh20/code-and-chill",
        live: "#"
      }
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive solution for managing hospital operations with features including role-based access, secure authentication, and real-time updates.",
      technologies: ["HTML", "CSS", "PHP/Laravel", "MySQL"],
      status: "Completed (Dec 2022)",
      features: [
        "Streamlined hospital operations",
        "Advanced System Design",
        "Secure authentication system"
      ],
      links: {
        github: "https://github.com/maheshsingh20/hospital-management",
        live: "#"
      }
    },
    {
      title: "Binary Tree Visualizer",
      description: "Interactive tool for visualizing binary tree algorithms, developed during GeeksForGeeks training program.",
      technologies: ["D3.js", "HTML", "CSS", "JavaScript"],
      status: "Completed",
      features: [
        "Interactive visualization",
        "Supports multiple algorithms",
        "Educational tool for DSA learners"
      ],
      links: {
        github: "https://github.com/maheshsingh20/binary-tree-visualizer",
        live: "#"
      }
    }
  ]

  return (
    <div className="py-12">
      <h2 className="section-title">My <span className="text-gradient">Projects</span></h2>
      
      <p className="text-gray-300 mb-8 max-w-3xl">
        Here are some of my notable projects that showcase my skills and experience. Each project represents a unique challenge and learning opportunity.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card card group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 z-10"></div>
            <div className="h-48 bg-gray-700 flex items-center justify-center">
              <span className="text-4xl font-bold">{project.title.split(' ').map(w => w[0]).join('')}</span>
            </div>
            
            <div className="p-6 relative z-20">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  project.status === "In Progress" ? "bg-yellow-500/20 text-yellow-500" : "bg-green-500/20 text-green-500"
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 rounded-full text-xs">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4 mt-4">
                {project.links.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-blue-400 hover:text-blue-300"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                )}
                {project.links.live && (
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-purple-400 hover:text-purple-300"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects