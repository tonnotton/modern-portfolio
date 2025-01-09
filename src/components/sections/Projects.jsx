"use client"

import { motion } from 'framer-motion'
import { Container, Typography, Grid, Box, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      // image: "/images/project1.jpg", // ต้องใส่รูปใน public/images/
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/project1",
      liveUrl: "https://project1.com",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates. Includes features like task assignment, progress tracking, and team collaboration.",
      // image: "/images/project2.jpg",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      githubUrl: "https://github.com/yourusername/project2",
      liveUrl: "https://project2.com",
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my projects and skills. Built with Next.js and Tailwind CSS.",
      // image: "/images/project3.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/yourusername/project3",
      liveUrl: "https://project3.com",
    },
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center py-20"
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Typography 
            variant="h6" 
            className="text-blue-500 font-medium mb-4"
          >
            Featured Projects
          </Typography>
          <Typography 
            variant="h3" 
            className="text-white font-bold mb-6"
          >
            Recent Work
          </Typography>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box 
                  className="relative group rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm"
                  sx={{ aspectRatio: "16/9" }}
                >
                  {/* Project Image */}
                  <Box
                    className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      position: 'relative'
                    }}
                  />

                  {/* Overlay */}
                  <Box className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Box className="absolute inset-0 flex flex-col justify-center items-center p-6">
                      <Typography 
                        variant="h6" 
                        className="text-white font-semibold mb-2"
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        className="text-gray-300 text-center mb-4"
                      >
                        {project.description}
                      </Typography>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <Button
                          variant="contained"
                          startIcon={<GitHubIcon />}
                          href={project.githubUrl}
                          target="_blank"
                          className="bg-white/10 hover:bg-white/20"
                        >
                          Code
                        </Button>
                        <Button
                          variant="contained"
                          startIcon={<LaunchIcon />}
                          href={project.liveUrl}
                          target="_blank"
                          className="bg-blue-500 hover:bg-blue-600"
                        >
                          Demo
                        </Button>
                      </div>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.section>
  )
}

export default Projects