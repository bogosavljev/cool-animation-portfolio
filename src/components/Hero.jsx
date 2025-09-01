import { motion } from 'framer-motion';
import { Prism as SyntaxHighligher } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const Hero = () => {
    return (
        <motion.section id="home" className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="hero-container">
               <motion.div className="hero-content" variants={staggerContainer} initial="initial" animate="animate">
                   <motion.div className="hero-badge">
                     <span> 👋 Hello, I'm </span>
                   </motion.div>
                   <motion.h1 className="glitch" variants={fadeInUp} whileHover={{ scale: 1.02 }}>
                     Djuka UI Dev
                   </motion.h1>
                    <motion.h2 className="hero-subtitle" variants={fadeInUp}>
                     Creative UI Developer & Designer
                    </motion.h2>
                    <motion.p className="hero-description" variants={fadeInUp}>
                     I'm UI developer who loves to craft clean, beautiful and functional user interfaces. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
                   </motion.p>
                   <motion.div className="cta-buttons" variants={staggerContainer}>
                    <motion.a href="#projects" className="cta-primary" variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                     View My Work
                    </motion.a>
                    <motion.a href="#contact" className="cta-secondary" variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                     Contact Me
                    </motion.a>
                   </motion.div>
                   <motion.div className="social-links" variants={staggerContainer}>
                        <motion.a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </motion.a>
                        <motion.a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </motion.a>
                        <motion.a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </motion.a>
                   </motion.div>
               </motion.div>
               <motion.div className="hero-image-container" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                <div className="code-display">
                    <SyntaxHighligher language="typescript" style={darcula} customStyle={{ 
                        margin: 0, 
                        padding: '2rem', 
                        height: '100%', 
                        borderRadius: '15px', 
                        backgroundColor: 'rgba(30,41,59,0.8)', 
                        backdropFilter: 'blur(10px)',
                        marginBottom: 50, 
                    }}>
                        {`const aboutMe: DeveloperProfile = {
  codename: "Djuka UI Dev",
  origin: "🌍 Somewhere between a coffee shop and a terminal",
  role: "Fullstack Web Sorcerer",
  stack: {
    languages: ["JavaScript", "TypeScript", "SQL"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Supabase"],
  },
  traits: [
    "pixel-perfectionist",
    "API whisperer",
    "dark mode advocate",
    "terminal aesthetic enthusiast",
  ],
  missionStatement:
    "Turning ideas into interfaces and bugs into feature",
  availability: "Available for hire",
};`}
                    </SyntaxHighligher>
                </div>
                    <motion.div className="floating-card" animate={{ y: [0, -10, 0], rotate: [0, 2, 0], opacity: [1, 0.8, 1] }} transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}>
                        <div className="card-content">
                            <span className="card-icon">💻</span>
                            <span className="card-text">Currently working on something awesome!</span>
                        </div>
                    </motion.div>
               </motion.div>
            </div>
        </motion.section>
    )
}
