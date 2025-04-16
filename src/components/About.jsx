import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa'
import { SiMongodb, SiTailwindcss, SiKubernetes, SiDocker } from 'react-icons/si'

const About = () => {
  const technologies = [
    { icon: <FaReact size={24} />, name: "React" },
    { icon: <FaNodeJs size={24} />, name: "Node.js" },
    { icon: <SiMongodb size={24} />, name: "MongoDB" },
    { icon: <SiTailwindcss size={24} />, name: "Tailwind" },
    { icon: <FaAws size={24} />, name: "AWS" },
    { icon: <SiKubernetes size={24} />, name: "K8s" },
    { icon: <SiDocker size={24} />, name: "Docker" }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Get to know more about my background, skills, and professional journey
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-700 bg-gray-800 flex items-center justify-center">
                <div className="text-6xl font-bold text-white">MS</div>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Full Stack Developer & DevOps Enthusiast</h3>
            
            <div className="mb-8 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I'm Mahesh Singh, a passionate developer currently pursuing my Bachelor's in Computer Science at Lovely Professional University. With expertise in both frontend and backend technologies, I specialize in building modern web applications and scalable systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in tech has equipped me with problem-solving skills and the ability to adapt to new technologies quickly. I thrive in collaborative environments and enjoy tackling complex challenges.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-white">My Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 hover:border-blue-400 transition-all"
                  >
                    <span className="text-blue-400">{tech.icon}</span>
                    <span className="text-white font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <span className="text-gray-400 w-24 min-w-[6rem]">Name:</span>
                <span className="font-medium text-white">Mahesh Singh</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 w-24 min-w-[6rem]">Email:</span>
                <a 
                  href="mailto:singhmahesh2924@gmail.com" 
                  className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  singhmahesh2924@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 w-24 min-w-[6rem]">Phone:</span>
                <a 
                  href="tel:+916284492546" 
                  className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                >
                  +91 6284492546
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 w-24 min-w-[6rem]">Education:</span>
                <span className="font-medium text-white">B.Tech CSE, LPU</span>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white hover:shadow-lg transition-all"
              >
                <FiDownload className="mr-2 text-lg" />
                Download Resume
              </motion.a>
              
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-medium transition-all"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About