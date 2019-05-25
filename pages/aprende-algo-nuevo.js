import {Layout} from '../components/layout/Layout'
import {getRandom} from '../helpers/random'

function useRandom(array = []) {
  const defaultRandom = getRandom(array)
  const [random, setRandom] = React.useState(defaultRandom)

  function generateRandom() {
    return setRandom(getRandom(array))
  }

  return [random, generateRandom]
}

export default function Page({pathname, didYouKnow}) {
  const [random, generateRandom] = useRandom(didYouKnow)

  return (
    <Layout route={pathname}>
      <header className="container-wrapper">
        <div className="container">
          <h1>¿Sabías que...?</h1>
          {random.data.map((text, index) => (
            <p key={index} dangerouslySetInnerHTML={{__html: text}}></p>
          ))}

          <button onClick={generateRandom}>A otra cosa mariposa 🦋</button>
        </div>
      </header>

      <style jsx>{`
        header {
          padding-top: 25px;
          padding-bottom: 25px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        h1, p { margin: 0; max-width: 720px; }

        h1 {
          font-family: var(--font-family-alter);
          margin: 0 0 2rem 0;
          font-size: 2.5rem;
          line-height: 1.35;
          font-weight: bold;
        }

        p {
          display: block;
          margin: 0.75rem 0;
          color: #1d1d1d;
          font-size: 18px;
          letter-spacing: 0.2px;
          line-height: 2;
        }

        a {
          text-decoration: none;
          color: var(--primary-700);
          border-bottom: 1px solid var(--primary-700);
          transition: color 0.25s ease, border 0.25s ease;
          margin-right: 5px;
          line-height: 1.5;
        }

        a:hover,
        a:active {
          color: var(--primary-900);
          border-bottom: 1px solid var(--primary-900);
        }

        button {
          border: none;
          cursor: pointer;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
          padding: 10px 30px;
          background-image: linear-gradient(to bottom right, var(--primary-100), var(--primary-300));
          border-radius: 3px;

          color: var(--grey-600);
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
          transition: background-image 0.4s linear, box-shadow 0.15s ease, color 0.15s ease;
          box-shadow: 0 5px 20px 0px rgba(1,1,1,0.15);
          color: var(--primary-800);
        }
        
        button:hover,
        button:focus {
          background-image: linear-gradient(to bottom right, var(--primary-200), var(--primary-400));
          box-shadow: 0 7px 9px -1px rgba(1,1,1,0.15);
          color: var(--primary-900);
        }


        @media screen and (min-width: 768px) {
          header {
            padding-top: 50px;
            padding-bottom: 50px;
          }

          h1 {
            margin-bottom: 36px;
          }

          p {
            font-size: 21px;
          }
        }
      `}</style>
    </Layout>
  )
}
Page.getInitialProps = props => {
  const {didYouKnow} = require(`../config/did-you-know.js`);
  return { pathname: props.pathname, didYouKnow }
}