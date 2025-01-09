"use client"

import { motion } from 'framer-motion'
import { Container, Typography, Box, Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import GetAppIcon from '@mui/icons-material/GetApp'

const Contact = () => {
  const contactMethods = [
    {
      icon: <EmailIcon sx={{ fontSize: 28 }} />,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 28 }} />,
      label: 'Phone',
      value: '+66 xx xxx xxxx',
      link: 'tel:+66xxxxxxxx',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 28 }} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com/in/yourprofile',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 28 }} />,
      label: 'GitHub',
      value: 'View my projects',
      link: 'https://github.com/yourusername',
      color: 'from-gray-600 to-gray-400'
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center py-20"
    >
      <Container maxWidth="lg">
        <div className="relative">
          {/* Background Decorations */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
          
          <div className="relative">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Typography 
                variant="h3" 
                className="text-white font-bold mb-6"
              >
                Let&apos;s Connect
              </Typography>
              <Typography 
                className="text-gray-400 max-w-2xl mx-auto"
              >
                Currently seeking new opportunities. Feel free to reach out through any of these channels.
              </Typography>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  // target={method.link.startsWith('http') ? '_blank' : undefined}
                  // rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Box 
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all border border-transparent hover:border-blue-500/30"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <div>
                        <Typography className="text-gray-400 text-sm">
                          {method.label}
                        </Typography>
                        <Typography className="text-white font-medium group-hover:text-blue-400 transition-colors">
                          {method.value}
                        </Typography>
                      </div>
                    </div>
                  </Box>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <Button
                variant="contained"
                startIcon={<GetAppIcon />}
                href="/your-resume.pdf"
                target="_blank"
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-8 py-3"
              >
                Download Resume
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.section>
  )
}

export default Contact