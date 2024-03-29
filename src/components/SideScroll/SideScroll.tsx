import { ReactNode } from '@mdx-js/react/lib'
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import classes from './SideScroll.module.scss'

type Props = {
  children: ReactNode
  offset?: number
  scrollDistanceMultiplier?: number
}

export const SideScroll = ({
  children,
  offset = 0,
  scrollDistanceMultiplier = 1,
}: Props) => {
  const scrollListenerRef = useRef<HTMLDivElement>(null)
  const ghostRef = useRef(null)
  const scrollingContentRef = useRef<HTMLDivElement>(null)
  const stickyContainerRef = useRef<HTMLDivElement>(null)
  const [scrollRange, setScrollRange] = useState(0)

  const { scrollYProgress } = useScroll({
    target: scrollListenerRef,
  })

  const onResizeScrollRange = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setScrollRange(
        entry.contentRect.width +
          (window.innerWidth - document.documentElement.clientWidth)
      )
    }
  }, [])

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      onResizeScrollRange(entries)
    )
    scrollingContentRef &&
      scrollingContentRef.current &&
      resizeObserver.observe(scrollingContentRef.current)
  }, [onResizeScrollRange])

  const physics = { damping: 15, mass: 0.27, stiffness: 100 }

  const transform = useTransform(scrollYProgress, [0.1, 0.95], ['10%', '-75%'])

  return (
    <div className={classes.root} ref={scrollListenerRef}>
      <div ref={stickyContainerRef} className={classes.scroll}>
        <motion.section
          style={{ x: transform }}
          className={classes.thumbnailsContainer}
          ref={scrollingContentRef}
        >
          {children}
        </motion.section>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange * scrollDistanceMultiplier }}
        className={classes.ghost}
      />
    </div>
  )
}
