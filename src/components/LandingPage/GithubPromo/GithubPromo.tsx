import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CommitSquare } from './CommitSquare/CommitSquare'
import classes from './GithubPromo.module.scss'

// 53 X 7 - commit graph size

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
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis facilis, cum exercitationem similique quasi debitis
            dolores nam deleniti rerum laboriosam odio culpa, minus ipsum nihil
            delectus assumenda blanditiis est accusantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis facilis, cum exercitationem similique quasi debitis
            dolores nam deleniti rerum laboriosam odio culpa, minus ipsum nihil
            delectus assumenda blanditiis est accusantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis facilis, cum exercitationem similique quasi debitis
            dolores nam deleniti rerum laboriosam odio culpa, minus ipsum nihil
            delectus assumenda blanditiis est accusantium.
          </p>
        </ul>
      </div>
    </div>
  )
}
