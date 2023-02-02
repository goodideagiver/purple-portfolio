import clsx from 'clsx'
import { HTMLAttributes, ReactNode } from 'react'
import classes from './Subtitle.module.scss'

type Props = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode
}

export const Subtitle = ({ children, className, ...props }: Props) => {
  return (
    <p className={clsx(classes.root, className)} {...props}>
      {children}
    </p>
  )
}
