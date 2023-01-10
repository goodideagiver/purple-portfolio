import clsx from 'clsx'
import { motion } from 'framer-motion'
import { Props as wordsForSection, SpacedText } from '../SpacedText/SpacedText'
import classes from './Section.module.scss'

type Props = { words: wordsForSection[] }

export const Section = ({ words }: Props) => {
  const wordContainerCss = clsx(classes.wordsContainer, 'words-container')

  return (
    <div className={classes.root}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, duration: 10 }}
        viewport={{ once: false, margin: '-200px' }}
        className={wordContainerCss}
      >
        {words.map((word, index) => (
          <SpacedText visible={true} key={word.text + index} {...word} />
        ))}
      </motion.div>
    </div>
  )
}
