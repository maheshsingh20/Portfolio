// src/components/Skills.jsx
import { motion } from 'framer-motion'
import "./Skills.css"

const Skills = () => {
  const skillsData = [
    {
      category: 'Languages',
      skills: ['C++', 'JavaScript', 'PHP', 'Python', 'Java']
    },
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'React', 'Tailwind CSS', 'Bootstrap', 'Redux']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'PHP/Laravel', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB', 'Firebase', 'PostgreSQL']
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions']
    },
    {
      category: 'Tools',
      skills: ['Git', 'VS Code', 'Visual Studio', 'Postman', 'Figma']
    },
    {
      category: 'Soft Skills',
      skills: ['Problem Solving', 'Team Leadership', 'Project Management', 'Adaptability', 'Communication']
    }
  ]

  return (
    <div className="py-12">
      <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
      
      <p className="text-gray-300 mb-8 max-w-3xl">
        I've acquired a diverse set of skills through academic learning, personal projects, and professional experiences. Here's a comprehensive overview of my technical and professional capabilities.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" >
        {skillsData.map((skillCategory, index) => (
          <motion.div
            key={skillCategory.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card"
            id='box'
          >
            <h3 className="text-xl font-semibold mb-4 text-gradient">{skillCategory.category}</h3>
            <div className="flex flex-wrap">
              {skillCategory.skills.map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12" id='t-prof'>
        <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Frontend Development (React, Tailwind)</span>
              <span className="text-gray-400">90%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                style={{ width: '90%' }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Backend Development (Node.js, PHP)</span>
              <span className="text-gray-400">85%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Database Management</span>
              <span className="text-gray-400">80%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                style={{ width: '80%' }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">DevOps & Cloud</span>
              <span className="text-gray-400">75%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                style={{ width: '75%' }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium">Problem Solving (DSA)</span>
              <span className="text-gray-400">95%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                style={{ width: '95%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills