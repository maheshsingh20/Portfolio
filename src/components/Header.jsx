import { useState, useEffect } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiUser,
  FiCode,
  FiBriefcase,
  FiAward,
  FiBook,
  FiHome,
} from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import "./Header.css";

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHovering, setIsHovering] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "achievements",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const navLinks = [
    { id: "home", label: "Home", icon: <FiHome className="w-5 h-5" /> },
    { id: "about", label: "About", icon: <FiUser className="w-5 h-5" /> },
    { id: "skills", label: "Skills", icon: <FiCode className="w-5 h-5" /> },
    {
      id: "projects",
      label: "Projects",
      icon: <FiBriefcase className="w-5 h-5" />,
    },
    {
      id: "experience",
      label: "Experience",
      icon: <FiBriefcase className="w-5 h-5" />,
    },
    {
      id: "education",
      label: "Education",
      icon: <FiBook className="w-5 h-5" />,
    },
    {
      id: "achievements",
      label: "Achievements",
      icon: <FiAward className="w-5 h-5" />,
    },
    { id: "contact", label: "Contact", icon: <FiMail className="w-5 h-5" /> },
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      url: "https://github.com/maheshsingh20",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/maheshsingh20",
      label: "LinkedIn",
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      url: "mailto:youremail@example.com",
      label: "Email",
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      url: "tel:+1234567890",
      label: "Phone",
    },
  ];

  return (
    <header className={`navigation-bar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-brand">{/* Logo content */}</div>

      <nav className="nav-links">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`nav-link ${
                  activeSection === link.id ? "active" : ""
                }`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.icon}
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="social-links">
          {socialLinks.map((social, index) => (
            <a key={index} className="social-link" href={social.url}>
              {social.icon}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
