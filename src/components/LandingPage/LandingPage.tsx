import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { HeadSeo } from '../HeadSeo/HeadSeo'
import { AboutMe } from './AboutMe/AboutMe'
import { ContactSection } from './ContactSection/ContactSection'
import { FirstSection } from './FirstSection/FirstSection'
import { GithubPromo } from './GithubPromo/GithubPromo'
import classes from './LandingPage.module.scss'
import { Skills } from './Skills/Skills'

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
        <Skills />
        <AboutMe />
        <GithubPromo />
        <ContactSection />
      </div>
    </>
  )
}
