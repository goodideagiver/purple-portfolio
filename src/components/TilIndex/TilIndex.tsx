import Link from 'next/link'
import { MinimalLayout } from '../MinimalLayout/MinimalLayout'
import { NavigateBackLink } from '../NavigateBackLink/NavigateBackLink'

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
      <NavigateBackLink />
      <ul>
        {links.map((el, index) => (
          <li key={index + el.title}>
            <Link href={'/til/' + el.url}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </MinimalLayout>
  )
}
