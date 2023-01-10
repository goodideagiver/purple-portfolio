import Link from 'next/link'
import { HeadSeo } from '../../src/components/HeadSeo/HeadSeo'
import classes from './index.module.scss'

const index = () => {
  return (
    <>
      <HeadSeo
        meta={{
          title: '404',
          description: 'This page does not exist',
        }}
      />
      <div className={classes.root}>
        <main className={classes.main}>
          <h1>
            This Page <span className={classes.colored}>Does Not Exist</span>
          </h1>
          <Link className={classes.link} href={'/'}>
            Home
          </Link>
        </main>
      </div>
    </>
  )
}
export default index
