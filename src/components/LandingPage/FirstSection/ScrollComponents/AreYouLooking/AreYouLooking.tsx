import { MotionValue, useTransform } from 'framer-motion'
import { BestDevBg } from '../BestDevBg/BestDevBg'
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
    <>
      <BestDevBg scrollProgress={scrollProgress} />
      <Wrapper
        opacity={opacity}
        style={{
          opacity,
          scale,
        }}
      >
        <Subtitle
          style={{
            textAlign: 'center',
          }}
        >
          Are you looking for the best developer ever?
        </Subtitle>
      </Wrapper>
    </>
  )
}
