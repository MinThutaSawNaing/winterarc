'use client'

import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'
import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'
import './customer-showcase.css'

type Rgb = [number, number, number]

function hexToRgbNormalized(hex: string): Rgb {
  const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex

  if (cleanHex.length === 3) {
    return [
      parseInt(cleanHex[0] + cleanHex[0], 16) / 255,
      parseInt(cleanHex[1] + cleanHex[1], 16) / 255,
      parseInt(cleanHex[2] + cleanHex[2], 16) / 255,
    ]
  }

  if (cleanHex.length === 6) {
    return [
      parseInt(cleanHex.slice(0, 2), 16) / 255,
      parseInt(cleanHex.slice(2, 4), 16) / 255,
      parseInt(cleanHex.slice(4, 6), 16) / 255,
    ]
  }

  return [0, 0, 0]
}

interface SpinningGlobeProps {
  className?: string
  theta?: number
  scale?: number
  diffuse?: number
  mapSamples?: number
  mapBrightness?: number
  baseColor?: Rgb | string
  markerColor?: Rgb | string
  glowColor?: Rgb | string
}

const MYANMAR_MARKER = {
  location: [21.9162, 95.956] as [number, number],
  size: 0.06,
}

export default function SpinningGlobe({
  className,
  theta = 0.25,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 32000,
  mapBrightness = 8,
  baseColor = '#f8fafc',
  markerColor = '#2563eb',
  glowColor = '#60a5fa',
}: SpinningGlobeProps) {
  const reduceMotion = useReducedMotion()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const shellRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
  const phiRef = useRef(0)
  const thetaRef = useRef(theta)
  const isDragging = useRef(false)
  const lastPointerX = useRef(0)
  const lastPointerY = useRef(0)
  const frameRef = useRef(0)
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const shell = shellRef.current
    if (!canvas || !shell) return

    const resolvedBaseColor: Rgb =
      typeof baseColor === 'string' ? hexToRgbNormalized(baseColor) : baseColor
    const resolvedMarkerColor: Rgb =
      typeof markerColor === 'string' ? hexToRgbNormalized(markerColor) : markerColor
    const resolvedGlowColor: Rgb =
      typeof glowColor === 'string' ? hexToRgbNormalized(glowColor) : glowColor

    const autoRotateSpeed = reduceMotion ? 0 : 0.003

    const initGlobe = () => {
      globeRef.current?.destroy()
      globeRef.current = null

      const rect = shell.getBoundingClientRect()
      const size = Math.min(rect.width, rect.height, 360)
      if (size <= 0) return

      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      const internalSize = Math.floor(size * devicePixelRatio)

      canvas.width = internalSize
      canvas.height = internalSize

      globeRef.current = createGlobe(canvas, {
        devicePixelRatio,
        width: internalSize,
        height: internalSize,
        phi: phiRef.current,
        theta: thetaRef.current,
        dark: 0,
        scale,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor: resolvedBaseColor,
        markerColor: resolvedMarkerColor,
        glowColor: resolvedGlowColor,
        opacity: 1,
        offset: [0, 0],
        markers: [MYANMAR_MARKER],
        markerElevation: 0.02,
      })
    }

    const onPointerDown = (event: PointerEvent) => {
      isDragging.current = true
      lastPointerX.current = event.clientX
      lastPointerY.current = event.clientY
      canvas.style.cursor = 'grabbing'
      canvas.setPointerCapture(event.pointerId)
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!isDragging.current) return

      const deltaX = event.clientX - lastPointerX.current
      const deltaY = event.clientY - lastPointerY.current
      const rotationSpeed = 0.005

      phiRef.current += deltaX * rotationSpeed
      thetaRef.current = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, thetaRef.current - deltaY * rotationSpeed),
      )

      lastPointerX.current = event.clientX
      lastPointerY.current = event.clientY
    }

    const onPointerUp = (event: PointerEvent) => {
      isDragging.current = false
      canvas.style.cursor = 'grab'
      if (canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId)
      }
    }

    const animate = () => {
      if (!isDragging.current) {
        phiRef.current += autoRotateSpeed
      }

      globeRef.current?.update({
        phi: phiRef.current,
        theta: thetaRef.current,
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    const scheduleInit = () => {
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current)
      }
      resizeTimerRef.current = setTimeout(initGlobe, 80)
    }

    initGlobe()
    frameRef.current = requestAnimationFrame(animate)

    const resizeObserver = new ResizeObserver(scheduleInit)
    resizeObserver.observe(shell)

    canvas.addEventListener('pointerdown', onPointerDown)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerup', onPointerUp)
    canvas.addEventListener('pointercancel', onPointerUp)

    return () => {
      cancelAnimationFrame(frameRef.current)
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current)
      }
      resizeObserver.disconnect()
      canvas.removeEventListener('pointerdown', onPointerDown)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerup', onPointerUp)
      canvas.removeEventListener('pointercancel', onPointerUp)
      globeRef.current?.destroy()
      globeRef.current = null
    }
  }, [
    baseColor,
    diffuse,
    glowColor,
    mapBrightness,
    mapSamples,
    markerColor,
    reduceMotion,
    scale,
    theta,
  ])

  return (
    <div
      className={cn('customer-globe-shell', className)}
      role="group"
      aria-label="Interactive globe showing Winter Arc Myanmar global reach"
    >
      <p className="customer-globe__hint">Drag to explore</p>

      <div
        ref={shellRef}
        className="customer-globe-canvas-wrap"
      >
        <canvas
          ref={canvasRef}
          className="customer-globe__canvas"
          aria-label="Rotating globe with Myanmar highlighted"
        />
      </div>

      <div className="customer-globe__info">
        <p className="customer-globe__eyebrow">Global Network</p>
        <p className="customer-globe__title">
          Myanmar-based teams serving partners worldwide
        </p>
      </div>
    </div>
  )
}
