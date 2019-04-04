import Head from 'next/head';
import {PostsSection} from '../molecules/PostsSection'

export function BlogMainPage({featured}) {
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
        <PostsSection title='Destacados' posts={featured}/>
      </main>   

      <style jsx>{`
        header {
          position: relative;
          background: url('/static/img/home-header.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          padding-top: 50px;
          padding-bottom: 50px;
          margin-bottom: 32px;
        }

        h1 {
          margin: 0;
          color: var(--grey-800);
        }

        p {
          margin-top: 1rem;
          color: var(--grey-600);
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