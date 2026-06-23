'use client'

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import './customer-showcase.css'

const customerPhotos = [
  {
    src: '/images/customers/my-dentist-partnership.png',
    alt: 'Winter Arc Myanmar partnership with My Dentist Premium Dental Center',
    title: 'My Dentist',
    caption: 'Premium Dental Center',
  },
  {
    src: '/images/customers/client-handshake.png',
    alt: 'Client partnership handshake',
    title: 'Client Success',
    caption: 'Trusted delivery partnership',
  },
  {
    src: '/images/customers/unity-fitness-certificate.png',
    alt: 'Winter Arc Myanmar certificate presentation with Unity Fitness',
    title: 'Unity Fitness',
    caption: 'Certificate of delivery',
  },
] as const

interface ThreeDHoverGalleryProps {
  images?: string[]
  itemWidth?: number
  itemHeight?: number
  gap?: number
  perspective?: number
  hoverScale?: number
  transitionDuration?: number
  backgroundColor?: string
  grayscaleStrength?: number
  brightnessLevel?: number
  activeWidth?: number
  rotationAngle?: number
  zDepth?: number
  enableKeyboardNavigation?: boolean
  autoPlay?: boolean
  autoPlayDelay?: number
  className?: string
  style?: React.CSSProperties
  onImageClick?: (index: number, image: string) => void
  onImageHover?: (index: number, image: string) => void
  onImageFocus?: (index: number, image: string) => void
}

export default function ThreeDHoverGallery({
  images,
  itemWidth = 8,
  itemHeight = 16,
  gap = 0.8,
  perspective = 35,
  hoverScale = 10,
  transitionDuration = 1.25,
  backgroundColor = '#0f172a',
  grayscaleStrength = 0.55,
  brightnessLevel = 0.72,
  activeWidth = 40,
  rotationAngle = 35,
  zDepth = 8.5,
  enableKeyboardNavigation = true,
  autoPlay = false,
  autoPlayDelay = 3000,
  className = '',
  style,
  onImageClick,
  onImageHover,
  onImageFocus,
}: ThreeDHoverGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const galleryImages = images || customerPhotos.map((p) => p.src)
  const galleryData = images
    ? galleryImages.map((src, i) => ({
        src,
        alt: `Gallery image ${i + 1}`,
        title: `Image ${i + 1}`,
        caption: '',
      }))
    : customerPhotos

  // Responsive breakpoints
  const isMobile = useMemo(() => containerWidth < 640, [containerWidth])
  const isTablet = useMemo(
    () => containerWidth >= 640 && containerWidth < 1024,
    [containerWidth]
  )

  // Responsive overrides
  const responsiveItemWidth = isMobile ? 14 : isTablet ? 10 : itemWidth
  const responsiveActiveWidth = isMobile ? 55 : isTablet ? 45 : activeWidth
  const responsiveGap = isMobile ? 0.3 : isTablet ? 0.6 : gap
  const responsiveItemHeight = isMobile ? 28 : isTablet ? 20 : itemHeight
  const responsivePerspective = isMobile ? 15 : isTablet ? 28 : perspective
  const responsiveHoverScale = isMobile ? 5 : isTablet ? 8 : hoverScale
  const responsiveRotationAngle = isMobile ? 15 : isTablet ? 25 : rotationAngle
  const responsiveZDepth = isMobile ? 3 : isTablet ? 6 : zDepth

  // Mobile-optimised transition – super light, no spring
  const getTransition = useCallback(
    (prop?: string) => {
      if (isMobile) {
        if (prop === 'filter') {
          return { duration: 0.2, ease: 'easeOut' }
        }
        return { duration: 0.35, ease: 'easeOut' }
      }
      return {
        type: 'spring',
        stiffness: 80,
        damping: 22,
        duration: transitionDuration,
      }
    },
    [isMobile, transitionDuration]
  )

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  useEffect(() => {
    if (autoPlay && galleryImages.length > 0) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          if (prev === null) return 0
          return (prev + 1) % galleryImages.length
        })
      }, autoPlayDelay)
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [autoPlay, autoPlayDelay, galleryImages.length])

  useEffect(() => {
    if (!enableKeyboardNavigation) return

    const container = containerRef.current
    if (!container) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!container.contains(document.activeElement)) return

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        setActiveIndex((prev) => {
          if (prev === null) return 0
          return (prev + 1) % galleryImages.length
        })
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setActiveIndex((prev) => {
          if (prev === null) return galleryImages.length - 1
          return (prev - 1 + galleryImages.length) % galleryImages.length
        })
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setActiveIndex(null)
        setHoveredIndex(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [enableKeyboardNavigation, galleryImages.length])

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  const vw = containerWidth / 100
  const itemWidthPx = responsiveItemWidth * vw
  const activeWidthPx = responsiveActiveWidth * vw
  const gapPx = responsiveGap * 16
  const totalItems = galleryImages.length

  const getItemPosition = useCallback(
    (index: number) => {
      const isHovered = hoveredIndex === index
      const isActive = activeIndex === index
      const shouldExpand = isHovered || isActive
      const isLeft = activeIndex !== null && index < activeIndex
      const isRight = activeIndex !== null && index > activeIndex

      let x = 0
      let z = 0
      let rotation = 0
      let scale = 1
      let width = itemWidthPx
      let grayscale = grayscaleStrength
      let brightness = brightnessLevel
      let opacity = 1

      const centerOffset = (totalItems - 1) / 2
      const position = index - centerOffset

      if (shouldExpand) {
        width = activeWidthPx
        scale = 1 + responsiveHoverScale / 100
        grayscale = 0
        brightness = 1
        z = 20

        x = position * (itemWidthPx + gapPx)

        const widthDiff = (activeWidthPx - itemWidthPx) / 2

        if (isLeft) {
          x -= widthDiff
        } else if (isRight) {
          x += widthDiff
        }

        if (isMobile) {
          const halfViewport = containerWidth / 2
          const halfWidth = activeWidthPx / 2
          const safetyMargin = 10
          const maxX = halfViewport - halfWidth - safetyMargin
          const minX = -halfViewport + halfWidth + safetyMargin
          x = Math.max(minX, Math.min(maxX, x))
        }
      } else if (activeIndex !== null) {
        grayscale = grayscaleStrength
        brightness = brightnessLevel
        opacity = 0.5

        if (isLeft) {
          const offset = (activeIndex - index) * (itemWidthPx + gapPx)
          const rotAmount = Math.min(responsiveRotationAngle, offset * 0.5)
          x =
            position * (itemWidthPx + gapPx) -
            offset -
            (activeWidthPx - itemWidthPx) / 2
          z = (-responsiveZDepth * (activeIndex - index)) / 2
          rotation = -rotAmount
        } else if (isRight) {
          const offset = (index - activeIndex) * (itemWidthPx + gapPx)
          const rotAmount = Math.min(responsiveRotationAngle, offset * 0.5)
          x =
            position * (itemWidthPx + gapPx) +
            offset +
            (activeWidthPx - itemWidthPx) / 2
          z = (-responsiveZDepth * (index - activeIndex)) / 2
          rotation = rotAmount
        } else {
          x = position * (itemWidthPx + gapPx)
        }
      } else {
        x = position * (itemWidthPx + gapPx)
        width = itemWidthPx
        scale = 1
      }

      return { x, z, rotation, scale, width, grayscale, brightness, opacity }
    },
    [
      activeIndex,
      hoveredIndex,
      itemWidthPx,
      activeWidthPx,
      gapPx,
      totalItems,
      responsiveHoverScale,
      responsiveRotationAngle,
      responsiveZDepth,
      grayscaleStrength,
      brightnessLevel,
      isMobile,
      containerWidth,
    ]
  )

  const getStackIndex = useCallback(
    (index: number) => {
      const isSelected = hoveredIndex === index || activeIndex === index
      if (isSelected) return 30
      if (hoveredIndex === null && activeIndex === null && index === Math.floor(totalItems / 2)) {
        return 20
      }
      return 10 + index
    },
    [activeIndex, hoveredIndex, totalItems]
  )

  const handleMouseEnter = useCallback(
    (index: number) => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
        hoverTimeoutRef.current = null
      }
      setHoveredIndex(index)
      onImageHover?.(index, galleryImages[index])
    },
    [galleryImages, onImageHover]
  )

  const handleMouseLeave = useCallback((index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null)
      hoverTimeoutRef.current = null
    }, 50)
  }, [])

  const handleTrackMouseLeave = useCallback(
    (event: React.MouseEvent) => {
      const related = event.relatedTarget as Node | null
      if (containerRef.current?.contains(related)) return

      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
        hoverTimeoutRef.current = null
      }

      setHoveredIndex(null)

      if (!autoPlay) {
        setActiveIndex(null)
      }
    },
    [autoPlay]
  )

  const handleClick = useCallback(
    (index: number) => {
      onImageClick?.(index, galleryImages[index])
      if (activeIndex === index) {
        setActiveIndex(null)
      } else {
        setActiveIndex(index)
      }
    },
    [activeIndex, galleryImages, onImageClick]
  )

  const selectedIndex = hoveredIndex ?? activeIndex

  return (
    <div
      ref={containerRef}
      className={`three-d-hover-gallery ${className}`}
      data-snow-surface="dark"
      style={{
        backgroundColor,
        perspective: `${responsivePerspective}vw`,
        ...style,
      }}
      aria-label="Customer partner gallery"
    >
      <p className="three-d-hover-gallery__hint">Hover or tap a partner to explore</p>
      <div
        className="three-d-hover-gallery__track"
        onMouseLeave={handleTrackMouseLeave}
        style={{
          height: `${responsiveItemHeight}vw`,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
          padding: isMobile ? '0 2.5rem' : '0',
        }}
      >
        {galleryData.map((item, index) => {
          const pos = getItemPosition(index)
          const isActive = activeIndex === index
          const shouldExpand = hoveredIndex === index || isActive
          const stackIndex = getStackIndex(index)
          const transition = getTransition()
          const filterTransition = getTransition('filter')

          return (
            <motion.div
              key={item.src}
              className="three-d-hover-gallery__item"
              style={{
                position: 'absolute',
                height: '100%',
                width: pos.width,
                transformStyle: 'preserve-3d',
                cursor: 'pointer',
                zIndex: stackIndex,
                willChange: 'transform, width, filter',
                contain: 'layout style paint',
              }}
              animate={{
                x: pos.x,
                z: pos.z,
                rotateY: pos.rotation,
                scale: pos.scale,
                width: pos.width,
                filter: `grayscale(${pos.grayscale}) brightness(${pos.brightness})`,
                opacity: pos.opacity,
              }}
              transition={{
                x: transition,
                z: transition,
                rotateY: transition,
                scale: transition,
                width: transition,
                filter: filterTransition,
                opacity: isMobile ? { duration: 0.2 } : transition,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(index)}
              onFocus={() => {
                setHoveredIndex(index)
                onImageFocus?.(index, item.src)
              }}
              onBlur={(e) => {
                const currentTarget = e.currentTarget
                const relatedTarget = e.relatedTarget as Node | null
                // If focus moves to a child of the same item, don't clear
                if (relatedTarget && currentTarget.contains(relatedTarget)) {
                  return
                }
                setHoveredIndex(null)
                if (!autoPlay) {
                  setActiveIndex(null)
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              aria-label={`${item.title}${item.caption ? `, ${item.caption}` : ''}`}
            >
              <div
                className={`three-d-hover-gallery__card ${
                  shouldExpand ? 'three-d-hover-gallery__card--expanded' : ''
                }`}
              >
                <div className="three-d-hover-gallery__image-wrapper">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="three-d-hover-gallery__image"
                    sizes={`${pos.width}px`}
                    priority={index < 3}
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                </div>
                {(item.title || item.caption) && (
                  <div className="three-d-hover-gallery__info">
                    {item.title && (
                      <h3 className="three-d-hover-gallery__title">{item.title}</h3>
                    )}
                    {item.caption && (
                      <p className="three-d-hover-gallery__caption">{item.caption}</p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {galleryImages.length > 1 && (
        <div className="three-d-hover-gallery__dots" role="tablist" aria-label="Partner slides">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={selectedIndex === index}
              className={`three-d-hover-gallery__dot ${
                selectedIndex === index ? 'three-d-hover-gallery__dot--active' : ''
              }`}
              onClick={() => handleClick(index)}
              aria-label={`Show ${galleryData[index]?.title ?? `partner ${index + 1}`}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}