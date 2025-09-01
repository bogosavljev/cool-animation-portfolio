import { motion } from 'framer-motion'

// ✅ Import images so Vite handles paths correctly
import aiSaasImg from '/projects/ai-saas.png'
import socialMediaImg from '/projects/social-media.png'
import stopwatchImg from '/projects/stopwatch.png'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// ✅ Project data in one place
const projects = [
  {
    title: 'AI SaaS Platform',
    description:
      'A modern SaaS platform built with Next.js and OpenAI integration, featuring real-time AI-powered content generation and analytics.',
    image: aiSaasImg,
    tech: ['Next.js', 'OpenAI', 'TailwindCSS'],
  },
  {
    title: 'Social Media Dashboard',
    description:
      'A comprehensive social media management dashboard with analytics, scheduling, and engagement tracking features.',
    image: socialMediaImg,
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Productivity Timer',
    description:
      'A sleek productivity timer application with customizable work sessions, statistics tracking, and dark mode support.',
    image: stopwatchImg,
    tech: ['React', 'TypeScript', 'TailwindCSS'],
  },
]

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
