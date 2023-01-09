import { ReactNode } from 'react'
import { HeadSeo } from '../HeadSeo/HeadSeo'
import { MinimalLayout } from '../MinimalLayout/MinimalLayout'
import { NavigateBackLink } from '../NavigateBackLink/NavigateBackLink'
import classes from './BlogLayout.module.scss'

type Meta = {
  title: string
  description: string
  image: string
}

type Props = {
  meta: Meta
  children: ReactNode
}

export const BlogLayout = ({ meta, children }: Props) => {
  return (
    <>
      <HeadSeo meta={meta} />
      <MinimalLayout>
        <NavigateBackLink />
        <main className={classes.main}>{children}</main>
      </MinimalLayout>
    </>
  )
}
