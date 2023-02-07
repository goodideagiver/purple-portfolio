import clsx from 'clsx'
import { useScroll, motion, useTransform, useInView } from 'framer-motion'
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
  const avatarRef = useRef<HTMLDivElement>(null)

  const inView = useInView(scrollRef, {
    amount: 0.9,
  })

  const avatarInView = useInView(avatarRef, {
    amount: 1,
    once: true,
  })

  return (
    <div className={classes.scrollRoot}>
      <motion.div
        ref={scrollRef}
        className={clsx(classes.root, inView && classes.visible)}
      >
        <div ref={avatarRef} className={classes.contentWrapper}>
          <motion.div
            style={{
              scale: avatarInView ? 1 : 0.8,
              opacity: avatarInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className={classes.wave}
          >
            <Image
              className={classes.image}
              src='/purple.png'
              alt=''
              width={500}
              height={500}
            />
          </motion.div>
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
