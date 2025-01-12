"use client"

import { useState, useEffect } from 'react'
import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { motion, AnimatePresence } from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const Navbar = () => {
 const [isScrolled, setIsScrolled] = useState(false)
 const [isOpen, setIsOpen] = useState(false)
 const [activeSection, setActiveSection] = useState('home')
 const theme = useTheme()
 const isMobile = useMediaQuery(theme.breakpoints.down('md'))
 
 useEffect(() => {
   const handleScroll = () => {
     setIsScrolled(window.scrollY > 50)
   }
   window.addEventListener('scroll', handleScroll)
   return () => window.removeEventListener('scroll', handleScroll)
 }, [])

 useEffect(() => {
   const options = {
     threshold: 0.3,
   }

   const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         setActiveSection(entry.target.id)
       }
     })
   }, options)

   navItems.forEach((item) => {
     const element = document.getElementById(item.toLowerCase())
     if (element) observer.observe(element)
   })

   return () => {
     navItems.forEach((item) => {
       const element = document.getElementById(item.toLowerCase())
       if (element) observer.unobserve(element)
     })
   }
 }, [])

 const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']
 const logoText = "Portfolio"

 const scrollToSection = (sectionId) => {
   const element = document.getElementById(sectionId)
   const offset = 80
   const elementPosition = element.offsetTop - offset
   
   window.scrollTo({
     top: elementPosition,
     behavior: 'smooth'
   })
   setIsOpen(false)
 }

 const navVariants = {
   hidden: { y: -100, opacity: 0 },
   visible: { 
     y: 0, 
     opacity: 1,
     transition: { duration: 0.5 }
   }
 }

 const menuVariants = {
   closed: { x: '100%' },
   open: {
     x: 0,
     transition: {
       type: "spring",
       stiffness: 100
     }
   }
 }

 return (
   <>
     <motion.div
       initial="hidden"
       animate="visible"
       variants={navVariants}
     >
       <AppBar 
         position="fixed"
         sx={{
           background: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
           backdropFilter: isScrolled ? 'blur(10px)' : 'none',
           boxShadow: isScrolled ? 1 : 'none',
           transition: 'all 0.3s ease-in-out'
         }}
       >
         <Container maxWidth="xl">
           <Toolbar 
             disableGutters 
             sx={{ 
               minHeight: { xs: '60px', md: '70px' },
               px: { xs: 2, sm: 3, md: 4 }
             }}
           >
             {/* Logo */}
             <Box 
               sx={{ 
                 display: 'flex',
                 fontSize: { xs: '1.5rem', sm: '1.8rem' }, 
                 fontWeight: 'bold',
                 cursor: 'pointer'
               }}
               onClick={() => scrollToSection('home')}
             >
               {logoText.split('').map((letter, index) => (
                 <motion.span
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{
                     duration: 0.5,
                     delay: index * 0.1,
                     ease: [0.6, -0.05, 0.01, 0.99]
                   }}
                   style={{
                     display: 'inline-block',
                     background: 'linear-gradient(45deg, #007FFF, #00FF95)',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                   }}
                   whileHover={{
                     scale: 1.2,
                     rotate: 10,
                     transition: { duration: 0.2 }
                   }}
                 >
                   {letter}
                 </motion.span>
               ))}
             </Box>

             <Box sx={{ flexGrow: 1 }} />

             {/* Desktop Menu */}
             <Box 
               sx={{ 
                 display: { xs: 'none', md: 'flex' }, 
                 gap: { md: 3, lg: 4 }
               }}
             >
               {navItems.map((item, index) => (
                 <motion.div
                   key={item}
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                 >
                   <Box 
                     onClick={() => scrollToSection(item.toLowerCase())}
                     sx={{
                       cursor: 'pointer',
                       color: isScrolled ? '#000' : '#fff',
                       fontSize: { md: '0.9rem', lg: '1rem' },
                       position: 'relative',
                       padding: '0.8rem 1rem',
                       transition: 'all 0.3s ease',
                       '&::after': {
                         content: '""',
                         position: 'absolute',
                         width: activeSection === item.toLowerCase() ? '100%' : '0%',
                         height: '2px',
                         bottom: 0,
                         left: 0,
                         background: 'linear-gradient(90deg, #007FFF, #00FF95)',
                         transition: 'width 0.3s ease'
                       },
                       '&:hover': {
                         '&::after': {
                           width: '100%'
                         }
                       }
                     }}
                   >
                     {item}
                   </Box>
                 </motion.div>
               ))}
             </Box>

             {/* Mobile Menu Button */}
             <IconButton
               onClick={() => setIsOpen(!isOpen)}
               sx={{ 
                 display: { xs: 'flex', md: 'none' },
                 color: isScrolled ? '#000' : '#fff'
               }}
             >
               <motion.div
                 animate={{ rotate: isOpen ? 180 : 0 }}
                 transition={{ duration: 0.3 }}
               >
                 {isOpen ? <CloseIcon /> : <MenuIcon />}
               </motion.div>
             </IconButton>
           </Toolbar>
         </Container>
       </AppBar>
     </motion.div>

     {/* Mobile Menu */}
     <AnimatePresence>
       {isOpen && (
         <motion.div
           initial="closed"
           animate="open"
           exit="closed"
           variants={menuVariants}
           style={{
             position: 'fixed',
             top: 0,
             right: 0,
             width: '100%',
             height: '100vh',
             background: 'rgba(0,0,0,0.95)',
             zIndex: 999,
             display: 'flex'
           }}
         >
           <Box
             sx={{
               width: '100%',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               gap: { xs: 2, sm: 3 },
               paddingTop: '80px'
             }}
           >
             {navItems.map((item, index) => (
               <motion.div
                 key={item}
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: index * 0.1 }}
                 style={{ 
                   width: '100%',
                   maxWidth: '400px',
                 }}
               >
                 <Box 
                   sx={{ 
                     color: '#fff',
                     fontSize: { xs: '1.2rem', sm: '1.5rem' },
                     cursor: 'pointer',
                     fontWeight: 500,
                     position: 'relative',
                     padding: '0.8rem 2rem',
                     width: '100%',
                     textAlign: 'center',
                     transition: 'all 0.3s ease',
                     '&::before': {
                       content: '""',
                       position: 'absolute',
                       top: 0,
                       left: 0,
                       width: activeSection === item.toLowerCase() ? '100%' : '0%',
                       height: '100%',
                       background: 'linear-gradient(90deg, rgba(0,127,255,0.1), rgba(0,255,149,0.1))',
                       transition: 'width 0.3s ease',
                       zIndex: -1,
                     },
                     '&::after': {
                       content: '""',
                       position: 'absolute',
                       width: activeSection === item.toLowerCase() ? '100%' : '0%',
                       height: '2px',
                       bottom: 0,
                       left: 0,
                       background: 'linear-gradient(90deg, #007FFF, #00FF95)',
                       transition: 'width 0.3s ease'
                     },
                     '&:hover': {
                       '&::before': {
                         width: '100%',
                       },
                       '&::after': {
                         width: '100%'
                       }
                     }
                   }}
                   onClick={() => scrollToSection(item.toLowerCase())}
                 >
                   {item}
                 </Box>
               </motion.div>
             ))}
           </Box>
         </motion.div>
       )}
     </AnimatePresence>
   </>
 )
}

export default Navbar