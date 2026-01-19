import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router-dom";

import fujime from "../images/fujime.jpg";
import busan from "../images/busan.jpg";
import busanme from "../images/busanme.jpg";
import shira from "../images/shira.jpg";


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        {/* TOP: title + description + social links (centered) */}
        <motion.div
          className="hero-top"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="hero-title" variants={fadeInUp}>
            Kyle Modina
          </motion.h1>

          {/* <motion.h2 className="hero-subtitle" variants={fadeInUp}>
              Traveler | Software Developer | Content Creator
          </motion.h2> */}

          <motion.div className="hero-box" variants={fadeInUp}>
            <p className="hero-description">
              Hi, I'm Kyle. I'm a current college student studying Computer
              Science. I'm passionate about AI, full-stack development, and
              building scalable systems through cloud computing and distributed
              systems. In my free time, I'm probably rock climbing, building
              side projects, and making travel plans.
            </p>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/kmod24/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
              <a href="https://github.com/kmod24" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://discord.gg/eUkyDFuS" target="_blank" rel="noreferrer">
                <i className="fab fa-discord"></i> Discord
              </a>
              <a href="https://open.spotify.com/user/kwlsn2w8kn5r7d7jbxedhoyir" target="_blank" rel="noreferrer">
                <i className="fab fa-spotify"></i> Spotify
              </a>
            </div>
          </motion.div>
        </motion.div>

    
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          
          <div className="hero-bottom-left">
            <div className="code-display">
              <SyntaxHighlighter
                language="javascript"
                customStyle={{
                  margin: 0,
                  padding: "2rem",
                  height: "100%",
                  borderRadius: "20px",
                  background: "rgba(0, 0, 0, 0)",
                  backdropFilter: "blur(10px)",
                  marginBottom: 50,
                }}
                style={vscDarkPlus}
              >
{`const aboutMe: DeveloperProfile = {
  codename: "kmod",
  origin: "🍵 Somewhere in a coffee shop drinking matcha",
  role: "Fullstack Web Sorcerer",
  stack: {  
    languages: ["Python", "Javascript", "C++"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Supabase"],
  },
  traits: [
    "dark mode user",
    "API whisperer",
    "genius, billionaire, playboy, philanthropist",
    "performative cafe coder",
  ],
  missionStatement:
    "code projects to make life easier for everyone",
  availability: "Available for hire",
};`}
              </SyntaxHighlighter>
            </div>

            <motion.div
              className="floating-card"
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="card-content">
                <span className="card-icon">💻</span>
                <span className="card-text">
                  currently working on something cool :)
                </span>
              </div>

            </motion.div>

          </div>
          <div className="hero-bottom-right">
            <img src={fujime} alt="Fuji" className="hero-photo" />
            </div>




        </motion.div>

        {/* PHOTO GALLERY UNDER EVERYTHING */}
            <div className="hero-gallery">
            <img src={busan} alt="Travel 1" className="gallery-photo" />
            <img src={busanme} alt="Travel 1" className="gallery-photo" />
            <img src={shira} alt="Travel 1" className="gallery-photo" />
            
            </div>

      </div>
    </motion.section>
  );
};
