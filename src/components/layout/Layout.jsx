// components/layout/Layout.jsx
"use client"

import Navbar from './Navbar'
import ParticleBackground from '../ui/ParticleBackground'
import CustomCursor from '../ui/CustomCursor'

const Layout = ({ children }) => {
  return (
    <>
      <ParticleBackground />
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen relative">
        {children}
      </main>
    </>
  )
}

export default Layout