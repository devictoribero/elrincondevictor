import Head from 'next/head';
import Link from 'next/link';
import {PostsSection, PostSectionTitle} from '../molecules/PostsSection';

export function BlogMainPage({featured, randomPost}) {
  return (
    <div className="page">
      <Head>
        <title key="title">Elrincondevictor · Bienvenido a mi mente</title>
        <meta
          key="description"
          name="description"
          content="Productividad, reflexiones, cosas que aprendo y una filosofía de vida para tener una vida saludable y equilibrada."
        />
        <link key="canonical" rel="canonical" href='https://www.elrincondevictor.com/blog'/>
      </Head>

      <Header randomPost={randomPost}/>

      <main className="container-wrapper">
        <div className="container">
          <PostsSection
            title={<PostSectionTitle heading='h1'>Destacados</PostSectionTitle>}
            posts={featured}/>  
        </div>
      </main>   

      <style jsx>{``}</style>
    </div>
  )
}

function Header({randomPost}){
  const {slug} = randomPost;

  return (
    <header role="banner" className="container-wrapper">
      <div className="container">
        <h1>Comparto mi filosofía de vida en este, mi rincón.</h1>
        <p>Productividad, reflexiones y un estilo de vida sostenible y equilibrado son algunos de los temas de los que escribo.</p>
        <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
          <a><span>🎲</span>Leer algún artículo</a>
        </Link>
      </div>

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
          line-height: 1.5;
        }

        p {
          margin-top: 1rem;
          color: var(--grey-700);
          font-size: 1.5rem;
          line-height: 1.75;
        }

        a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 10px 30px;
          border-radius: 3px;
          color: var(--primary-600);
          border-radius: 3px;
          border: 3px solid var(--primary-600);
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          text-decoration: none;
          transition: background-color 0.4s ease;
        }
        
        a:hover {
          background-color: var(--primary-600);
          color: white;
        }

        span {
          font-size: 30px;
          margin-right: 10px;
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
    </header>
  )
}