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

const physics = { damping: 10, stiffness: 30, mass: 0.5 }

export const FirstSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  })

  const spring = scrollYProgress

  const firstSectionProgress = useTransform(spring, [0, 0.1, 0.2], [1, 1, 0])
  const fscale = useTransform(spring, [0, 0.1, 0.2], [1, 1, 4])

  const secondSectionProgress = useTransform(spring, [0.1, 0.3, 0.4], [0, 1, 0])
  const scaleSecond = useTransform(spring, [0.1, 0.3], [0.5, 1])

  const thirdSection = useTransform(spring, [0.4, 0.5, 0.6], [0, 1, 0])
  const notSpanTilt = useTransform(
    useSpring(scrollYProgress, { stiffness: 1000, damping: 10, mass: 0.5 }),
    [0.45, 0.5],
    [0, 20]
  )

  const fourthSection = useTransform(spring, [0.6, 0.7, 0.8], [0, 1, 0])
  const fourthSectionScale = useTransform(spring, [0.6, 0.7, 0.8], [5, 1, 0.8])

  const fifthSection = useTransform(spring, [0.75, 0.8], [0, 1])
  const fifthSectionScale = useTransform(spring, [0.75, 0.8], [1.2, 1])

  return (
    <div ref={scrollRef} className={classes.scrollRoot}>
      <div className={classes.root}>
        <div className={classes.waves} />
        <motion.div
          style={{
            opacity: firstSectionProgress,
            scale: fscale,
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
            scale: scaleSecond,
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
            {`It's`}{' '}
            <motion.span
              style={{
                color: 'red',
                rotate: notSpanTilt,
                display: 'inline-block',
                transformOrigin: '0 center',
              }}
            >
              not
            </motion.span>{' '}
            me 💩
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
          }}
          className={classes.textContainer}
        >
          <p className={classes.subtitle}>
            {`I'm sure we can create `}
            something cool together!
          </p>
        </motion.div>
      </div>
    </div>
  )
}
