import Link from 'next/link'
import classes from './NavigateBackLink.module.scss'

type Props = {
  prevUrl?: string
}

export const NavigateBackLink = ({ prevUrl }: Props) => {
  return (
    <nav className={classes.root}>
      {!!prevUrl && (
        <Link className={classes.link} href={prevUrl}>
          <span aria-hidden='true'>{`< `}</span>
          Back
        </Link>
      )}
      <Link className={classes.link} href={'/'}>
        Home
      </Link>
    </nav>
  )
}
