import classes from './FirstSection.module.scss'
import Link from 'next/link'
import { useRef } from 'react'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion'

type Link = {
  text: string
  href: string
  asLink?: boolean
}

const links: Link[] = [
  {
    text: 'TIL',
    href: '/til',
    asLink: true,
  },
  {
    text: 'GitHub',
    href: 'https://github.com/goodideagiver',
  },
  {
    text: 'Projects',
    href: '#projects',
  },
  {
    text: 'Contact',
    href: '#contact',
  },
]

const physics = { damping: 15, stiffness: 15, mass: 2 }

export const FirstSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  })

  const spring = useSpring(scrollYProgress, physics)

  const firstSectionProgress = useTransform(spring, [0, 0.1, 0.2], [1, 1, 0])

  const xProgress = useTransform(spring, [0, 0.5], [0, 100])

  const secondSectionProgress = useTransform(spring, [0.2, 0.3, 0.4], [0, 1, 0])
  const xProgress2 = useTransform(spring, [0.2, 0.3], [-100, 0])

  const thirdSection = useTransform(spring, [0.4, 0.5, 0.6], [0, 1, 0])

  const fourthSection = useTransform(spring, [0.6, 0.7, 0.8], [0, 1, 0])
  const fourthSectionScale = useTransform(spring, [0.6, 0.7, 0.8], [5, 1, 0.8])

  const fifthSection = useTransform(spring, [0.8, 0.9, 0.92], [0, 1, 0])
  const fifthSectionScale = useTransform(spring, [0.8, 0.9], [1.2, 1])
  const fifthSectionY = useTransform(spring, [0.85, 0.95], [0, -100])

  return (
    <div ref={scrollRef} className={classes.scrollRoot}>
      <div className={classes.root}>
        <motion.div
          style={{
            opacity: firstSectionProgress,
            x: xProgress,
          }}
          className={classes.textContainer}
        >
          <h1 className={classes.title}>Karol Bartkiewicz</h1>
          <h2 className={classes.subtitle}>Frontend Developer</h2>
          <div className={classes.linkContainer}>
            {links.map(({ text, href, asLink }) => {
              if (asLink) {
                return (
                  <Link href={href} key={text} className={classes.link}>
                    {text}
                  </Link>
                )
              }
              return (
                <a href={href} key={text} className={classes.link}>
                  {text}
                </a>
              )
            })}
          </div>
        </motion.div>
        <motion.div
          style={{
            opacity: secondSectionProgress,
            x: xProgress2,
          }}
          className={classes.textContainer}
        >
          <p className={classes.subtitle}>
            Are you looking for the best developer ever?
          </p>
        </motion.div>
        <motion.div
          style={{
            opacity: thirdSection,
          }}
          className={classes.textContainer}
        >
          <p className={classes.subtitle}>
            {`It's`} <span style={{ color: 'red' }}>not</span> me 💩
          </p>
        </motion.div>

        <motion.div
          style={{
            opacity: fourthSection,
            scale: fourthSectionScale,
          }}
          className={classes.textContainer}
        >
          <p className={classes.subtitle}>However...</p>
        </motion.div>
        <motion.div
          style={{
            opacity: fifthSection,
            scale: fifthSectionScale,
            y: fifthSectionY,
          }}
          className={classes.textContainer}
        >
          <p
            className={classes.subtitle}
          >{`I'm sure we can create something cool together!`}</p>
        </motion.div>
      </div>
    </div>
  )
}
