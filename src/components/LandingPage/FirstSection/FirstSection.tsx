import classes from './FirstSection.module.scss'
import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { Links } from './ScrollComponents/Links/Links'
import { AreYouLooking } from './ScrollComponents/AreYouLooking/AreYouLooking'
import { NotMe } from './ScrollComponents/NotMe'
import { However } from './ScrollComponents/However'
import { Sure } from './ScrollComponents/Sure'
import { Waves } from './ScrollComponents/Waves/Waves'
import { Progress } from './ScrollComponents/Progress/Progress'

export const FirstSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: scrollProgress } = useScroll({
    target: scrollRef,
  })

  return (
    <div ref={scrollRef} className={classes.scrollRoot}>
      <div className={classes.root}>
        {[Waves, Progress, Links, AreYouLooking, NotMe, However, Sure].map(
          (Component, index) => (
            <Component key={'siema' + index} scrollProgress={scrollProgress} />
          )
        )}
      </div>
    </div>
  )
}
