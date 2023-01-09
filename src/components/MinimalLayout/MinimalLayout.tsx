import { ReactNode } from 'react'
import classes from './MinimalLayout.module.scss'

type Props = {
  children: ReactNode
}

export const MinimalLayout = ({ children }: Props) => {
  return <div className={classes.root}>{children}</div>
}
