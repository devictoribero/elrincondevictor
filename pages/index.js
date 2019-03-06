import Head from 'next/head'

export default function HelloWorld() {
  return (
    <div className="page">
      <Head>
        <title>elrincóndevictor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,600" rel="stylesheet"></link>
      </Head>

      <header>
        <div className="header-inner">
          <h1>
            Senior<br/>
            human being<br/>
            at life.
          </h1>
          <p>Soy desarrollador front-end 👨‍💻 y me gusta conectar con el alma de las personas ❤️.</p>
          <p>Hago deporte 🏋️, amo el yoga 🧘, practico meditación 🙏, viajo siempre que puedo 🛫 y me cuestiono todo acerca de la vida.</p>
        </div>
      </header>
    
      <style jsx>{`
        header {
          min-height: 100vh;
          padding: 1.5rem;
          box-sizing: border-box;
        }
        
        h1, p {
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        h1 {
          margin-bottom: 24px;
          -webkit-text-stroke: 1px black;
          color: transparent;
          text-shadow: 5px 4px #ffed5e;
          font-size: 75px;
          line-height: 1.125;
          font-weight: bold;
        }

        p {
          display: block;
          margin-bottom: 16px;
          color: #1d1d1d;
          font-size: 16px;
          letter-spacing: 0.2px;
          line-height: 2;
        }

        @media screen and (min-width: 768px) {
          header {
            padding: 3rem;
          }

          .header-inner {
            width: 600px;
            margin-top: 5rem;
          }

          h1 {
            margin-bottom: 36px;
          }

          p {
            font-size: 21px;
          }
        }

        @media screen and (min-width: 1024px) {
          header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10%;
          }

          .header-inner {
            width: 600px;
            margin-top: 0;
          }
        }
      `}</style>

      <style global jsx>{`
        body {
          margin: 0;
        }
        * {
          font-family: 'Poppins',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        }
      `}</style>
    </div>
  )
}