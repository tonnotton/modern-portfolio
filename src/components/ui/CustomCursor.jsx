"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isTextHovered, setIsTextHovered] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const target = document.querySelectorAll('a, button, [role="button"]')
      const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6')
      let isHovering = false
      let isHoveringText = false

      target.forEach(element => {
        const rect = element.getBoundingClientRect()
        if (
          position.x >= rect.left &&
          position.x <= rect.right &&
          position.y >= rect.top &&
          position.y <= rect.bottom
        ) {
          isHovering = true
        }
      })

      textElements.forEach(element => {
        const rect = element.getBoundingClientRect()
        if (
          position.x >= rect.left &&
          position.x <= rect.right &&
          position.y >= rect.top &&
          position.y <= rect.bottom
        ) {
          isHoveringText = true
        }
      })

      setIsPointer(isHovering)
      setIsTextHovered(isHoveringText)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    if (isMounted) {
      window.addEventListener('mousemove', updatePosition)
      window.addEventListener('mouseover', updateCursorType)
      window.addEventListener('mousedown', handleMouseDown)
      window.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('mouseenter', handleMouseEnter)
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (isMounted) {
        window.removeEventListener('mousemove', updatePosition)
        window.removeEventListener('mouseover', updateCursorType)
        window.removeEventListener('mousedown', handleMouseDown)
        window.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('mouseenter', handleMouseEnter)
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [position, isMounted])

  if (!isMounted) return null

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none mix-blend-difference z-50"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isClicking ? 0.5 : isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          opacity: isVisible ? 1 : 0,
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference z-50 border-2
          ${isTextHovered ? 'w-12 h-12 border-purple-500' : 'w-8 h-8 border-blue-500'}`}
        animate={{
          x: position.x - (isTextHovered ? 24 : 16),
          y: position.y - (isTextHovered ? 24 : 16),
          scale: isClicking ? 0.8 : isPointer ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Trail Effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-2 h-2 bg-blue-500/30 rounded-full pointer-events-none mix-blend-difference z-40"
          animate={{
            x: position.x - 4,
            y: position.y - 4,
            scale: isPointer ? 1.2 : 0.8,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5,
            delay: i * 0.05,
          }}
          style={{
            opacity: isVisible ? 0.3 - (i * 0.1) : 0,
          }}
        />
      ))}
    </>
  )
}

export default CustomCursor