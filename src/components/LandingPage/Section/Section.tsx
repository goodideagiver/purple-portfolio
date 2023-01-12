import clsx from 'clsx'
import { motion, useSpring, useTransform } from 'framer-motion'
import { Props as wordsForSection, SpacedText } from '../SpacedText/SpacedText'
import classes from './Section.module.scss'

import { useScroll } from 'framer-motion'
import { useRef } from 'react'

type Props = { words: wordsForSection[] }

export const Section = ({ words }: Props) => {
  const wordContainerCss = clsx(classes.wordsContainer, 'words-container')

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', '70% 70%'],
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  const springProgress = useSpring(progress, {
    stiffness: 400,
    damping: 100,
  })

  return (
    <div className={classes.root}>
      <motion.div
        ref={ref}
        style={{ opacity: springProgress, scale: springProgress }}
        className={wordContainerCss}
      >
        {words.map((word, index) => (
          <SpacedText visible={true} key={word.text + index} {...word} />
        ))}
      </motion.div>
    </div>
  )
}
