import classes from './Wrapper.module.scss'
import { motion, MotionStyle, MotionValue, useMotionValue } from 'framer-motion'
import { ElementType, ReactNode, useEffect, useRef } from 'react'
import { useUserSelect } from '../../useUserSelect'
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
  const defaultOpacity = useMotionValue(opacity?.get() || 0)

  const ref = useRef<HTMLDivElement>(null)

  const userSelect = useUserSelect(opacity || defaultOpacity)

  useEffect(() => {
    const element = ref.current
    if (element && element.style.opacity === '0') {
      opacity?.set(-Infinity)
    }
  }, [opacity])

  const mouse = opacity
    ? {
        userSelect,
        pointerEvents: userSelect,
      }
    : {}

  return (
    <motion.div
      ref={ref}
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
