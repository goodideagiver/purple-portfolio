import classes from './Subtitle.module.scss'

type Props = {
  children: ReactNode
}

export const Subtitle = ({ children }: Props) => {
  return <p className={classes.root}>{children}</p>
}
