import { useState, ReactNode } from 'react'
import classes from './ShinySquare.module.scss'

import clsx from 'clsx'

import { motion, spring, useSpring } from 'framer-motion'

type Props = {
  children: ReactNode
}

export const ShinySquare = ({ children }: Props) => {
  const [coords, setCoords] = useState({ x: 50, y: 50 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e
    const { x, y } = e.currentTarget.getBoundingClientRect()

    const newX = clientX - x - e.currentTarget.offsetWidth / 2
    const newY = clientY - y - e.currentTarget.offsetHeight / 2

    setCoords({ x: newX, y: newY })
  }

  const resetPosition = () => {
    setCoords({ x: 50, y: 50 })
  }

  return (
    <div
      onMouseLeave={resetPosition}
      onMouseMove={onMouseMove}
      className={classes.root}
    >
      <motion.span
        style={{
          x: coords.x,
          y: coords.y,
        }}
        className={classes.shine}
      />
      <motion.span
        style={{
          x: -coords.x,
          y: -coords.y,
        }}
        className={clsx(classes.shine, classes.reflection)}
      />
      <div className={classes.content}>{children}</div>
    </div>
  )
}
