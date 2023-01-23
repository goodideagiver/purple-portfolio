import classes from './FirstSection.module.scss'
import Link from 'next/link'

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

export const FirstSection = () => {
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
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
      </div>
    </div>
  )
}
