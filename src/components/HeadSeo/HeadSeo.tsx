import Head from 'next/head'

type Meta = {
  title: string
  description: string
  image: string
}

type Props = {
  meta?: Meta
}

export const HeadSeo = ({ meta }: Props) => {
  const title = meta?.title + ' | purpleblack.dev' || 'purpleblack.dev'
  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
      <meta name='description' content={meta?.description || ''} />
      <meta name='image' content={meta?.image || ''} />
      <meta property='og:url' content='purpleblack.dev' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={meta?.description || ''} />
    </Head>
  )
}
