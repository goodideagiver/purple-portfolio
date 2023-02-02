import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import classes from './SpacedText.module.scss'
import { SpacedWord } from './SpacedWord/SpacedWord'
import { HTMLAttributes } from 'react'

export type Props = HTMLAttributes<HTMLElement> & {
  href?: string
  external?: boolean
  text: string
  visible?: boolean
}

export const SpacedText = ({
  href,
  text,
  external,
  visible,
  ...props
}: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  const hoverStartHandler = () => {
    setIsHovered(true)
  }

  const hoverEndHandler = () => {
    setIsHovered(false)
  }

  const splitIntoWords = text.split(' ')
  const words = splitIntoWords.map((word, index) => (
    <SpacedWord isHovered={isHovered} word={word} key={word + index} />
  ))

  const textCss = clsx(classes.root, 'spaced-text', {
    'spaced-text--visible': visible,
  })

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className={textCss}
          onMouseEnter={hoverStartHandler}
          onMouseLeave={hoverEndHandler}
          {...props}
        >
          {words}
        </a>
      )
    }
    return (
      <Link
        onMouseEnter={hoverStartHandler}
        onMouseLeave={hoverEndHandler}
        {...props}
        className={textCss}
        href={href}
      >
        {words}
      </Link>
    )
  }

  return (
    <div
      onMouseEnter={hoverStartHandler}
      onMouseLeave={hoverEndHandler}
      className={textCss}
      {...props}
    >
      {words}
    </div>
  )
}
