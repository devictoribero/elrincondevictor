export default function HelloWorld() {
  return (
    <div className="page">
      <header>
        <div className="header-inner">
          <h1 lang="en">Senior<br/>human being<br/>at life.</h1>
          <p>Soy desarrollador front-end 👨‍💻 y me gusta conectar con el alma de las personas ❤️.</p>
          <p>Hago deporte 🏋️, amo el yoga 🧘, practico meditación 🙏, viajo siempre que puedo 🛫 y me cuestiono todo acerca de la vida.</p>
        </div>

        <nav className='social'>
          <a
            className='social-link'
            rel="nofollow"
            target='_blank'
            href="https://twitter.com/JS_TUREEY">
            Twitter
          </a>
          <a
            className='social-link'
            target='_blank'
            rel="nofollow"
            href="https://github.com/tureey">
            Github
          </a>
          <a
            className='social-link'
            target='_blank'
            rel="nofollow"
            href="https://www.linkedin.com/in/victorribero/">
            Linkedin
          </a>
          <a
            className='social-link'
            target='_blank'
            rel="nofollow"
            href="https://medium.com/@victorriberoguasch">
            Medium
          </a>
        </nav>
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

        .social {
          display: flex;
          padding: 2rem 0;
          flex-wrap: wrap;
        }

        .social-link {
          position: relative;
          display: block;
          margin: 0 0.75rem 0.75rem 0;
          color: #1d1d1d;
          font-weight: bold;
          font-family: 'Poppins', sans-serif;
          text-decoration: none;
          border-bottom: 1px dashed #1d1d1d;
        }

        .social-link:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.1rem;
          width: 0;
          height: 50%;
          z-index: -1;
          transition: 0.3s ease width;
          transform:skewX(150deg);
        }

        .social-link:hover:after {
          width: 100%;
          background: #ffed5e;
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
          font-family: 'Poppins',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        }
      `}</style>
    </div>
  )
}