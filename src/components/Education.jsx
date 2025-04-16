// src/components/Education.jsx
import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University, Punjab",
      duration: "August 2022 - Present",
      score: "CGPA: 6.67",
      achievements: [
        "Active participant in coding competitions and hackathons",
        "Coursework includes Advanced Data Structures, Algorithms, Web Development, and Cloud Computing"
      ]
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Indian Public Senior Secondary School, Lohara, Ludhiana",
      duration: "April 2019 - March 2021",
      score: "Percentage: 94%",
      achievements: [
        "Specialized in Computer Science and Mathematics",
        "School topper in Computer Science"
      ]
    },
    {
      degree: "Matriculation (10th Grade)",
      institution: "Indian Public Senior Secondary School, Lohara, Ludhiana",
      duration: "April 2018 - March 2019",
      score: "Percentage: 95%",
      achievements: [
        "Consistently ranked among top 5 students in class",
        "Awarded for excellence in Mathematics and Science"
      ]
    }
  ]

  return (
    <div className="py-12">
      <h2 className="section-title">My <span className="text-gradient">Education</span></h2>
      
      <p className="text-gray-300 mb-8 max-w-3xl">
        My academic journey has provided me with a strong foundation in computer science and problem-solving skills.
      </p>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="timeline-item"
          >
            <div className="timeline-dot"></div>
            <div className="card">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <span className="text-gray-400">{edu.duration}</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <h4 className="font-medium text-blue-400">{edu.institution}</h4>
                <span className="md:ml-4 mt-1 md:mt-0 px-2 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                  {edu.score}
                </span>
              </div>
              
              {edu.achievements && edu.achievements.length > 0 && (
                <div>
                  <h5 className="font-medium mb-2">Achievements:</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Education