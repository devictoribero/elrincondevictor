import Head from 'next/head';
import PostHeader from './PostHeader'

function isExternalLink(link) {
  return link.search('elrincondevictor') === -1
}

export default function Post({post}) {
  if(process.browser) {
    const links = document.querySelectorAll('article a');
    for(let i = 0, length = links.length; i < length; i++) {
      let link = links[i];
      if(isExternalLink(link.getAttribute('href'))) {
        link.setAttribute('rel', 'nofollow noopener');
        link.setAttribute('target', '_blank');
      }
    }
  }

  return (
    <div className="page container-wrapper">
      <Head>
        <title key="title">{`${post.meta_title} | Elrincondevictor`}</title>
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
          font-size: 18px;
          color: var(--grey-900);
          max-width: 700px;
        }

        article h2 {
          margin: 2.5rem 0 0.5rem;
        }

        article p,
        article li {
          hyphens: auto;
        }

        article p {
          line-height: 1.75;
          letter-spacing: 0.2px;
          margin: 0 0 2rem 0;
        }

        article em { color: var(--grey-700); }
        article strong { color: black; }

        article ul,
        article ol {
          padding-left: 1.5rem;
        }

        article li {
          line-height: 1.75;
          letter-spacing: 0.2px;
          margin-bottom: 1.25rem;
        }

        article a {
          color: var(--primary-800);
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

        @media screen and (min-width: 768px) {
          article h2 { font-size: 27px; }
          
          article p,
          article em,
          article a,
          article li { font-size: 20px; }
        }
      `}</style>
    </div>
  )
}