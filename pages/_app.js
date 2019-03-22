import App, { Container } from 'next/app';
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { DEFAULT_SEO } from '../config/seo';
import { trackPageView } from '../helpers/trackPageView';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      trackPageView(url);
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title key="title">{DEFAULT_SEO.title}</title>
          <meta
            key="description"
            name="description"
            content={DEFAULT_SEO.description}
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
            content={DEFAULT_SEO.openGraph.url}
          />
          <meta
            key="og:type"
            property="og:type"
            content={DEFAULT_SEO.openGraph.type}
          />
          <meta
            key="og:title"
            property="og:title"
            content={DEFAULT_SEO.openGraph.title}
          />
          <meta
            key="og:description"
            property="og:description"
            content={DEFAULT_SEO.openGraph.description}
          />
          <meta
            key="og:image"
            property="og:image"
            content={DEFAULT_SEO.openGraph.image}
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
            content={DEFAULT_SEO.openGraph.locale}
          />
          <link key="canonical" rel="canonical" href="http://www.elrincondevictor.com"/>
        </Head>
        <Component {...pageProps} />

        <style global jsx>{`
          body {
            margin: 0 auto;
            font-family: 'Poppins',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
          }

          .container {
            max-width: 1400px;
            margin: 0 auto;
          }

          .overlay:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(255,255,255,0.25);
          }

          .overlay.isPrimary:after {
            background-image: linear-gradient(rgba(233,185,73,0.2 ),rgba(249,218,139,0.8));
          }
        `}</style>
      </Container>
    );
  }
}