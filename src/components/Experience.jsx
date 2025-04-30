// src/components/Experience.jsx
import { motion } from 'framer-motion'
import "./Exp.css";
const Experience = () => {
  const experiences = [
    {
      role: "AI Trainer",
      company: "Outlier AI",
      duration: "Present",
      description: [
        "Trained AI models by refining datasets and applying programming skills",
        "Achieved 30% improvement in model accuracy through iterative learning and optimization processes",
        "Worked with large language models and contributed to their training pipeline"
      ]
    },
    {
      role: "Summer Trainee",
      company: "GeeksForGeeks",
      duration: "Summer 2024",
      description: [
        "Completed rigorous three-month training program in Data Structures and Algorithms",
        "Developed practical skills through hands-on projects including a Binary Tree Visualizer",
        "Implemented complex algorithms and data structures in C++ and JavaScript"
      ]
    }
  ]

  return (
    <div className="py-12">
      <h2 className="section-title">Training & <span className="text-gradient">Internship</span></h2>
      
      <p className="text-gray-300 mb-8 max-w-3xl">
        My professional journey includes valuable training and internship experiences that have helped me grow as a developer and problem solver.
      </p>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="timeline-item"
            
          >
            <div className="timeline-dot"></div>
            <div className="card" id='box'>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.company}
                  </span>
                  <span className="ml-4 text-gray-400">{exp.duration}</span>
                </div>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience