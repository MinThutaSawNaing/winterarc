'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { localizedPath, type Locale } from '@/lib/i18n'
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
  {
    id: 'leox-group',
    src: '/images/customers/leox-group-partnership.jpg',
    alt: 'Winter Arc Myanmar partnership handshake at the Leox Group of Companies office',
    title: 'Leox Group',
    caption: 'Partnership handshake',
  },
  {
    id: 'act-dental-center',
    src: '/images/customers/act-dental-center-visit.jpg',
    alt: 'Winter Arc Myanmar partnership visit at the ACT Dental Center clinic',
    title: 'ACT Dental Center',
    caption: 'Clinic partnership visit',
  },
]

const burmeseCustomerSlides: Slide[] = defaultCustomerSlides.map((slide, index) => ({
  ...slide,
  ...[
    { alt: 'My Dentist Premium Dental Center နှင့် Winter Arc Myanmar တို့၏ ပူးပေါင်းဆောင်ရွက်မှု', caption: 'အဆင့်မြင့် သွားကျန်းမာရေးစင်တာ' },
    { alt: 'ဖောက်သည်နှင့် မိတ်ဖက်ပူးပေါင်းမှုအထိမ်းအမှတ် လက်ဆွဲနှုတ်ဆက်ခြင်း', title: 'ဖောက်သည်၏ အောင်မြင်မှု', caption: 'လုပ်ငန်းအကောင်အထည်ဖော်ရေးအတွက် ယုံကြည်စိတ်ချရသော မိတ်ဖက်' },
    { alt: 'Unity Fitness နှင့် Winter Arc Myanmar တို့၏ အသိအမှတ်ပြုလက်မှတ် ပေးအပ်ခြင်း', caption: 'လုပ်ငန်းအပ်နှံမှု အသိအမှတ်ပြုလက်မှတ်' },
    { alt: 'Leox Group of Companies ရုံးတွင် Winter Arc Myanmar နှင့် မိတ်ဖက်ပူးပေါင်းမှုအထိမ်းအမှတ် လက်ဆွဲနှုတ်ဆက်ခြင်း', caption: 'မိတ်ဖက်ပူးပေါင်းမှုအထိမ်းအမှတ် လက်ဆွဲနှုတ်ဆက်ခြင်း' },
    { alt: 'ACT Dental Center ဆေးခန်းသို့ Winter Arc Myanmar ၏ မိတ်ဖက်တွေ့ဆုံရေး ခရီးစဉ်', caption: 'မိတ်ဖက်ဆေးခန်းသို့ သွားရောက်တွေ့ဆုံခြင်း' },
  ][index],
}))

export interface Slide {
  id: string | number
  src: string
  alt?: string
  title?: string
  caption?: string
  href?: string
}

interface ThreeDImageCarouselProps {
  locale?: Locale
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
  locale = 'en',
  slides,
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

  const safeSlides = slides ?? (locale === 'my' ? burmeseCustomerSlides : defaultCustomerSlides)
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

  /**
   * Positions every slide on the stage from its shortest signed distance to the
   * active slide around the loop, so the carousel keeps its cascade layout with
   * any number of slides (4, 5, 6+, not just 3).
   *
   * Slides outside the visible window stay mounted in the `stacked` state, parked
   * directly behind the active card. Previously they were unmounted (`return ''`
   * -> `return null`), which made them pop in and out mid-rotation instead of
   * animating.
   */
  const getSlideClasses = (
    index: number,
    activeIndex: number,
    total: number,
    visibleCount: 3 | 5
  ): 'now' | 'next' | 'next2' | 'prev' | 'prev2' | 'stacked' => {
    // +1 is the slide right after the active one, -1 the one right before it.
    let diff = index - activeIndex
    if (diff > total / 2) diff -= total
    else if (diff < -total / 2) diff += total

    if (diff === 0) return 'now'
    if (diff === 1) return 'next'
    if (diff === -1) return 'prev'
    if (visibleCount === 5 && diff === 2) return 'next2'
    if (visibleCount === 5 && diff === -2) return 'prev2'
    return 'stacked'
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
      aria-label={locale === 'my' ? 'ဖောက်သည် မိတ်ဖက်များ၏ ဓာတ်ပုံပြခန်း' : 'Customer partner gallery'}
      tabIndex={0}
    >
      <div className="cascade-slider_slides">
        {safeSlides.map((slide, index) => {
          const slideClass = getSlideClasses(index, activeIndex, totalSlides, visibleCount as 3 | 5)
          const isCenter = slideClass === 'now'

          return (
            <div
              key={slide.id}
              className={`cascade-slider_item ${slideClass}`}
              data-slide-number={index}
            >
              <div className="cascade-slider_image-wrapper">
                {slide.href ? (
                  <a href={slide.href.startsWith('/') && !slide.href.startsWith('//') ? localizedPath(locale, slide.href) : slide.href}>
                    <Image
                      src={slide.src}
                      alt={slide.alt || (locale === 'my' ? `ပုံ ${index + 1}` : `Slide ${index + 1}`)}
                      fill
                      className="cascade-slider_image"
                      priority={isCenter}
                      loading={isCenter ? 'eager' : 'lazy'}
                      sizes="(max-width: 480px) 290px, (max-width: 767px) 300px, 340px"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement
                        target.onerror = null
                        target.src = `https://placehold.co/350x200/4F46E5/ffffff?text=${encodeURIComponent(locale === 'my' ? `ပုံ ${index + 1}` : `Slide ${index + 1}`)}`
                      }}
                    />
                  </a>
                ) : (
                  <Image
                    src={slide.src}
                    alt={slide.alt || (locale === 'my' ? `ပုံ ${index + 1}` : `Slide ${index + 1}`)}
                    fill
                    className="cascade-slider_image"
                    priority={isCenter}
                    loading={isCenter ? 'eager' : 'lazy'}
                    sizes="(max-width: 480px) 200px, (max-width: 767px) 240px, 340px"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      target.onerror = null
                      target.src = `https://placehold.co/350x200/4F46E5/ffffff?text=${encodeURIComponent(locale === 'my' ? `ပုံ ${index + 1}` : `Slide ${index + 1}`)}`
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
            aria-label={locale === 'my' ? 'ယခင်ပုံ' : 'Previous slide'}
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="cascade-slider_arrow cascade-slider_arrow-right"
            onClick={(e) => { e.stopPropagation(); goToNext() }}
            aria-label={locale === 'my' ? 'နောက်ပုံ' : 'Next slide'}
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
            aria-label={locale === 'my' ? `ပုံ ${idx + 1} သို့ သွားရန်` : `Go to slide ${idx + 1}`}
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
  locale = 'en',
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
      locale={locale}
      slides={slides}
      itemCount={itemCount}
      className={className}
      style={style}
      {...rest}
    />
  )
}