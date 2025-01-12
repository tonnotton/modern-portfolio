"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Typography, Box, Button, IconButton, Chip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import StarIcon from '@mui/icons-material/Star'
import VisibilityIcon from '@mui/icons-material/Visibility'

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 4

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1.com",
      stars: 120,
      views: 1500,
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates. Includes features like task assignment, progress tracking, and team collaboration.",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://project2.com",
      stars: 95,
      views: 1200,
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my projects and skills. Built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3.com",
      stars: 80,
      views: 1000,
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time messaging platform with features like group chats, file sharing, and message encryption.",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      githubUrl: "https://github.com/yourusername/project4",
      liveUrl: "https://project4.com",
      stars: 150,
      views: 2000,
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog platform with markdown support, comments system, and user authentication.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "AWS"],
      githubUrl: "https://github.com/yourusername/project5",
      liveUrl: "https://project5.com",
      stars: 110,
      views: 1800,
    },
    {
      title: "Weather Dashboard",
      description: "A weather monitoring dashboard with location tracking, forecast visualization, and weather alerts.",
      technologies: ["React", "D3.js", "Weather API", "Recharts"],
      githubUrl: "https://github.com/yourusername/project6",
      liveUrl: "https://project6.com",
      stars: 70,
      views: 900,
    }
  ]

  const pageCount = Math.ceil(projects.length / projectsPerPage)
  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  )

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount)
  }

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount)
  }

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen flex items-center relative "
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-[-80px]"
        >
          <Typography 
            variant="h6" 
            className="text-blue-400 font-medium mb-4"
          >
            Featured Projects
          </Typography>
          <Typography 
            variant="h3" 
            className="text-white font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Recent Work
          </Typography>
        </motion.div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 relative mx-auto"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box 
                  className="h-full rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300"
                >
                  <Box className="p-6">
                    <Typography 
                      variant="h5" 
                      className="text-white font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    >
                      {project.title}
                    </Typography>
                    
                    <Typography 
                      className="text-gray-300 mb-4 text-sm"
                    >
                      {project.description}
                    </Typography>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          className="text-xs bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/20 hover:bg-blue-400/20 transition-colors duration-300"
                        />
                      ))}
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-4">
                        <div className="flex items-center gap-1 text-gray-400">
                          <StarIcon fontSize="small" />
                          <Typography variant="body2">{project.stars}</Typography>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400">
                          <VisibilityIcon fontSize="small" />
                          <Typography variant="body2">{project.views}</Typography>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          variant="contained"
                          startIcon={<GitHubIcon />}
                          href={project.githubUrl}
                          target="_blank"
                          size="small"
                          className="bg-gray-700 hover:bg-gray-600 text-white"
                        >
                          Code
                        </Button>
                        <Button
                          variant="contained"
                          startIcon={<LaunchIcon />}
                          href={project.liveUrl}
                          target="_blank"
                          size="small"
                          className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white"
                        >
                          Demo
                        </Button>
                      </div>
                    </div>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <IconButton
            onClick={handlePrev}
            className="text-white hover:bg-gray-700/50 transition-colors"
          >
            <ArrowBackIosIcon />
          </IconButton>
          <div className="flex gap-3">
            {[...Array(pageCount)].map((_, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer transition-all duration-300
                  ${currentPage === index 
                    ? 'w-12 bg-gradient-to-r from-blue-400 to-purple-400' 
                    : 'w-3 bg-gray-700 hover:bg-gray-600'
                  } h-3 rounded-full`}
                onClick={() => setCurrentPage(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
          <IconButton
            onClick={handleNext}
            className="text-white hover:bg-gray-700/50 transition-colors"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </Container>
    </motion.section>
  )
}

export default Projects