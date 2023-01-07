import clsx from 'clsx'
import classes from './LandingPage.module.scss'
import { Props, SpacedText } from './SpacedText/SpacedText'

const words: Props[] = [
  {
    text: 'Karol Bartkiewicz',
  },
  {
    text: 'Frontend Developer',
  },
  {
    text: 'GitHub',
    href: 'https://github.com/goodideagiver',
    external: true,
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/karol-bartkiewicz/',
    external: true,
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: new Date().getFullYear().toString(),
  },
]

export const LandingPage = () => {
  const wordContainerCss = clsx(classes.wordsContainer, 'words-container')

  return (
    <div className={classes.root}>
      <div className={wordContainerCss}>
        {words.map((word, index) => (
          <SpacedText key={word.text + index} {...word} />
        ))}
      </div>
    </div>
  )
}
