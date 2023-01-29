import { MotionValue, useTransform } from 'framer-motion'
import { Wrapper } from '../Wrapper/Wrapper'
import classes from './Waves.module.scss'

type Props = {
  scrollProgress: MotionValue<number>
}

export const Waves = ({ scrollProgress }: Props) => {
  const opacity = useTransform(scrollProgress, [0.8, 0.85], [0, 1])
  const backgroundPositionY = useTransform(
    scrollProgress,
    [0.8, 1],
    ['0%', '-20%']
  )

  return (
    <Wrapper
      style={{
        opacity,
        backgroundPositionY,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
      className={classes.waves}
    />
  )
}
