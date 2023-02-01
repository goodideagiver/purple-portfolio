import { useScroll, motion, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { CommitSquare } from './CommitSquare/CommitSquare'
import classes from './GithubPromo.module.scss'
import { PortfolioItem } from './PortfolioItem/PortfolioItem'
import { portfolioItems } from './portfolioItems'
import { useScreen } from 'usehooks-ts'
import oldnotepad from '../../OldNotepad/OldNotepad.module.scss'

export const GithubPromo = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const screen = useScreen()

  const commitSquareCount = screen && screen.width > 600 ? 9 * 10 : 8 * 6

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  )

  return (
    <div id='projects' ref={ref} className={classes.root}>
      <div className={classes.sticky}>
        <div>
          <motion.a
            style={{ scale }}
            className={classes.link}
            href='https://github.com/goodideagiver'
          >
            <div className={classes.header}>
              <h2 className={classes.title}>Visit my GitHub</h2>
              <button className={oldnotepad.close}></button>
            </div>
            <div className={classes.grid}>
              {Array.from({ length: commitSquareCount }).map((_, index) => {
                const startRange = index / commitSquareCount

                const endRange = (index + 1) / commitSquareCount

                return (
                  <CommitSquare
                    key={index}
                    progress={scrollYProgress}
                    inputRange={[startRange * 0.5, endRange * 0.5]}
                  />
                )
              })}
            </div>
          </motion.a>
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
