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

  const topCircleLeft = useTransform(
    useSpring(scrollYProgress, physics),
    [0, 0.5],
    ['10%', '90%']
  )

  const bottomCircleLeft = useTransform(
    useSpring(scrollYProgress, physics),
    [0, 0.5],
    ['90%', '10%']
  )

  const topCircleTop = useTransform(
    useSpring(scrollYProgress, physics),
    [0.5, 1],
    ['30%', '70%']
  )

  const bottomCircleTop = useTransform(
    useSpring(scrollYProgress, physics),
    [0.5, 1],
    ['70%', '30%']
  )

  return (
    <section ref={scrollContainer} className={classes.scrollRoot}>
      <div className={classes.root}>
        <motion.span
          style={{
            left: topCircleLeft,
            top: topCircleTop,
          }}
          className={classes.circle}
        />
        <motion.span
          style={{
            left: bottomCircleLeft,
            top: bottomCircleTop,
          }}
          className={classes.circle}
        />
        <div className={classes.circleWrapper}></div>
        <div className={classes.square}>
          <Avatar />
          <div>
            <h2 className={classes.title}>About me</h2>
            <div className={classes.text}>
              <div>Hello, my name is Karol.</div>{' '}
              <div>
                {`So far I've been coding almost every day for many months already
                and it's reflected on my GitHub profile.`}
              </div>
              <div>
                In the past I used to create 2D animation, design 2D graphics
                and shoot portrait photography, the skills developed while doing
                that helped me a lot in learning web development.
              </div>
              <div>
                I am currently working at{' '}
                <a className={classes.link} href='https://appunite.com/'>
                  AppUnite
                </a>{' '}
                as a Frontend Web Developer.
              </div>
            </div>
            <div className={classes.links}>
              <a
                className={classes.externalLink}
                href='https://github.com/goodideagiver'
              >
                My GitHub
              </a>
              <a className={classes.externalLink} href='#contact'>
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
