import clsx from 'clsx'
import Link from 'next/link'
import classes from './SpacedText.module.scss'
import { SpacedWord } from './SpacedWord/SpacedWord'

export type Props = {
  href?: string
  external?: boolean
  text: string
}

export const SpacedText = ({ href, text, external }: Props) => {
  const splitIntoWords = text.split(' ')
  const words = splitIntoWords.map((word, index) => (
    <SpacedWord word={word} key={word + index} />
  ))

  const textCss = clsx(classes.root, 'spaced-text')

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={textCss}
        >
          {words}
        </a>
      )
    }
    return (
      <Link className={textCss} href={href}>
        {words}
      </Link>
    )
  }

  return <div className={textCss}>{words}</div>
}
