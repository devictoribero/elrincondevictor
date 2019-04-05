import Head from 'next/head';
import ReactMarkdown from 'react-markdown'
import {PostHeader} from '../molecules/PostHeader'
import {CustomPostLink, CustomPostImg} from '../../helpers/renders';
import {PostsSection, PostSectionTitle} from '../molecules/PostsSection';

export function Post({post: {content, data}, related}) {
  const {posts} = related;
  const hasRelatedPosts = related && posts && posts.length > 0;

  return (
    <div className='page container-wrapper'>
      <Head>
        <title key='title'>{`${data.title} | Elrincondevictor`}</title>
        <meta
          key='description'
          name='description'
          content='Productividad, reflexiones, cosas que aprendo y una filosofía de vida para tener una vida equilibrada.'
        />
      </Head>

      <main className='container'>
        <article>
          <PostHeader
            title={data.title}
            imgSrc={data.img_src}
            post={data}
            author={{
              name: 'Victor Ribero',
              imgSrc: 'https://avatars0.githubusercontent.com/u/16169890?s=400&v=4'
            }}/>
          <ReactMarkdown
            source={content}
            escapeHtml={false}
            renderers={{
              link: CustomPostLink,
              image: CustomPostImg,
            }} />
        </article>
        <div>
          <aside>
            {hasRelatedPosts && (
              <PostsSection
              title={<PostSectionTitle heading='h2'>Artículos relacionados</PostSectionTitle>}
                posts={posts}/>
            )}
          </aside>
        </div>
      </main>   

      <style jsx global>{`
        article {
          font-size: 18px;
          color: var(--grey-900);
          max-width: 800px;
          font-weight: 300;
        }

        article h2 {
          margin: 2.5rem 0 0.5rem;
        }

        article p,
        article li {
          hyphens: auto;
        }

        article p > img {
          max-width: 100%;
          display: block;
          margin: 0 auto;
        }

        article p {
          line-height: 1.75;
          letter-spacing: 0.2px;
          margin: 0 0 2rem 0;
        }

        article em {
          color: var(--grey-700);
        }

        article strong {
          color: black;
          font-weight: 500;
        }

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