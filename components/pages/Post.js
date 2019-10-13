import Head from 'next/head';
import Link from 'next/link';
import {Fragment} from 'react';
import {getRandom} from '../../helpers/random'
import {Article} from '../molecules/Post';
import {PostLayout} from '../layout/PostLayout'
import {PostPreview} from '../molecules/PostPreview'
import {PostSectionTitle} from '../molecules/PostsSection'
import {didYouKnow} from '../../config/did-you-know'

export function Post({
  previous,
  post: {content, data},
  next,
  related,
  randomPost
}) {
  
  let relatedPosts;
  let hasRelatedPosts = false;
  if (related) {
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
                <WhatIHaveLearnt elements={didYouKnow}/>
                <RandomPost post={randomPost} />
                {hasRelatedPosts && <RelatedPosts posts={relatedPosts}/>}
              </aside>
            )}
          />
        </div>
      </div>
    </div>
  )
}

function ComplementarySection({ title, children }){
  return(
    <div>
      <PostSectionTitle heading='h2'>{title}</PostSectionTitle>

      {children}

      <style jsx>{`
        div {
          margin-bottom: 34px;
        }

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
      <ComplementarySection title="You don't know what to read?">
        <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
          <a><span>🎲</span>Prueba suerte</a>
        </Link>

      <style jsx>{`
        a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 10px 30px;
          background-image: linear-gradient(to bottom right, var(--primary-100), var(--primary-300));
          border-radius: 3px;

          color: var(--grey-600);
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
          transition: background-image 0.4s linear, box-shadow 0.15s ease, color 0.15s ease;
          box-shadow: 0 5px 20px 0px rgba(1,1,1,0.15);
          color: var(--primary-800);
        }
        
        a:hover,
        a:focus {
          background-image: linear-gradient(to bottom right, var(--primary-200), var(--primary-400));
          box-shadow: 0 7px 9px -1px rgba(1,1,1,0.15);
          color: var(--primary-900);
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
    </ComplementarySection>
  )
}

function RelatedPosts({posts}){
  return(
    <ComplementarySection title='Artículos relacionados'>
      {posts.map(post => <PostPreview key={post.slug} hasImage={false} {...post}/>)}

      <style jsx>{`
        div {
          margin-bottom: 34px;
        }
      `}</style>
    </ComplementarySection>
  )
}

function PreviousNextArticles({previous, next}){
  return(
    <ul>
      {previous && (
        <li>
          <Link href={`/blog?slug=${previous.slug}`} as={`/blog/${previous.slug}`} prefetch>
            <a className="link-like">← {previous.title}</a>
          </Link>
        </li>
      )}

      {next && (
        <li>
          <Link href={`/blog?slug=${next.slug}`} as={`/blog/${next.slug}`} prefetch>
            <a className="link-like">{next.title} →</a>
          </Link>
        </li>
      )}

      <style jsx>{`
        ul {
         display: flex;
         flex-direction: column; 
         margin: 0;
         padding: 0;
        }

        li {
          list-style: none;
          margin-bottom: 1rem;
        }

        a {
          transition: all 0.25s ease;
          line-height: 1.5;
          font-size: 18px;
        }

        span {
          display: block;
          font-size: 35px;
        }
      `}</style>
    </ul>
  )
}

function WhatIHaveLearnt({elements}) {
  const element = getRandom(elements)
  return(
    <ComplementarySection title='Did you know ...?'>
      <ul className='complementaryBar' dangerouslySetInnerHTML={getThingsLearnt({element})}>
      </ul>

      <style global jsx>{`
        .complementaryBar { margin: 0; padding: 0; }

        .complementaryBar code {
          background: linear-gradient(to right, var(--primary-000), var(--primary-100));
          border-radius: 3px;
          padding: 2px 4px;
          hyphens: auto;
          font-size: 16px;
        }

        .complementaryBar p {
          list-style: none;
          line-height: 1.5;
          color: var(--grey-800);
          font-size: 18px;
          font-weight: 300;
          margin: 0 0 16px 0;
        }

        .complementaryBar a {
          color: var(--primary-800);
        }
      `}</style>
    </ComplementarySection>
  )
}

function getThingsLearnt({element}){
  let __html = '';

  element.data.map((el, i) => {
    __html += `<p>${el}</p>`
  })

  return {__html};
}