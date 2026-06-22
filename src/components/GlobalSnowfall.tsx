'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import './global-snowfall.css'

interface SnowParticleConfig {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  opacity: number
  sway: number
  rotate: number
  pattern: 1 | 2
  layer: 0 | 1 | 2
}

function seed(i: number, salt: number): number {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453
  return x - Math.floor(x)
}

function buildParticles(count: number): SnowParticleConfig[] {
  return Array.from({ length: count }, (_, i) => {
    const r = seed(i, 1)
    const r2 = seed(i, 2)
    const r3 = seed(i, 3)
    const r4 = seed(i, 4)
    const r5 = seed(i, 5)
    const depth = 0.25 + r * 0.75
    const layer = (Math.floor(r5 * 3) as 0 | 1 | 2) ?? 0

    return {
      id: i,
      left: r * 100,
      size: 14 + r2 * 26 + layer * 4,
      delay: r2 * 14,
      duration: 7 + (1 - depth) * 8 + r4 * 6,
      opacity: 0.28 + depth * 0.42,
      sway: -48 + r3 * 96,
      rotate: 180 + r4 * 720,
      pattern: r4 > 0.5 ? 2 : 1,
      layer,
    }
  })
}

function particleCountForWidth(width: number): number {
  if (width < 640) return 48
  if (width < 1024) return 72
  return 96
}

function isDarkSurfaceAt(x: number, y: number): boolean {
  const elements = document.elementsFromPoint(x, y)
  const target = elements.find((el) => !el.closest('.global-snowfall'))
  return !!target?.closest('[data-snow-surface="dark"]')
}

function SnowParticle({ config }: { config: SnowParticleConfig }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [overDark, setOverDark] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const syncTheme = () => {
      const rect = node.getBoundingClientRect()
      const x = Math.min(Math.max(rect.left + rect.width / 2, 0), window.innerWidth - 1)
      const y = Math.min(Math.max(rect.top + rect.height / 2, 0), window.innerHeight - 1)
      setOverDark(isDarkSurfaceAt(x, y))
    }

    syncTheme()
    const interval = window.setInterval(syncTheme, 180)
    window.addEventListener('scroll', syncTheme, { passive: true })
    window.addEventListener('resize', syncTheme)

    return () => {
      window.clearInterval(interval)
      window.removeEventListener('scroll', syncTheme)
      window.removeEventListener('resize', syncTheme)
    }
  }, [])

  const layerOpacity = config.layer === 0 ? 0.85 : config.layer === 1 ? 1 : 1.1

  return (
    <span
      ref={ref}
      className={`global-snowfall__flake global-snowfall__flake--pattern-${
        config.pattern === 2 ? 'b' : 'a'
      } ${overDark ? 'is-over-dark' : ''}`}
      style={{
        left: `${config.left}%`,
        width: config.size,
        height: config.size,
        animationDelay: `${config.delay}s`,
        animationDuration: `${config.duration}s`,
        opacity: layerOpacity,
        ['--flake-opacity' as string]: String(config.opacity),
        ['--flake-sway' as string]: `${config.sway}px`,
        ['--flake-rotate' as string]: `${config.rotate}deg`,
      }}
      aria-hidden
    >
      <img
        src="/winterarcicon.svg"
        alt=""
        className="global-snowfall__icon global-snowfall__icon--light"
        draggable={false}
      />
      <img
        src="/winterarcicon-dark.svg"
        alt=""
        className="global-snowfall__icon global-snowfall__icon--dark"
        draggable={false}
      />
    </span>
  )
}

export default function GlobalSnowfall() {
  const reduceMotion = useReducedMotion()
  const [count, setCount] = useState(72)

  useEffect(() => {
    const updateCount = () => {
      setCount(particleCountForWidth(window.innerWidth))
    }

    updateCount()
    window.addEventListener('resize', updateCount)
    return () => window.removeEventListener('resize', updateCount)
  }, [])

  const particles = useMemo(() => buildParticles(count), [count])

  if (reduceMotion) return null

  return (
    <div className="global-snowfall" aria-hidden>
      {particles.map((particle) => (
        <SnowParticle key={particle.id} config={particle} />
      ))}
    </div>
  )
}
