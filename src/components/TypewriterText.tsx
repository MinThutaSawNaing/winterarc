'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
}

export default function TypewriterText({
  text,
  speed = 40,
  className = '',
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    let index = 0
    const reset = window.requestAnimationFrame(() => {
      setDisplayText('')
      setCursorVisible(true)
    })

    const interval = setInterval(() => {
      if (index < text.length) {
        index++
        setDisplayText(text.slice(0, index))
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => {
      window.cancelAnimationFrame(reset)
      clearInterval(interval)
    }
  }, [text, speed])

  useEffect(() => {
    const done = displayText.length === text.length
    if (!done) return

    const blink = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)
    return () => clearInterval(blink)
  }, [displayText, text])

  return (
    <>
      <span className={className} aria-label={text}>
        {displayText}
      </span>
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block h-[0.88em] w-[2px] translate-y-[0.12em] bg-current align-baseline transition-opacity duration-100 ${
          cursorVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  )
}
