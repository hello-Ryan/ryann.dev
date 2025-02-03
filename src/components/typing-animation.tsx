"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"

interface TypingAnimationProps {
  text: string
  typingSpeed?: number
  delay?: number
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, typingSpeed = 50, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("")

  const typeText = useCallback(() => {
    let currentIndex = 0

    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
      }
    }, typingSpeed)

    return () => clearInterval(intervalId)
  }, [text, typingSpeed])

  useEffect(() => {
    const timeoutId = setTimeout(typeText, delay)
    return () => clearTimeout(timeoutId)
  }, [delay, typeText])

  return (
    <div className="font-mono text-2xl flex flex-row">
      {displayedText}
      {/* TODO: add blinking cursor */}
    </div>
  )
}

