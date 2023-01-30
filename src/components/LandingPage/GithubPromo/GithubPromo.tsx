import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CommitSquare } from './CommitSquare/CommitSquare'
import classes from './GithubPromo.module.scss'
import { PortfolioItem } from './PortfolioItem/PortfolioItem'
import { portfolioItems } from './portfolioItems'

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
