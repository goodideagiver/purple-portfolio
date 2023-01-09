import Link from 'next/link'
import { useRouter } from 'next/router'
import classes from './NavigateBackLink.module.scss'

export const NavigateBackLink = () => {
  const router = useRouter()
  console.log(router)

  const handleClickBack = () => {
    router.back()
  }

  return (
    <nav className={classes.root}>
      <Link className={classes.link} href={''} onClick={handleClickBack}>
        <span aria-hidden='true'>{`< `}</span>
        Back
      </Link>
      <Link className={classes.link} href={'/'}>
        Home
      </Link>
    </nav>
  )
}
