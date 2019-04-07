import Head from 'next/head';
import Link from 'next/link';
import {Fragment} from 'react';
import {Article} from '../molecules/Post';
import {PostLayout} from '../layout/PostLayout';
import {PostPreview} from '../molecules/PostPreview';
import {PostSectionTitle} from '../molecules/PostsSection';

export function Post({
  previous,
  post: {content, data},
  next,
  related,
  randomPost
}) {
  
  let relatedPosts;
  let hasRelatedPosts = false;
  if(related) {
    const {posts} = related;
    relatedPosts = posts;
    hasRelatedPosts = related && posts && posts.length > 0;
  }

  return (
    <div className='page'>
      <Head>
        <title key='title'>{`${data.title} | Elrincondevictor`}</title>
        <meta
          key='description'
          name='description'
          content='Productividad, reflexiones, cosas que aprendo y una filosofía de vida para tener una vida equilibrada.'
        />
        <link key="canonical" rel="canonical" href={`https://www.elrincondevictor.com/blog/${data.slug}`}/>
      </Head>

      <div className='container-wrapper'>
        <div className='container'>
          <PostLayout
            main={(
              <Fragment>
                <Article data={data} content={content}/>
                <PreviousNextArticles previous={previous} next={next}/>
              </Fragment>
            )}
            complementary={(
              <aside>
                <RandomPost post={randomPost} />
                {hasRelatedPosts && <RelatedPosts post={relatedPosts[0]}/>}
              </aside>
            )}
          />
        </div>
      </div>

      <style jsx>{`
        aside {
          position: sticky;
          top: 50px;
        }
      `}</style>
    </div>
  )
}

function ComplementarySection({ title, children }){
  return(
    <div>
      <header>
        <PostSectionTitle heading='h2'>{title}</PostSectionTitle>
      </header>

      {children}

      <style jsx>{`
        header {
          margin: 0 0 16px 0;
          color: var(--grey-900);
        }
        
        h2 {
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </div>
  )
}
function RandomPost({post}){
  const {slug} = post;

  return(
    <div>
      <ComplementarySection title='¿No sabes que leer?'>
        <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
          <a><span>🎲</span>Prueba suerte</a>
        </Link>
      </ComplementarySection>

      <style jsx>{`
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

        @media screen and (min-width: 1024px) {
          a {
            display: flex;
          }
        }
      `}</style>
    </div>
  )
}

function RelatedPosts({post}){
  return(
    <div>
      <ComplementarySection title='Artículos relacionados'>
        <PostPreview {...post}/>
      </ComplementarySection>

      <style jsx>{`
        div {
          margin-top: 34px;
        }
      `}</style>
    </div>
  )
}

function PreviousNextArticles({previous, next}){
  return(
    <div>
      {previous && (
        <a>
          <span>👈</span>
          {previous.title}
        </a>
      )}

      {next && (
        <a>
          <span>👉</span>
          {next.title}
        </a>
      )}

      <style jsx>{`
        div {
          margin-top: 34px;
        }
      `}</style>
    </div>
  )
}