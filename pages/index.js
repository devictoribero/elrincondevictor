import Head from 'next/head'

export default function HelloWorld() {
  return (
    <div className="page">
      <Head>
        <title>elrincóndevictor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div>
        <h1>elrincóndevictor</h1>
        <p className="slogan">Bienvenidos a mi mente</p>
      </div>
    
      <style jsx>{`
        .page {
          min-height: 100vh;
          margin: 2rem;
          background: red;
          box-sizing: border-box;
        }
        
        h1, p {
          text-align: center;
          margin: 0;
        }
        h1 {
        }
        p {
        }
      `}</style>
      <style global jsx>{`
        body {
          margin: 0;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        }
      `}</style>
    </div>
  )
}