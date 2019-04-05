import Head from 'next/head';
import {Article} from '../molecules/Post';
import {PostLayout} from '../layout/PostLayout';
import {PostPreview} from '../molecules/PostPreview';
import {PostSectionTitle} from '../molecules/PostsSection';

export function Post({post: {content, data}, related}) {
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
        <link key="canonical" rel="canonical" href={`https://www.elrincondevictor.com/blog/${slug}`}/>
      </Head>

      <div className='container-wrapper'>
        <div className='container'>
          <PostLayout
            article={<Article data={data} content={content}/>}
            complementary={
              hasRelatedPosts && (
                <aside>
                  <RelatedPostsTitle/>
                  <PostPreview {...relatedPosts[0]}/>
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
const RelatedPostsTitle = () => <PostSectionTitle heading='h2'>Artículos relacionados</PostSectionTitle>;