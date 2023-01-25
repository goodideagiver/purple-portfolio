import { useScroll, useTransform, motion, useSpring } from 'framer-motion'
import { useRef } from 'react'
import classes from './AboutMe.module.scss'
import { Avatar } from './Avatar/Avatar'

const physics = { damping: 15, mass: 0.67, stiffness: 30 }

export const AboutMe = () => {
  const scrollContainer = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollContainer,
  })

  const topCircle = useTransform(
    useSpring(scrollYProgress, physics),
    [0, 0.5],
    ['10%', '90%']
  )

  const bottomCircle = useTransform(
    useSpring(scrollYProgress, physics),
    [0, 0.5],
    ['90%', '10%']
  )

  const topCircle2 = useTransform(
    useSpring(scrollYProgress, physics),
    [0.5, 1],
    ['30%', '70%']
  )

  const bottomCircle2 = useTransform(
    useSpring(scrollYProgress, physics),
    [0.5, 1],
    ['70%', '30%']
  )

  return (
    <section ref={scrollContainer} className={classes.scrollRoot}>
      <div className={classes.root}>
        <motion.span
          style={{
            left: topCircle,
            top: topCircle2,
          }}
          className={classes.circle}
        />
        <motion.span
          style={{
            left: bottomCircle,
            top: bottomCircle2,
          }}
          className={classes.circle}
        />
        <div className={classes.square}>
          <Avatar />
          <div>
            <h2>About me</h2>
            <p className={classes.text}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              itaque maiores ea, laudantium est dolore voluptatem nam recusandae
              facere sequi omnis quasi eius quia exercitationem inventore in
              molestiae aspernatur. Architecto?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
