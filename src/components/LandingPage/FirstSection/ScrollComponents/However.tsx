import { MotionValue, useTransform } from 'framer-motion'
import { Subtitle } from './Subtitle/Subtitle'
import { Wrapper } from './Wrapper/Wrapper'

type Props = {
  scrollProgress: MotionValue<number>
}
export const However = ({ scrollProgress }: Props) => {
  const opacity = useTransform(scrollProgress, [0.6, 0.7, 0.8], [0, 1, 0])
  const scale = useTransform(scrollProgress, [0.6, 0.7, 0.8], [5, 1, 0.8])

  return (
    <Wrapper
      opacity={opacity}
      style={{
        opacity,
        scale,
      }}
    >
      <Subtitle>However...</Subtitle>
    </Wrapper>
  )
}
