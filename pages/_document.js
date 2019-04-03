import Document, { Head, Main, NextScript } from "next/document";
import { Fragment } from 'react';
import { person } from '../config/schema.org';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  render() {
    const { isProduction } = this.props;

    return (
      <html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preload" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600" as="font" type="font/woff2" crossOrigin="true"></link>
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* We only want to add the scripts if in production */}
          {isProduction && (
            <Fragment>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-135694564-1"
              />
              {/* We call the function above to inject the contents of the script tag */}
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </Fragment>
          )}
          <script type='application/ld+json' dangerouslySetInnerHTML={this.setSchema()} />
        </body>
      </html>
    );
  }

  // Function will be called below to inject
  // script contents onto page
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-135694564-1');
      `
    };
  }
  
  // Sets schema for personal information schema.org
  setSchema() {
    return {
      __html: JSON.stringify(person)
    }
  }
}