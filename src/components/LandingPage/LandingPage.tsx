import clsx from 'clsx'
import classes from './LandingPage.module.scss'
import { Props as wordsForSection, SpacedText } from './SpacedText/SpacedText'

const firstSection: wordsForSection[] = [
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
    text: 'About',
    href: '/about',
  },
  {
    text: new Date().getFullYear().toString(),
  },
]

const secondSection: wordsForSection[] = [
  {
    text: 'Projects',
  },
  {
    text: 'Bewebdev.tech',
    href: 'https://bewebdev.tech',
    external: true,
  },
  {
    text: 'How to ask good questions',
    href: 'https://goodideagiver.github.io/how-to-ask-good-questions/',
    external: true,
  },
]

const thirdSection: wordsForSection[] = [
  {
    text: 'Contact',
  },
  {
    text: 'E-mail',
    href: 'mailto:contact@purpleblack.dev',
  },
  {
    text: 'Discord',
    href: 'https://discord.gg/kGsCDes7VU',
    external: true,
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/karol-bartkiewicz/',
    external: true,
  },
]

export const LandingPage = () => {
  const wordContainerCss = clsx(classes.wordsContainer, 'words-container')

  const sections = [firstSection, secondSection, thirdSection].map(
    (section, index) => (
      <div key={index} className={classes.root}>
        <div className={wordContainerCss}>
          {section.map((word, index) => (
            <SpacedText key={word.text + index} {...word} />
          ))}
        </div>
      </div>
    )
  )

  return <div className={classes.scrollSnap}>{sections}</div>
}
