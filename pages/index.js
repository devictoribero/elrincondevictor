import {Layout} from '../components/layout/Layout';

export default function Page() {
  return (
    <Layout>
      <header className="container-wrapper">
        <div className="container">
          <h1>Senior<br/>human being<br/>at life.</h1>
          <p>I'm a software engineer 👨‍💻 who likes to connect with other people's souls ❤️.</p>
          <p>I do sport 🏋️, I love yoga 🧘, practice meditation 🙏, travel whenever I can 🛫 and I wonder about life.</p>
        </div>
      </header>

      <style jsx>{`
        header {
          min-height: calc(100vh - 250px);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        h1, p { margin: 0; }

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
          h1 {
            margin-bottom: 36px;
            width: 600px;
          }

          p {
            font-size: 21px;
            width: 600px;
          }
        }
      `}</style>
    </Layout>
  )
}