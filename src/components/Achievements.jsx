// src/components/Achievements.jsx
import { motion } from 'framer-motion'
import { FaTrophy, FaAward, FaCertificate, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa'

// Import certificate PDFs from assets
import "./Achi.css"

const Achievements = () => {
  const achievements = [
    {
      title: "LeetCode Global Contest Rating",
      description: "Secured Global contest rating 1768 in LeetCode (January 2025)",
      detail: "Among top 8% contestants in Leetcode contests",
      icon: <FaTrophy className="text-yellow-400 text-2xl" />,
      hasCertificate: false
    },
    {
      title: "Weekly Contest Ranking",
      description: "Secured Global ranking 2850 in Weekly Contest 435 (December 2025)",
      detail: "Among 34,000+ participants in the contest",
      icon: <FaAward className="text-blue-400 text-2xl" />,
      hasCertificate: false
    },
    {
      title: "Project Success",
      description: "Achieved project success in my cohort with 100% client satisfaction (December 2025)",
      detail: "Project based on online tutoring for a client with specific educational needs",
      icon: <FaCertificate className="text-green-400 text-2xl" />,
      hasCertificate: false
    },
    {
      title: "IBM DevOps Certification",
      description: "Completed IBM DevOps and Software Engineering specialization (December 2024)",
      detail: "Covered CI/CD pipelines, containerization, and cloud deployment strategies",
      icon: <FaCertificate className="text-purple-400 text-2xl" />,
      hasCertificate: true,
      certificate: 'https://drive.google.com/file/d/1Ig0Kz3XGOPN0H3zu7DFpHclsQL8-EBll/view?usp=sharing',
      certificateName: "IBM-DevOps-Certificate.pdf"
    },
    {
      title: "DSA Certification",
      description: "Completed Data Structure and Algorithm - Self-Paced (C++) by GFG (July 2024)",
      detail: "Mastered advanced algorithms and problem-solving techniques",
      icon: <FaCertificate className="text-red-400 text-2xl" />,
      hasCertificate: true,
      certificate: 'https://drive.google.com/file/d/1V2zUkd_r2b8rFP9uWhuoA_l2Hcs9ia1n/view?usp=sharing',
      certificateName: "DSA-Certificate.pdf"
    },
    {
      title: "Full Stack Certification",
      description: "Completed IBM Full Stack Web Development by Coursera (January 2024)",
      detail: "Covered frontend, backend, and database technologies in depth",
      icon: <FaCertificate className="text-indigo-400 text-2xl" />,
      hasCertificate: true,
      certificate: 'https://drive.google.com/file/d/1cr7aKZ8iPT5weaJvTsq67MVkZJkIDSFz/view?usp=sharing',
      certificateName: "FullStack-Certificate.pdf"
    }
  ]

  return (
    <div className="py-12">
      <h2 className="section-title">My <span className="text-gradient">Achievements</span></h2>
      
      <p className="text-gray-300 mb-8 max-w-3xl">
        Recognition of my hard work and dedication through various achievements and certifications.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card hover:bg-gray-800/50 transition-colors"
            id='box'
          >
            <div className="flex items-start" >
              <div className="mr-4 mt-1">
                {achievement.icon}
              </div>
              <div className="flex-1" id='sub-1'>
                <h3 className="text-lg font-bold mb-1">{achievement.title}</h3>
                <p className="text-gray-300 mb-2">{achievement.description}</p>
                <p className="text-sm text-gray-400 mb-2">{achievement.detail}</p>
                {achievement.hasCertificate && (
                  <a
                    href={achievement.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:text-primary-light transition-colors"
                  >
                    <FaFilePdf className="mr-2" />
                    View Certificate
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

export default Achievements