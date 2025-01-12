"use client"

import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

// Custom styled MUI Button
const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
  color: 'white',
  borderRadius: '9999px',
  padding: '12px 32px',
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    transform: 'scale(1.05)',
    background: 'linear-gradient(to right, #2563eb, #7c3aed)',
  },
}))

const TransparentButton = styled(Button)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  borderRadius: '9999px',
  padding: '12px 32px',
  backdropFilter: 'blur(4px)',
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
  },
}))

const Hero = () => {
  return (
    <motion.section
     id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[calc(100vh-40px)] flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative Elements */}
        <div className="absolute -top-40 -left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />

        <div className="relative space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-500 animate-gradient transition-all duration-500"
              style={{
                backgroundSize: '300% 300%', // ทำให้ gradient เคลื่อนไหวเด่นชัด

              }}
            >
              Full Stack Developer
            </h1>



            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Building modern web applications with creativity and precision
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <GradientButton variant="contained">
              View Projects
            </GradientButton>
            <TransparentButton variant="contained">
              Contact Me
            </TransparentButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 pt-12"
          >
            {['React', 'Next.js', 'Node.js', 'TypeScript'].map((tech, index) => (
              <div
                key={tech}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero