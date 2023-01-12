import { useEffect, useState, useRef } from 'react'
import { SideScroll } from '../SideScroll/SideScroll'
import classes from './LandingPage.module.scss'
import { Section } from './Section/Section'
import { ShinySquare } from './ShinySquare/ShinySquare'
import { Props as wordsForSection } from './SpacedText/SpacedText'

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
    text: 'TIL',
    href: '/til',
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
  const [offset, setOffset] = useState(0)
  const promoSquareRef = useRef<HTMLDivElement>(null)
  const sections = [firstSection, secondSection, thirdSection].map(
    (section, index) => <Section key={index} words={section} />
  )

  useEffect(() => {
    const countOfSquaresThatWillFitIntoViewport =
      window.innerWidth / (promoSquareRef?.current?.offsetWidth || 0)
    const fullSquaresThatWillFit = Math.floor(
      countOfSquaresThatWillFitIntoViewport
    )
    const offsetOfSquares =
      (countOfSquaresThatWillFitIntoViewport - fullSquaresThatWillFit) *
      (promoSquareRef?.current?.offsetWidth || 0)
    setOffset(offsetOfSquares)
  }, [])

  return (
    <div className={classes.scrollSnap}>
      {sections}
      <h2>Projects</h2>
      <SideScroll offset={offset} scrollDistanceMultiplier={0.7}>
        {['My skills', 'TypeScript', 'React', 'SCSS', 'Next.js'].map(
          (text, index) => (
            <div
              ref={promoSquareRef}
              style={{
                display: 'grid',
                placeItems: 'center',
                overflow: 'hidden',
                borderRadius: '1.5rem',
                fontWeight: 'bold',
                fontSize: '3.5rem',
                textAlign: 'center',
              }}
              key={index}
            >
              <ShinySquare>{text}</ShinySquare>
            </div>
          )
        )}
      </SideScroll>
      {sections}
    </div>
  )
}
