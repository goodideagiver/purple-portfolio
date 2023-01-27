import { MotionValue, useTransform } from 'framer-motion'
import { Subtitle } from '../Subtitle/Subtitle'
import { Wrapper } from '../Wrapper/Wrapper'
import classes from './AreYouLooking.module.scss'

type Props = {
  scrollProgress: MotionValue<number>
}

export const AreYouLooking = ({ scrollProgress }: Props) => {
  const opacity = useTransform(scrollProgress, [0.1, 0.3, 0.4], [0, 1, 0])
  const scale = useTransform(scrollProgress, [0.1, 0.3], [0.5, 1])

  return (
    <Wrapper
      opacity={opacity}
      style={{
        opacity,
        scale,
      }}
    >
      <Subtitle>Are you looking for the best developer ever?</Subtitle>
    </Wrapper>
  )
}
