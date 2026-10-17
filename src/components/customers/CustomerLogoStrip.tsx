'use client'

import Image from 'next/image'
import { useCallback, useRef, type PointerEvent as ReactPointerEvent } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Reveal, StaggerItem, StaggerReveal } from '@/components/Reveal'
import type { Locale } from '@/lib/i18n'
import './customer-showcase.css'

const clients = [
  {
    name: 'My Dentist',
    src: '/images/clients/1777363222508040.png',
    width: 800,
    height: 400,
  },
  {
    name: 'Partner brand',
    src: '/images/clients/1777363339466601.png',
    width: 1500,
    height: 1500,
  },
  {
    name: 'Flex',
    src: '/images/clients/Flex.png',
    width: 225,
    height: 225,
  },
  {
    name: 'NCC',
    src: '/images/clients/NCC.jpg',
    width: 1024,
    height: 1024,
  },
  {
    name: 'Unity Fitness',
    src: '/images/clients/Unity.jpg',
    width: 1600,
    height: 1600,
  },
  {
    name: 'Leox Group',
    src: '/images/clients/leox-group.png',
    width: 341,
    height: 325,
  },
  {
    name: 'K&K Dental Care',
    src: '/images/clients/kk-dental-care.png',
    width: 442,
    height: 574,
  },
] as const

/** Pointer reach, in px, of the logo wall's magnetism. */
const PROXIMITY_RADIUS = 210
/** Peak 3D tilt, in degrees, reached at a tile's outer edge. */
const TILT_LIMIT = 7
/** Magnetism and hover sheen only run for precise pointers that can hover. */
const FINE_POINTER = '(hover: hover) and (pointer: fine)'
const TILE_SELECTOR = '.customer-logo-strip__tile'

export default function CustomerLogoStrip({ locale = 'en' }: { locale?: Locale }) {
  const wallRef = useRef<HTMLDivElement>(null)
  const finePointer = useRef<boolean | null>(null)
  const reduceMotion = useReducedMotion()

  /**
   * Cursor magnetism. Every tile reads its own distance and angle to the
   * pointer, then publishes the result as CSS custom properties that the
   * stylesheet turns into lift, scale, spotlight and tilt.
   */
  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const wall = wallRef.current
      if (!wall || reduceMotion) return

      if (finePointer.current === null) {
        finePointer.current = window.matchMedia(FINE_POINTER).matches
      }
      if (!finePointer.current) return

      const wallRect = wall.getBoundingClientRect()
      const pointerX = event.clientX - wallRect.left
      const pointerY = event.clientY - wallRect.top
      wall.classList.add('is-pointer-active')

      wall.querySelectorAll<HTMLElement>(TILE_SELECTOR).forEach((tile) => {
        const tileRect = tile.getBoundingClientRect()
        const tileLeft = tileRect.left - wallRect.left
        const tileTop = tileRect.top - wallRect.top
        const offsetX = pointerX - tileLeft - tileRect.width / 2
        const offsetY = pointerY - tileTop - tileRect.height / 2
        const proximity = Math.max(
          0,
          1 - Math.hypot(offsetX, offsetY) / PROXIMITY_RADIUS,
        )
        const tilt = TILT_LIMIT * proximity * 2

        tile.style.setProperty('--proximity', proximity.toFixed(3))
        tile.style.setProperty('--spot-x', `${(pointerX - tileLeft).toFixed(1)}px`)
        tile.style.setProperty('--spot-y', `${(pointerY - tileTop).toFixed(1)}px`)
        tile.style.setProperty('--tilt-x', `${((-offsetY / tileRect.height) * tilt).toFixed(2)}deg`)
        tile.style.setProperty('--tilt-y', `${((offsetX / tileRect.width) * tilt).toFixed(2)}deg`)
      })
    },
    [reduceMotion],
  )

  /** Hands every tile back to its resting state once the pointer leaves. */
  const releaseWall = useCallback(() => {
    const wall = wallRef.current
    if (!wall) return

    wall.classList.remove('is-pointer-active')
    wall.querySelectorAll<HTMLElement>(TILE_SELECTOR).forEach((tile) => {
      tile.style.setProperty('--proximity', '0')
      tile.style.setProperty('--tilt-x', '0deg')
      tile.style.setProperty('--tilt-y', '0deg')
    })
  }, [])

  return (
    <div
      ref={wallRef}
      className="customer-logo-strip"
      onPointerMove={handlePointerMove}
      onPointerLeave={releaseWall}
      onPointerCancel={releaseWall}
    >
      <Reveal>
        <p className="customer-logo-strip__label">{locale === 'my' ? 'ကျွန်ုပ်တို့ကို ယုံကြည်သည့် လုပ်ငန်းများ' : 'Trusted by'}</p>
      </Reveal>

      <StaggerReveal
        className="customer-logo-strip__grid"
        stagger={0.06}
        delayChildren={0.05}
      >
        {clients.map((client, index) => (
          <StaggerItem key={client.src}>
            <div
              className="customer-logo-strip__item customer-logo-strip__tile panel-card"
              style={{ ['--tile-order' as string]: index }}
            >
              <Image
                src={client.src}
                alt={locale === 'my' ? `${client.name === 'Partner brand' ? 'မိတ်ဖက်အမှတ်တံဆိပ်' : client.name} လိုဂို` : `${client.name} logo`}
                width={client.width}
                height={client.height}
                className="customer-logo-strip__image"
                sizes="(max-width: 640px) 48vw, (max-width: 1280px) 25vw, 152px"
              />
            </div>
          </StaggerItem>
        ))}

        <StaggerItem>
          <div
            className="customer-logo-strip__more customer-logo-strip__tile panel-card-dark"
            style={{ ['--tile-order' as string]: clients.length }}
          >
            <span className="customer-logo-strip__more-count">50+</span>
            <span className="customer-logo-strip__more-label">{locale === 'my' ? 'အခြားဖောက်သည်များ' : 'more clients'}</span>
          </div>
        </StaggerItem>
      </StaggerReveal>
    </div>
  )
}
