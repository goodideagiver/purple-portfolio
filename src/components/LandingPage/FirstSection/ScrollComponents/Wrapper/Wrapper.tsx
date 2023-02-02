import clsx from 'clsx'
import {
  motion,
  MotionStyle,
  MotionValue,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { HTMLProps, ReactNode } from 'react'
import classes from './Wrapper.module.scss'

type MotionDiv = Pick<HTMLProps<HTMLDivElement>, 'className'>

type Props = MotionDiv & {
  children?: ReactNode
  style?: MotionStyle
  opacity?: MotionValue<number>
}

export const Wrapper = ({
  style,
  children,
  opacity,
  className,
  ...props
}: Props) => {
  const defaultOpacity = useMotionValue(0)

  const pointerEvents = useTransform(opacity || defaultOpacity, (value) =>
    value > 0.3 ? 'auto' : 'none'
  )

  const mouse = opacity
    ? {
        userSelect: pointerEvents,
        pointerEvents: pointerEvents,
      }
    : {}

  return (
    <motion.div
      className={clsx(classes.root, className)}
      {...props}
      style={{
        ...mouse,
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}
