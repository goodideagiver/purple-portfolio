import { useEffect, useState, useRef } from 'react'
import { HeadSeo } from '../HeadSeo/HeadSeo'
import { SideScroll } from '../SideScroll/SideScroll'
import { SkillSquare } from '../SkillSquare/SkillSquare'
import { AboutMe } from './AboutMe/AboutMe'
import { FirstSection } from './FirstSection/FirstSection'
import classes from './LandingPage.module.scss'
import { Section } from './Section/Section'
import { ShinySquare } from './ShinySquare/ShinySquare'
import { Props as wordsForSection } from './SpacedText/SpacedText'

const secondSection: wordsForSection[] = [
  {
    text: 'Projects',
    id: 'projects',
    style: { scrollMargin: '25vh' },
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
    style: { scrollMargin: '25vh' },
    id: 'contact',
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

const skills: {
  text: string
  icon?: string
  color?: string
}[] = [
  {
    text: 'My skills:',
  },
  {
    text: 'TypeScript',
    icon: '/typescript.svg',
    color: '#007ACC',
  },
  {
    text: 'React',
    icon: '/react.svg',
    color: '#54BDDA',
  },
  {
    text: 'SCSS',
    icon: '/sass.png',
    color: '#CC669B',
  },
  {
    text: 'Next.js',
    icon: '/next.svg',
    color: 'gray',
  },
]

export const LandingPage = () => {
  const [offset, setOffset] = useState(0)
  const promoSquareRef = useRef<HTMLDivElement>(null)

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
    <>
      <HeadSeo
        meta={{
          description:
            'Frontend Developer - Karol Bartkiewicz, Learn more about me',
          title: 'Portfolio',
        }}
      />
      <div className={classes.scrollSnap}>
        <FirstSection />
        <SideScroll offset={offset} scrollDistanceMultiplier={0.7}>
          {skills.map(({ text, icon, color }, index) => (
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
                border: `2px solid ${color}`,
              }}
              key={index}
            >
              <SkillSquare color={color} icon={icon}>
                {text}
              </SkillSquare>
            </div>
          ))}
        </SideScroll>
        <AboutMe />
        <Section words={thirdSection} />
      </div>
    </>
  )
}
