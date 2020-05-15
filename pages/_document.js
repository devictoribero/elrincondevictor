import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
						rel="preload"
						href="/public/css/index.css"
						rel="stylesheet"
					/>
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:400,900|Open+Sans:400,600,700,800&display=swap"
            rel="stylesheet" />
        </Head>
        <body>
          <div className='container-wrapper'>
            <div className='container'>
              <Main />
            </div>
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}