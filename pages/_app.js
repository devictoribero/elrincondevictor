import App, { Container } from 'next/app'
import React from 'react'
import Head from 'next/head'
import Seo from '../components/pages/Seo'
import Router from 'next/router'
import { DEFAULT_SEO } from '../config/seo'
import { trackPageView } from '../helpers/trackPageView'
import {palette, fonts} from '../config/theme'

export default class MyApp extends App {
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
          <Seo
            title = {DEFAULT_SEO.title}
            description = {DEFAULT_SEO.description}
            canonical = 'https://www.elrincondevictor.com'
          />
          <link href="https://fonts.googleapis.com/css?family=Merriweather:400,900|Open+Sans:400,600,700,800&display=swap" rel="stylesheet"></link>
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

            --social-twitter: ${palette.social.twitter['default']};
            --social-twitter-dark: ${palette.social.twitter['dark']};

            --ff-sans-serif: ${fonts.sansSerif};
            --ff-serif: ${fonts.serif};
          }

          body {
            margin: 0 auto;
            font-family: var(--ff-serif);
          }
          h1,h2,h3,h4,h5,h6,h7 {
            font-family: var(--ff-sans-serif);
          }

          .container-wrapper {
            padding: 0 1rem;
          }

          .container {
            box-sizing: border-box;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
          }

          @media screen and (min-width: 768px) {
            .container { max-width: 750px; }
          }

          @media screen and (min-width: 992px) {
            .container { max-width: 970px; }
          }

          @media screen and (min-width: 1200px) {
            .container { max-width: 1170px; }
          }

          *:focus {
            outline: 2px dashed;
          }

          code {
            background: linear-gradient(to right, var(--primary-000), var(--primary-100));
            border-radius: 3px;
            padding: 2px 4px;
            hyphens: auto;  
            font-size: 16px;
          }

          a.link-like {
            position: relative;
            color: var(--primary-800);
            cursor: pointer;
            transition: color 0.25s ease;

            box-shadow: 0 1px 0 0 currentColor;
            text-decoration: none;
          }
  
          a.link-like:hover, a.link-like:active {
            color: var(--primary-900);
            box-shadow: none;
          }

        `}</style>
      </Container>
    );
  }
}