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

const physics = { damping: 30, mass: 0.67, stiffness: 30 }

export const FirstSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  })

  const spring = useSpring(scrollYProgress, physics)

  const firstSectionProgress = useTransform(spring, [0, 0.1, 0.5], [1, 1, 0])

  const xProgress = useTransform(spring, [0, 0.5], [0, 100])
  const xProgress2 = useTransform(spring, [0.5, 0.7], [-100, 0])

  const secondSectionProgress = useTransform(
    spring,
    [0.5, 0.7, 0.9, 1],
    [0, 1, 1, 0]
  )

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
          <h2 className={classes.subtitle}>Welcome to my portfolio</h2>
        </motion.div>
      </div>
    </div>
  )
}
