"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, Typography, Box, Grid } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import WebIcon from '@mui/icons-material/Web'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import DataObjectIcon from '@mui/icons-material/DataObject'
import BuildIcon from '@mui/icons-material/Build'
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined'
import ApiIcon from '@mui/icons-material/Api'
import TerminalIcon from '@mui/icons-material/Terminal'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'
import BugReportIcon from '@mui/icons-material/BugReport'
import CloudIcon from '@mui/icons-material/Cloud'

const Skills = () => {
 const skillCategories = [
   {
     category: "Frontend",
     icon: <WebIcon fontSize="large" className="text-blue-500" />,
     skills: [
       { 
         name: "React", 
         description: "Component architecture, Hooks, Context API",
         icon: <CodeIcon className="text-blue-400" />
       },
       { 
         name: "Next.js", 
         description: "Server-side rendering, API routes, Dynamic routing",
         icon: <IntegrationInstructionsIcon className="text-gray-200" />
       },
       { 
         name: "CSS Frameworks", 
         description: "Tailwind CSS, Material UI, Styled Components",
         icon: <WebIcon className="text-sky-400" />
       },
       { 
         name: "TypeScript", 
         description: "Type safety, Interfaces, Advanced types",
         icon: <DataObjectIcon className="text-blue-400" />
       },
     ]
   },
   {
     category: "Backend",
     icon: <StorageIcon fontSize="large" className="text-green-500" />,
     skills: [
       { 
         name: "Node.js", 
         description: "Express, RESTful APIs, Authentication",
         icon: <TerminalIcon className="text-green-400" />
       },
       { 
         name: "Databases", 
         description: "MongoDB, PostgreSQL, SQL queries",
         icon: <StorageOutlinedIcon className="text-orange-400" />
       },
       { 
         name: "Express.js", 
         description: "REST principles, Middleware, Routing",
         icon: <ApiIcon className="text-gray-300" />
       },
       { 
         name: "Database Management", 
         description: "Data modeling, Queries, Optimization",
         icon: <StorageIcon className="text-blue-400" />
       },
     ]
   },
   {
     category: "Development Tools",
     icon: <BuildIcon fontSize="large" className="text-purple-500" />,
     skills: [
       { 
         name: "Version Control", 
         description: "Git, GitHub, Collaborative development",
         icon: <DeveloperModeIcon className="text-orange-500" />
       },
       { 
         name: "Testing", 
         description: "Jest, React Testing Library, API testing",
         icon: <BugReportIcon className="text-green-400" />
       },
       { 
         name: "Cloud Services", 
         description: "AWS, Deployment, Server management",
         icon: <CloudIcon className="text-blue-400" />
       },
       { 
         name: "Development Tools", 
         description: "VS Code, Chrome DevTools, Postman",
         icon: <BuildIcon className="text-purple-400" />
       },
     ]
   }
 ]

 return (
   <motion.section
     id="skills"
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 0.8 }}
     className="h-screen flex items-center relative"
   >
     <Container maxWidth="lg">
       <motion.div
         initial={{ y: 50, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.5 }}
         className="text-center mb-8"
       >
         <Typography 
           variant="h6" 
           className="text-blue-500 font-medium mb-4"
         >
           Technical Skills
         </Typography>
         <Typography 
           variant="h3" 
           className="text-white font-bold mb-6"
         >
           Technologies & Tools
         </Typography>
       </motion.div>

       <Box 
         sx={{ 
           height: 'calc(100vh - 250px)',
           overflowY: 'auto',
           overflowX: 'hidden',
           pr: 2,
           pb: 4,
           '&::-webkit-scrollbar': {
             width: '8px',
           },
           '&::-webkit-scrollbar-track': {
             background: 'rgba(255, 255, 255, 0.05)',
             borderRadius: '10px',
           },
           '&::-webkit-scrollbar-thumb': {
             background: 'rgba(255, 255, 255, 0.1)',
             borderRadius: '10px',
             '&:hover': {
               background: 'rgba(255, 255, 255, 0.2)',
             },
           },
         }}
       >
         <Grid container spacing={4}>
           {skillCategories.map((category, categoryIndex) => (
             <Grid item xs={12} key={category.category}>
               <motion.div
                 initial={{ x: -50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
               >
                 <div className="flex items-center gap-3 mb-4">
                   {category.icon}
                   <Typography 
                     variant="h5" 
                     className="text-white font-semibold"
                   >
                     {category.category}
                   </Typography>
                 </div>
                 <div className="overflow-x-auto">
                   <div className="inline-flex gap-3" style={{ minWidth: '100%' }}>
                     {category.skills.map((skill, skillIndex) => (
                       <div key={skill.name} className="w-[300px] sm:w-[calc(50%-8px)]">
                         <Box 
                           className="p-6 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all h-full"
                           sx={{ borderLeft: '3px solid #3b82f6' }}
                         >
                           <div className="flex items-center gap-3 mb-2">
                             {skill.icon}
                             <Typography className="text-blue-500 font-medium">
                               {skill.name}
                             </Typography>
                           </div>
                           <Typography 
                             className="text-gray-400"
                             variant="body2"
                           >
                             {skill.description}
                           </Typography>
                         </Box>
                       </div>
                     ))}
                   </div>
                 </div>
               </motion.div>
             </Grid>
           ))}
         </Grid>
       </Box>
     </Container>
   </motion.section>
 )
}

export default Skills