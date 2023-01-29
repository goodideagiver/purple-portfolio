import { MotionValue, motion, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Wrapper } from '../Wrapper/Wrapper'
import classes from './Links.module.scss'

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

type Props = {
  scrollProgress: MotionValue<number>
}

export const Links = ({ scrollProgress }: Props) => {
  const opacity = useTransform(scrollProgress, [0, 0.1, 0.2], [1, 1, 0])
  const scale = useTransform(scrollProgress, [0, 0.1, 0.2], [1, 1, 4])

  return (
    <Wrapper
      opacity={opacity}
      style={{
        opacity,
        scale,
      }}
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
    </Wrapper>
  )
}
