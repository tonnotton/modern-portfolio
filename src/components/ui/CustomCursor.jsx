"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const positionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === "undefined") return

    const updatePosition = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY }
    }

    const updateCursorType = () => {
      const target = document.querySelectorAll("a, button, [role='button']")
      let isHovering = false

      target.forEach((element) => {
        const rect = element.getBoundingClientRect()
        if (
          positionRef.current.x >= rect.left &&
          positionRef.current.x <= rect.right &&
          positionRef.current.y >= rect.top &&
          positionRef.current.y <= rect.bottom
        ) {
          isHovering = true
        }
      })

      setIsPointer(isHovering)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousemove", updateCursorType)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousemove", updateCursorType)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (typeof window === "undefined") return null

  const { x, y } = positionRef.current

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full pointer-events-none mix-blend-difference z-50"
        animate={{
          x: x - 8,
          y: y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-blue-500 rounded-full pointer-events-none mix-blend-difference z-50"
        animate={{
          x: x - 16,
          y: y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  )
}

export default CustomCursor
