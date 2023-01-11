import { useState } from 'react'
import classes from './ShinySquare.module.scss'

type Props = {
  children: ReactNode
}

export const ShinySquare = ({ children }: Props) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const { offsetWidth, offsetHeight } = e.currentTarget

    const x =
      (((clientX - innerWidth / 2) / (innerWidth / 2)) * offsetWidth) / 2
    const y =
      (((clientY - innerHeight / 2) / (innerHeight / 2)) * offsetHeight) / 2

    setCoords({ x, y })
  }

  const resetPosition = () => {
    setCoords({ x: 0, y: 0 })
  }

  return (
    <div
      onMouseLeave={resetPosition}
      onMouseMove={onMouseMove}
      className={classes.root}
    >
      <span
        style={{
          transform: `translate(${coords.x}px, ${coords.y}px)`,
        }}
        className={classes.shine}
      />
      {children}
    </div>
  )
}
