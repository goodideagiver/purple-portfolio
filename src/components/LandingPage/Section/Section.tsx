import clsx from 'clsx'
import { Props as wordsForSection, SpacedText } from '../SpacedText/SpacedText'
import classes from './Section.module.scss'

type Props = { words: wordsForSection[] }

export const Section = ({ words }: Props) => {
  const wordContainerCss = clsx(classes.wordsContainer, 'words-container')

  return (
    <div className={classes.root}>
      <div className={wordContainerCss}>
        {words.map((word, index) => (
          <SpacedText visible={true} key={word.text + index} {...word} />
        ))}
      </div>
    </div>
  )
}
