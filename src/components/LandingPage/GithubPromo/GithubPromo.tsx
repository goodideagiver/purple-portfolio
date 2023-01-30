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
    description: 'A website for web developers',
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

const commitSquareCount = 12 * 7

export const GithubPromo = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const shine = useTransform(scrollYProgress, [0, 1], ['150%', '0%'])

  return (
    <div ref={ref} className={classes.root}>
      <div className={classes.sticky}>
        <div>
          <a className={classes.link} href='https://github.com/goodideagiver'>
            <div className={classes.header}>
              <h2 className={classes.title}>Visit my GitHub</h2>
              <svg id='progress' width='75' height='75' viewBox='0 0 100 100'>
                <circle cx='50' cy='50' r='30' pathLength='1' className='bg' />
                <motion.circle
                  cx='50'
                  cy='50'
                  r='30'
                  pathLength='1'
                  className='indicator'
                  style={{ pathLength: scrollYProgress }}
                />
              </svg>
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
