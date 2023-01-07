import clsx from 'clsx'
import { useRef } from 'react'
import { useIsVisible } from '../../../hooks/useIsVisible'
import { Props as wordsForSection, SpacedText } from '../SpacedText/SpacedText'
import classes from './Section.module.scss'

type Props = { words: wordsForSection[] }

export const Section = ({ words }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useIsVisible(ref)

  const wordContainerCss = clsx(classes.wordsContainer, 'words-container')

  return (
    <div ref={ref} className={classes.root}>
      <div className={wordContainerCss}>
        {words.map((word, index) => (
          <SpacedText visible={visible} key={word.text + index} {...word} />
        ))}
      </div>
    </div>
  )
}
