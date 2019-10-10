import React from 'react'
import Head from 'next/head'
import { DEFAULT_SEO } from '../../config/seo'

const Seo = ({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  image = DEFAULT_SEO.openGraph.image,
  url = DEFAULT_SEO.openGraph.url,
  locale = DEFAULT_SEO.openGraph.locale,
}) => (
  <Head>
    <title key="title">{title}</title>
    <meta
      key="description"
      name="description"
      content={description}
    />
    <meta
      key="twitter:card"
      name="twitter:card"
      content={DEFAULT_SEO.twitter.cardType}
    />
    <meta
      key="twitter:site"
      name="twitter:site"
      content={DEFAULT_SEO.twitter.handle}
    />
    <meta
      key="og:url"
      property="og:url"
      content={url}
    />
    <meta
      key="og:type"
      property="og:type"
      content={DEFAULT_SEO.openGraph.type}
    />
    <meta
      key="og:title"
      property="og:title"
      content={title}
    />
    <meta
      key="og:description"
      property="og:description"
      content={description}
    />
    <meta
      key="og:image"
      property="og:image"
      content={image}
    />
    <meta
      key="og:image:width"
      property="og:image:width"
      content={DEFAULT_SEO.openGraph.imageWidth}
    />
    <meta
      key="og:image:height"
      property="og:image:height"
      content={DEFAULT_SEO.openGraph.imageHeight}
    />
    <meta
      key="og:locale"
      property="og:locale"
      content={locale}
    />
  </Head>
)

export default Seo