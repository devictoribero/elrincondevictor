import {Layout} from '../components/layout/Layout'
import {BooksList} from '../components/molecules/BooksList'
import {books} from '../config/books'


export default function Libros({pathname}) {
  return (
    <Layout route={pathname}>
      <header className="container-wrapper">
        <div className="container">
          <h1>The books I recommend you</h1>
          <p></p>
          <p>In order to be practical and save you time ⏳, I recommend you the most revelant books I've read.</p>
          <ol>
            <li><a className="link-like" href="#technical">Technical books</a>👨‍💻</li>
            <li><a className="link-like" href="#productivity">Books about productivity</a>🤓</li>
            <li><a className="link-like" href="#personal_development">Personal development books</a>🧘</li>
            <li><a className="link-like" href="#finances">Books about investments</a>🤑</li>
            <li><a className="link-like" href="#entrepreneurship">Books about entrepreneurship</a>💼</li>
            <li><a className="link-like" href="#soft_skills">Books about soft skills</a>❤️</li>
          </ol>
        </div>
      </header>

      <BooksList books={books} />

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

        ul, ol {
          margin: 2rem 0 0 0;
          padding: 0;
        }
        
        li {
          list-style-position: inside;
          color: var(--grey-700);
          font-size: 18px;
          font-family: var(--font-family-alter);
        }

        li:not(:last-of-type) {
          margin-bottom: 1.25rem;
        }

        a {
          margin-right: 5px;
          line-height: 1.5;
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

Libros.getInitialProps = props => {
  return {pathname: props.pathname}
}