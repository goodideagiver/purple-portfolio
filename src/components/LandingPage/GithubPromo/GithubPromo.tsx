import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CommitSquare } from './CommitSquare/CommitSquare'
import classes from './GithubPromo.module.scss'
import {
  PortfolioItem,
  Props as PortfolioItemType,
} from './PortfolioItem/PortfolioItem'

// 53 X 7 - commit graph size

const portfolioItems: PortfolioItemType[] = [
  {
    title: 'Bewebdev.tech',
    description: `bewebdev.tech is a project that offers a collection of useful learning resources for web developers. It's built using the Astro framework, the React JavaScript library, and SCSS for styling. The website provides a centralized location for web developers to find information, tutorials, and other resources to improve their skills. The focus is on delivering high-quality content in a user-friendly interface to make it easy for developers to find what they're looking for and get started with learning.
`,
    image: '/bewebdev.tech_.png',
    link: 'https://bewebdev.tech',
  },
  {
    title: 'How to ask good questions',
    description: `lorem ipsum`,
    image: '/example.jpg',
    link: 'https://goodideagiver.github.io/how-to-ask-good-questions/',
  },
  {
    title: 'How to ask good questions',
    description: 'A website for web developers',
    image: '/example.jpg',
    link: 'https://goodideagiver.github.io/how-to-ask-good-questions/',
  },
]

const commitSquareCount = 9 * 10

export const GithubPromo = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  return (
    <div ref={ref} className={classes.root}>
      <div className={classes.sticky}>
        <div>
          <a className={classes.link} href='https://github.com/goodideagiver'>
            <div className={classes.header}>
              <h2 className={classes.title}>Visit my GitHub</h2>
            </div>
            <div className={classes.grid}>
              {Array.from({ length: commitSquareCount }).map((_, index) => {
                const startRange = index / commitSquareCount
                const endRange = (index + 1) / commitSquareCount

                return (
                  <CommitSquare
                    key={index}
                    progress={scrollYProgress}
                    inputRange={[startRange, endRange]}
                  />
                )
              })}
            </div>
          </a>
        </div>
      </div>
      <div className={classes.projects}>
        <ul className={classes.list}>
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </div>
  )
}
