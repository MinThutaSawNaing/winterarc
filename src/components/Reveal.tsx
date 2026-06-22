'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: EASE,
    },
  },
}

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

/** Single element fade-up on scroll into view. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -48px 0px' }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerRevealProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
}

/** Staggered children — ideal for responsive card grids. */
export function StaggerReveal({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0.04,
}: StaggerRevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -40px 0px' }}
      variants={{
        hidden: containerVariants.hidden,
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={cn(className)} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
