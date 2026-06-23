'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import './customer-showcase.css'

const defaultCustomerSlides: Slide[] = [
  {
    id: 'my-dentist',
    src: '/images/customers/my-dentist-partnership.png',
    alt: 'Winter Arc Myanmar partnership with My Dentist Premium Dental Center',
    title: 'My Dentist',
    caption: 'Premium Dental Center',
  },
  {
    id: 'client-success',
    src: '/images/customers/client-handshake.png',
    alt: 'Client partnership handshake',
    title: 'Client Success',
    caption: 'Trusted delivery partnership',
  },
  {
    id: 'unity-fitness',
    src: '/images/customers/unity-fitness-certificate.png',
    alt: 'Winter Arc Myanmar certificate presentation with Unity Fitness',
    title: 'Unity Fitness',
    caption: 'Certificate of delivery',
  },
]

export interface Slide {
  id: string | number
  src: string
  alt?: string
  title?: string
  caption?: string
  href?: string
}

interface ThreeDImageCarouselProps {
  slides?: Slide[]
  itemCount?: 3 | 5
  autoplay?: boolean
  delay?: number
  pauseOnHover?: boolean
  className?: string
  style?: React.CSSProperties
  onSlideChange?: (index: number) => void
}

export function ThreeDImageCarousel({
  slides = defaultCustomerSlides,
  itemCount = 5,
  autoplay = false,
  delay = 3,
  pauseOnHover = true,
  className = '',
  style,
  onSlideChange,
}: ThreeDImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const safeSlides = slides ?? defaultCustomerSlides
  const totalSlides = safeSlides.length
  const visibleCount = Math.min(itemCount, Math.max(totalSlides, 1))

  const goToNext = useCallback(() => {
    if (totalSlides === 0) return
    setActiveIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToSlide = useCallback(
    (index: number) => {
      setActiveIndex(((index % totalSlides) + totalSlides) % totalSlides)
    },
    [totalSlides]
  )

  useEffect(() => {
    if (autoplay && !isPaused) {
      autoplayTimerRef.current = setTimeout(goToNext, delay * 1000)
    }
    return () => {
      if (autoplayTimerRef.current) {
        clearTimeout(autoplayTimerRef.current)
      }
    }
  }, [autoplay, isPaused, goToNext, delay, activeIndex])

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true)
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false)
  }

  const getSlideClasses = (index: number, activeIndex: number, total: number, visibleCount: 3 | 5): string => {
    const diff = index - activeIndex
    if (diff === 0) return 'now'
    if (diff === 1 || diff === -total + 1) return 'next'
    if (visibleCount === 5 && (diff === 2 || diff === -total + 2)) return 'next2'
    if (diff === -1 || diff === total - 1) return 'prev'
    if (visibleCount === 5 && (diff === -2 || diff === total - 2)) return 'prev2'
    return ''
  }

  useEffect(() => {
    onSlideChange?.(activeIndex)
  }, [activeIndex, onSlideChange])

  if (totalSlides === 0) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className={`cascade-slider_container ${className}`}
      style={{
        backgroundColor: '#0f172a',
        borderRadius: '1rem',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.28)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '2rem 1rem 1.5rem',
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Customer partner gallery"
      tabIndex={0}
    >
      <div className="cascade-slider_slides">
        {safeSlides.map((slide, index) => {
          const slideClass = getSlideClasses(index, activeIndex, totalSlides, visibleCount as 3 | 5)
          if (!slideClass) return null

          const isCenter = slideClass === 'now'

          return (
            <div
              key={slide.id}
              className={`cascade-slider_item ${slideClass}`}
              data-slide-number={index}
            >
              <div className="cascade-slider_image-wrapper">
                {slide.href ? (
                  <a href={slide.href}>
                    <Image
                      src={slide.src}
                      alt={slide.alt || `Slide ${index + 1}`}
                      fill
                      className="cascade-slider_image"
                      priority={isCenter}
                      loading={isCenter ? 'eager' : 'lazy'}
                      sizes="(max-width: 480px) 290px, (max-width: 767px) 300px, 340px"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.onerror = null
                        target.src = `https://placehold.co/350x200/4F46E5/ffffff?text=Slide%20${index + 1}`
                      }}
                    />
                  </a>
                ) : (
                  <Image
                    src={slide.src}
                    alt={slide.alt || `Slide ${index + 1}`}
                    fill
                    className="cascade-slider_image"
                    priority={isCenter}
                    loading={isCenter ? 'eager' : 'lazy'}
                    sizes="(max-width: 480px) 200px, (max-width: 767px) 240px, 340px"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      target.onerror = null
                      target.src = `https://placehold.co/350x200/4F46E5/ffffff?text=Slide%20${index + 1}`
                    }}
                  />
                )}
              </div>
              {(slide.title || slide.caption) && isCenter && (
                <div className="cascade-slider_info">
                  {slide.title && <h3 className="cascade-slider_title">{slide.title}</h3>}
                  {slide.caption && <p className="cascade-slider_caption">{slide.caption}</p>}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {totalSlides > 1 && (
        <>
          <button
            className="cascade-slider_arrow cascade-slider_arrow-left"
            onClick={(e) => { e.stopPropagation(); goToPrev() }}
            aria-label="Previous slide"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="cascade-slider_arrow cascade-slider_arrow-right"
            onClick={(e) => { e.stopPropagation(); goToNext() }}
            aria-label="Next slide"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      <div className="cascade-slider_dots" role="tablist">
        {safeSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={activeIndex === idx}
            className={`cascade-slider_dot ${
              activeIndex === idx ? 'cascade-slider_dot--active' : ''
            }`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

type CustomerHoverGalleryProps = Omit<ThreeDImageCarouselProps, 'slides'> & {
  slides?: Slide[]
}

export default function CustomerHoverGallery({
  slides,
  itemCount = 3,
  className = '',
  style,
  ...rest
}: CustomerHoverGalleryProps) {
  if ((slides ?? defaultCustomerSlides).length === 0) {
    return null
  }

  return (
    <ThreeDImageCarousel
      slides={slides ?? defaultCustomerSlides}
      itemCount={itemCount}
      className={className}
      style={style}
      {...rest}
    />
  )
}