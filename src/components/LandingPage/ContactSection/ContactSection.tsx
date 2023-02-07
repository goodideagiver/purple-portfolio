import { useScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import classes from './ContactSection.module.scss'

const thirdSection = [
  {
    text: 'E-mail',
    href: 'mailto:contact@purpleblack.dev',
  },
  {
    text: 'Discord',
    href: 'https://discord.gg/kGsCDes7VU',
    external: true,
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/karol-bartkiewicz/',
    external: true,
  },
] as const

export const ContactSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  })

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ['center 0%', 'center 100%']
  )

  return (
    <div ref={scrollRef} className={classes.scrollRoot}>
      <motion.div
        style={{
          backgroundPosition: backgroundPosition,
        }}
        className={classes.root}
      >
        <div className={classes.contentWrapper}>
          <div className={classes.wave}>
            <Image
              className={classes.image}
              src='/purple.png'
              alt=''
              width={500}
              height={500}
            />
          </div>
          <h2 id='contact' className={classes.title}>
            Contact me
          </h2>
          <ul className={classes.list}>
            {thirdSection.map(({ href, text }, index) => (
              <li key={index + text}>
                <a className={classes.link} href={href}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
