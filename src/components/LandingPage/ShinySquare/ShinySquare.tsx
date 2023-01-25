import { useState, ReactNode, useRef } from 'react'
import classes from './ShinySquare.module.scss'

import clsx from 'clsx'

import { motion, spring, useSpring } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
}

export const ShinySquare = ({ children, className }: Props) => {
  const [coords, setCoords] = useState({ x: 50, y: 50 })

  const childrenWrapperRef = useRef<HTMLDivElement>(null)

  const resetPosition = () => {
    setCoords({ x: 50, y: 50 })
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY, target } = e
    if (target !== childrenWrapperRef.current) {
      resetPosition()
      return
    }
    const { x, y } = e.currentTarget.getBoundingClientRect()

    const newX = clientX - x - e.currentTarget.offsetWidth / 2
    const newY = clientY - y - e.currentTarget.offsetHeight / 2

    setCoords({ x: newX, y: newY })
  }

  return (
    <div
      onMouseLeave={resetPosition}
      onMouseMove={onMouseMove}
      className={clsx(classes.root, className)}
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
      <div ref={childrenWrapperRef} className={classes.content}>
        {children}
      </div>
    </div>
  )
}
