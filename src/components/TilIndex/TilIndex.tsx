import Link from 'next/link'
import { MinimalLayout } from '../MinimalLayout/MinimalLayout'
import { NavigateBackLink } from '../NavigateBackLink/NavigateBackLink'
import classes from './TilIndex.module.scss'

type link = {
  url: string
  title: string
}

type Props = {
  links: link[]
}

export const TilIndex = ({ links }: Props) => {
  return (
    <MinimalLayout>
      <NavigateBackLink prevUrl='/' />
      <ul className={classes.list}>
        {links.map((el, index) => (
          <li key={index + el.title}>
            <Link className={classes.link} href={'/til/' + el.url}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </MinimalLayout>
  )
}
