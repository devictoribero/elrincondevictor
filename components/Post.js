import Head from 'next/head';
import {post} from '../config/post-example';

export default function Post({post}) {
  return (
    <div className="page">
      <Head>
        <title key="title">Elrincondevictor · Bienvenido a mi mente</title>
        <meta
          key="description"
          name="description"
          content="Productividad, reflexiones, cosas que aprendo y una filosofía de vida para tener una vida equilibrada."
        />
      </Head>

      <main>
        <article dangerouslySetInnerHTML={{ __html: post.bodyHtml }}></article>
      </main>   

      <style jsx global>{`
        main { padding: 50px 30px; }

        article {
          max-width: 700px;
        }

        article > h1 {
          color: transparent;
          -webkit-text-stroke: 1px var(--grey-600);
          text-shadow: 2px 2px var(--primary-400);
          font-size: 36px;
          line-height: 1.5;
          letter-spacing: 0.5px;
          margin: 0 0 2rem 0;
        }

        article > p {
          font-size: 18px;
          color: var(--grey-900);
          line-height: 1.75;
          letter-spacing: 0.2px;
          margin: 0 0 2rem 0;
        }

        article em {
          font-family: var(--font-family-alter);
          letter-spacing: 0.25px;
        }

        article strong { color: black; }

        article ul,
        article ol {
          padding-left: 1.5rem;
        }

        article li {
          font-size: 18px;
          color: var(--grey-900);
          line-height: 1.75;
          letter-spacing: 0.2px;
          margin-bottom: 1.25rem;
        }

        article > blockquote {
          color: var(--primary-900);
          font-size: 27px;
          font-family: var(--font-family-alter);
          font-style: italic;
          line-height: 1.5;
          position: relative;
          margin: 2rem 0;
          padding: 1.5rem 2rem;
        }

        article > blockquote > p { margin: 0; }

        @media screen and (min-width: 768px) {
          main { padding: 50px; }

          article > h1 {
            text-shadow: 4px 3px var(--primary-400);
            font-size: 50px;
          }
        }
      `}</style>
    </div>
  )
}