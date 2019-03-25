import Head from 'next/head';
import PostHeader from './PostHeader'

export default function Post({post}) {
  return (
    <div className="page container-wrapper">
      <Head>
        <title key="title">Elrincondevictor · Bienvenido a mi mente</title>
        <meta
          key="description"
          name="description"
          content="Productividad, reflexiones, cosas que aprendo y una filosofía de vida para tener una vida equilibrada."
        />
      </Head>

      <main className='container'>
        <article>
          <PostHeader post={post} />
          <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }}></div>
        </article>
      </main>   

      <style jsx global>{`
        article {
          max-width: 700px;
        }

        article p {
          font-size: 18px;
          color: var(--grey-900);
          line-height: 1.75;
          letter-spacing: 0.2px;
          margin: 0 0 2rem 0;
        }

        article em {
          font-family: var(--font-family-alter);
          letter-spacing: 0.25px;
          font-size: 19px;
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

        article blockquote { margin: 0; }

        article blockquote > p {
          color: var(--primary-900);
          font-size: 27px;
          font-family: var(--font-family-alter);
          font-style: italic;
          line-height: 1.5;
          position: relative;
          margin: 2rem 0;
          padding: 1.5rem 2rem;
        }
      `}</style>
    </div>
  )
}