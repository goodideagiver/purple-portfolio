import { MotionValue, useTransform, motion, useSpring } from 'framer-motion'
import { useUserSelect } from '../useUserSelect'
import { Subtitle } from './Subtitle/Subtitle'
import { Wrapper } from './Wrapper/Wrapper'

type Props = {
  scrollProgress: MotionValue<number>
}

export const NotMe = ({ scrollProgress }: Props) => {
  const opacity = useTransform(scrollProgress, [0.4, 0.5, 0.6], [0, 1, 0])
  const rotate = useTransform(
    useSpring(scrollProgress, { stiffness: 1000, damping: 10, mass: 0.5 }),
    [0.45, 0.5],
    [0, 20]
  )

  const userSelect = useUserSelect(opacity)

  return (
    <Wrapper
      opacity={opacity}
      style={{
        opacity,
        userSelect,
        pointerEvents: userSelect,
      }}
    >
      <Subtitle>
        {`It's`}{' '}
        <motion.span
          style={{
            color: 'red',
            rotate,
            display: 'inline-block',
            transformOrigin: '0 center',
          }}
        >
          not
        </motion.span>{' '}
        me 💩
      </Subtitle>
    </Wrapper>
  )
}
