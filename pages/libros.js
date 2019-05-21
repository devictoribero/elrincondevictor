import {Layout} from '../components/layout/Layout'
import {BooksList} from '../components/molecules/BooksList'
import {books} from '../config/books'


export default function Page() {
  return (
    <Layout>
      <header className="container-wrapper">
        <div className="container">
          <h1>Los libros que te recomiendo</h1>
          <p>Con el objetivo de que puedas ahorrar tiempo ⏳, te comparto los libros que me han parecido más interesantes.</p>
          <ol>
            <li><a href="#books__technical">Libros de contenido técnico</a>👨‍💻</li>
            <li><a href="#books__productivity">Libros de productividad</a>🤓</li>
            <li><a href="#books__personal_development">Libros de desarrollo personal</a>🧘</li>
            <li><a href="#books__finances">Libros de finanzas</a>🤑</li>
            <li><a href="#books__entrepreneurship">Libros de emprendimiento</a>💼</li>
            <li><a href="#books__soft_skills">Libros de soft skills</a>❤️</li>
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
          margin-bottom: 2.5rem;
          font-size: 2.5rem;
          line-height: 1.125;
          font-weight: bold;
        }

        p {
          display: block;
          margin-bottom: 16px;
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