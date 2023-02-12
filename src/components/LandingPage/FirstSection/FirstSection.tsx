import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import classes from './FirstSection.module.scss'
import { AreYouLooking } from './ScrollComponents/AreYouLooking/AreYouLooking'
import { However } from './ScrollComponents/However'
import { Links } from './ScrollComponents/Links/Links'
import { NotMe } from './ScrollComponents/NotMe'
import { Sure } from './ScrollComponents/Sure'
import { Waves } from './ScrollComponents/Waves/Waves'

export const FirstSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: scrollProgress } = useScroll({
    target: scrollRef,
  })

  return (
    <div ref={scrollRef} className={classes.scrollRoot}>
      <div className={classes.root}>
        {[Waves, Links, AreYouLooking, NotMe, However, Sure].map(
          (Component, index) => (
            <Component key={'siema' + index} scrollProgress={scrollProgress} />
          )
        )}
      </div>
    </div>
  )
}
