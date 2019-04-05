import Head from 'next/head';
import {BlogArticle} from '../molecules/BlogArticle';
import {PostsSection, PostSectionTitle} from '../molecules/PostsSection';

export function Post({post: {content, data}, related}) {
  const {posts} = related;
  const hasRelatedPosts = related && posts && posts.length > 0;

  return (
    <div className='page'>
      <Head>
        <title key='title'>{`${data.title} | Elrincondevictor`}</title>
        <meta
          key='description'
          name='description'
          content='Productividad, reflexiones, cosas que aprendo y una filosofía de vida para tener una vida equilibrada.'
        />
      </Head>

      <div className='container-wrapper'>
        <div className='container postpagelayout'>
          <main>
            <BlogArticle data={data} content={content}/>
          </main>   

          <div>
            <aside>
              {hasRelatedPosts && (
                <PostsSection
                  title={(
                    <PostSectionTitle heading='h2'>
                      Artículos relacionados
                    </PostSectionTitle>
                  )}
                  posts={posts}/>
              )}
            </aside>
          </div>
        </div>
      </div>

      

      <style jsx>{`
        aside {
          padding: 30px;
          background: var(--primary-000)
        }

        @media screen and (min-width: 1024px) {
          .postpagelayout {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-gap: 2rem;
          }
        }

        @media screen and (min-width: 1400px) {
          .postpagelayout {
            grid-gap: 5rem;
          }
        }
      `}</style>
    </div>
  )
}