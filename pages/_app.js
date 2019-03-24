import App, { Container } from 'next/app';
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { DEFAULT_SEO } from '../config/seo';
import { trackPageView } from '../helpers/trackPageView';
import {palette, fonts} from '../config/theme';

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

          :root {
            --grey-900: ${palette.grey["900"]};
            --grey-800: ${palette.grey["800"]};
            --grey-700: ${palette.grey["700"]};
            --grey-600: ${palette.grey["600"]};
            --grey-500: ${palette.grey["500"]};
            --grey-400: ${palette.grey["400"]};
            --grey-300: ${palette.grey["300"]};
            --grey-200: ${palette.grey["200"]};
            --grey-100: ${palette.grey["100"]};
            --grey-000: ${palette.grey["000"]};

            --primary-900: ${palette.primary["900"]};
            --primary-800: ${palette.primary["800"]};
            --primary-700: ${palette.primary["700"]};
            --primary-600: ${palette.primary["600"]};
            --primary-500: ${palette.primary["500"]};
            --primary-400: ${palette.primary["400"]};
            --primary-300: ${palette.primary["300"]};
            --primary-200: ${palette.primary["200"]};
            --primary-100: ${palette.primary["100"]};
            --primary-000: ${palette.primary["000"]};

            --font-family-main: ${fonts.main}
            --font-family-alter: ${fonts.alter}
          }

          body {
            margin: 0 auto;
            font-family: var(--font-family-main);
          }

          *:focus {
            outline: 2px dashed;
          }

          .overlay:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
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