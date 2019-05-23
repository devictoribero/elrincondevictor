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
        <PostsSection
          className="container"
          title={<PostSectionTitle heading='h1'>Artículos</PostSectionTitle>}
          posts={featured}/>  
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
        <p>Soy desarrollador front-end 👨‍💻 y me gusta conectar con el alma de las personas ❤️.</p>
        <p>Hago deporte 🏋️, amo el yoga 🧘, practico meditación 🙏, viajo siempre que puedo 🛫 y me cuestiono todo acerca de la vida.</p>
        <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
          <a><span>🎲</span>Leer algún artículo</a>
        </Link>
      </div>

      <style jsx>{`
        header {
          position: relative;
          padding-top: 25px;
          padding-bottom: 25px;
          margin-bottom: 32px;
        }

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
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
          padding: 10px 30px;
          background: linear-gradient(to bottom right, var(--primary-100), var(--primary-300));
          border-radius: 3px;

          color: var(--grey-600);
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.4s ease, box-shadow 0.35s ease;
          box-shadow: 0 5px 20px 0px rgba(1,1,1,0.15);
          color: var(--primary-800)
        }
        
        a:hover,
        a:focus {
          background: linear-gradient(to right, var(--primary-200), var(--primary-400));
          box-shadow: 0 7px 9px -1px rgba(1,1,1,0.15);
        }

        span {
          font-size: 30px;
          margin-right: 10px;
        }

        @media screen and (min-width: 768px) {
          header {
            padding-top: 50px;
            padding-bottom: 50px;
          }

          h1 {
            width: 550px;
          }

          p {
            width: 600px;
          }
        }
      `}</style>
    </header>
  )
}