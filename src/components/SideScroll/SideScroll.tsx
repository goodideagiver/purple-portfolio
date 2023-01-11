import { ReactNode } from '@mdx-js/react/lib'
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import classes from './SideScroll.module.scss'

type Props = {
  children: ReactNode
  offset?: number
}

export const SideScroll = ({ children, offset = 0 }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const ghostRef = useRef(null)
  const stickyContainerRef = useRef<HTMLDivElement>(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef &&
      scrollRef.current &&
      setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
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
    [0 + offset, -scrollRange + viewportW - offset]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 100 }
  const spring = useSpring(transform, physics)

  return (
    <div className={classes.root} ref={scrollRef}>
      <div ref={stickyContainerRef} className={classes.scroll}>
        <motion.section
          style={{ x: spring }}
          className={classes.thumbnailsContainer}
        >
          {children}
        </motion.section>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className={classes.ghost}
      />
    </div>
  )
}