import classes from './Wrapper.module.scss'
import {
  motion,
  MotionStyle,
  MotionValue,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { ElementType, ReactNode, useEffect, useRef } from 'react'
import clsx from 'clsx'

type MotionDiv = Omit<ElementType<HTMLDivElement>, 'className'>

interface Props extends MotionDiv {
  children?: ReactNode
  style?: MotionStyle
  opacity?: MotionValue<number>
  className?: string
  //fuszera z tymi propsami
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
