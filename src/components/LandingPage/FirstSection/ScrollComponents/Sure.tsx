import { MotionValue, motion, useTransform } from 'framer-motion'
import { Subtitle } from './Subtitle/Subtitle'
import { Wrapper } from './Wrapper/Wrapper'

import classes from './Sure.module.scss'

type Props = {
  scrollProgress: MotionValue<number>
}

export const Sure = ({ scrollProgress }: Props) => {
  const opacity = useTransform(scrollProgress, [0.75, 0.8], [0, 1])
  const scale = useTransform(scrollProgress, [0.75, 0.8], [1.2, 1])

  const weCanTransform = {
    weCan: useTransform(scrollProgress, [0.78, 0.8], [0, 1]),
    create: useTransform(scrollProgress, [0.8, 0.82], [0, 1]),
    something: useTransform(scrollProgress, [0.82, 0.84], [0, 1]),
  }

  return (
    <Wrapper
      opacity={opacity}
      style={{
        opacity,
        scale,
      }}
    >
      <Subtitle className={classes.subtitle}>
        {`I'm sure`}{' '}
        <motion.span
          style={{
            opacity: weCanTransform.weCan,
          }}
        >
          we can create
        </motion.span>{' '}
        <motion.span
          className={classes.cool}
          style={{
            opacity: weCanTransform.create,
          }}
        >
          something cool
        </motion.span>{' '}
        <motion.span
          style={{
            opacity: weCanTransform.something,
          }}
        >
          together!
        </motion.span>
      </Subtitle>
    </Wrapper>
  )
}
