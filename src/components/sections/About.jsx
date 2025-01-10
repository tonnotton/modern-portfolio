"use client"

import { motion } from 'framer-motion'
import { Box, Container, Grid, Typography } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import WebIcon from '@mui/icons-material/Web'
import StorageIcon from '@mui/icons-material/Storage'

const About = () => {
  const experiences = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks."
    },
    {
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express, and database management."
    },
    {
      icon: <WebIcon sx={{ fontSize: 40 }} />,
      title: "Full Stack Integration",
      description: "Connecting frontend and backend to create seamless full-stack applications."
    }
  ]

  return (
    <motion.section
      id="about"
        className="h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center py-20"
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* About Text */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="h6" 
                className="text-blue-500 font-medium mb-4"
              >
                About Me
              </Typography>
              <Typography 
                variant="h3" 
                className="text-white font-bold mb-6"
              >
                Passionate Full Stack Developer
              </Typography>
              <Typography 
                className="text-gray-400 mb-6"
                paragraph
              >
                With a strong foundation in both frontend and backend development, 
                I create modern web applications that deliver exceptional user experiences. 
                I'm passionate about learning new technologies and solving complex problems.
              </Typography>
              <Box className="flex gap-6 text-gray-400 mb-8">
                <Box>
                  <Typography variant="h4" className="text-blue-500 font-bold">3+</Typography>
                  <Typography>Years Experience</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" className="text-blue-500 font-bold">20+</Typography>
                  <Typography>Projects Completed</Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Experience Cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              {experiences.map((exp, index) => (
                <Grid item xs={12} key={index}>
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Box 
                      className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
                      sx={{ borderLeft: '4px solid #3b82f6' }}
                    >
                      <Box className="flex items-start gap-4">
                        <Box className="text-blue-500">
                          {exp.icon}
                        </Box>
                        <Box>
                          <Typography variant="h6" className="text-white mb-2">
                            {exp.title}
                          </Typography>
                          <Typography className="text-gray-400">
                            {exp.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </motion.section>
  )
}

export default About