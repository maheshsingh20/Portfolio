import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleSectionChange = (section) => {
    setActiveSection(section)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-4xl font-bold text-blue-500 animate-pulse">
          Loading Portfolio...
        </div>
      </div>
    )
  }

  // Animation variants for consistent transitions
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <main>
        {/* Hero Section - Full viewport height */}
        <motion.section
          id="home"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="min-h-[calc(100vh-80px)] flex items-center"
        >
          <div className="container">
            <Hero />
          </div>
        </motion.section>

        {/* About Section - With background */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="section section-bg"
        >
          <div className="container">
            <About />
          </div>
        </motion.section>

        {/* Skills Section - Alternate layout */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="section section-alternate"
        >
          <div className="container">
            <Skills />
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="section"
        >
          <div className="container">
            <Projects />
          </div>
        </motion.section>

        {/* Experience Section - With background */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="section section-bg"
        >
          <div className="container">
            <Experience />
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="section"
        >
          <div className="container">
            <Education />
          </div>
        </motion.section>

        {/* Achievements Section - Alternate layout */}
        <motion.section
          id="achievements"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="section section-alternate"
        >
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Achievements</h2>
              <p className="section-subtitle">
                Milestones and recognitions
              </p>
            </div>
            <Achievements />
          </div>
        </motion.section>

        {/* Contact Section - Extra bottom margin */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="section"
          style={{ marginBottom: '8rem' }}
        >
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                I'd love to hear from you
              </p>
            </div>
            <Contact />
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

export default App