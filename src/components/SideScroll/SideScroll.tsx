import { ReactNode } from '@mdx-js/react/lib'
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'

type Props = {
  children: ReactNode
}

export const SideScroll = ({ children }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  const scrollPerc = useMotionValue(0)

  useLayoutEffect(() => {
    scrollRef &&
      scrollRef.current &&
      setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries))
    ghostRef && ghostRef.current && resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  })

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <div ref={scrollRef}>
      <div className='scroll-container'>
        <motion.section style={{ x: spring }} className='thumbnails-container'>
          {children}
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className='ghost' />
    </div>
  )
}
