import Document, { Head, Main, NextScript } from "next/document"
import Seo from '../components/pages/Seo'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Seo />
          <link
						rel="preload"
						href="/static/css/index.css"
						rel="stylesheet"
					/>
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:400,900|Open+Sans:400,600,700,800&display=swap"
            rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}