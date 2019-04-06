import Head from 'next/head';
import Link from 'next/link'
import {Article} from '../molecules/Post';
import {PostLayout} from '../layout/PostLayout';
import {PostPreview} from '../molecules/PostPreview';
import {PostSectionTitle} from '../molecules/PostsSection';

export function Post({post: {content, data}, related, randomPost}) {
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
            article={<Article data={data} content={content}/>}
            complementary={(
              <aside>
                {<RandomPost post={randomPost} />}
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
function RelatedPostsTitle(){
  return(
    <PostSectionTitle heading='h2'>Artículos relacionados</PostSectionTitle>
  )
}

function RandomPost({post}){
  const {slug} = post;

  return(
    <div>
      <header>
        <PostSectionTitle heading='h2'>¿No sabes que leer?</PostSectionTitle>
      </header>
      <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
        <a><span>🎲</span>Prueba suerte</a>
      </Link>

      <style jsx>{`
        header {
          margin: 0 0 16px 0;
          color: var(--grey-900);
        }
        
        h2 {
          font-size: 21px;
          margin: 0;
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
      <RelatedPostsTitle/>
      <PostPreview {...post}/>

      <style jsx>{`
        div {
          margin-top: 34px;
        }
      `}</style>
    </div>
  )
}