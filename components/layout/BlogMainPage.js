import Head from 'next/head';
import {PostsSection} from '../molecules/PostsSection'

export function BlogMainPage({list}) {
  return (
    <div className="page">
      <Head>
        <title key="title">Elrincondevictor · Bienvenido a mi mente</title>
        <meta
          key="description"
          name="description"
          content="Productividad, reflexiones, cosas que aprendo y una filosofía de vida para tener una vida saludable y equilibrada."
        />
      </Head>

      <header role="banner" className="container-wrapper">
        <div className="container">
          <h1>Comparto mi filosofía de vida en este, mi rincón.</h1>
          <p>Productividad, reflexiones y un estilo de vida sostenible y equilibrado son algunos de los temas de los que escribo.</p>
        </div>
      </header>

      <main>
        <PostsSection title='Destacados' posts={list}/>
      </main>   

      <style jsx>{`
        header {
          position: relative;
          background-image: linear-gradient(rgba(233,185,73,0),rgba(249,218,139,1));
          padding-top: 50px;
          padding-bottom: 50px;
        }

        header:after {
          content: "";
          position: absolute;
          bottom: -180px;
          left: 0;
          right: 0;
          background: rgba(249,218,139,1);
          height: 180px;
          z-index: -1;
        }

        h1 {
          margin: 0;
          color: var(--primary-800);
        }

        p {
          margin-top: 1rem;
          color: var(--primary-900);
          font-size: 1.5rem;
          line-height: 1.75;
        }

        @media screen and (min-width: 768px) {
          h1 {
            width: 500px;
          }

          p {
            width: 600px;
          }
        }
      `}</style>
    </div>
  )
}