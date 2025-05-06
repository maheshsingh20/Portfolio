import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiDownload,
} from "react-icons/fi";
import "./Hero.css"
import profileImage from "../assets/profile.png";
// Replaced local PDF import with direct Google Drive link
const cv = "https://drive.google.com/file/d/1Y77ErT2sqh3gJvpbRk5PuQcGzrtpmxyI/view?usp=sharing";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="box">
        <div className="left-side">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-12 md:mb-0"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-gradient">Mahesh Singh</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
                Full Stack Developer & DevOps Enthusiast
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                I build exceptional digital experiences with modern
                technologies. Passionate about solving complex problems and
                creating efficient, scalable solutions.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#contact"
                  className="btn btn-primary flex items-center"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="btn bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white flex items-center"
                >
                  View Projects
                </a>
                <a
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white flex items-center"
                >
                  <FiDownload className="mr-2" />
                  Download CV
                </a>
              </div>
              <div className="flex items-center gap-5 md:gap-6">
                {/* GitHub - Purple */}
                <motion.a
                  href="https://github.com/maheshsingh20"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-purple-400 hover:text-purple-300 transition-colors rounded-full hover:bg-gray-800/50"
                >
                  <FiGithub className="w-6 h-6 md:w-7 md:h-7" />
                </motion.a>

                {/* LinkedIn - Blue */}
                <motion.a
                  href="https://linkedin.com/in/maheshsingh20"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-blue-400 hover:text-blue-300 transition-colors rounded-full hover:bg-gray-800/50"
                >
                  <FiLinkedin className="w-6 h-6 md:w-7 md:h-7" />
                </motion.a>

                {/* Email - Red */}
                <motion.a
                  href="mailto:singhmahesh2924@gmail.com"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-red-400 hover:text-red-300 transition-colors rounded-full hover:bg-gray-800/50"
                >
                  <FiMail className="w-6 h-6 md:w-7 md:h-7" />
                </motion.a>

                {/* Phone - Green */}
                <motion.a
                  href="tel:+916284492546"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-emerald-400 hover:text-emerald-300 transition-colors rounded-full hover:bg-gray-800/50"
                >
                  <FiPhone className="w-6 h-6 md:w-7 md:h-7" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>

                {/* Image container with border gradient */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  {/* Profile image */}
                  {/* Floating dots decoration */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blue-400/30 animate-float"></div>
                  <div className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-purple-400/30 animate-float animation-delay-2000"></div>
                  <div className="absolute top-1/4 -right-6 w-6 h-6 rounded-full bg-blue-400/20 animate-float animation-delay-3000"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="right-side">
          <img src={profileImage} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;