import Head from 'next/head'
import Link from 'next/link'
import Seo from '../pages/Seo'
import {Article} from '../molecules/Post'
import {PostLayout} from '../layout/PostLayout'

export function Post({
  previous,
  post: {content, data},
}) {
  
  return (
    <div className='page'>
      <Seo
        title={`${data.title} | Elrincondevictor`}
        description={`${data.description}`}
        image={`/static/img/social-media/${data.slug}.png`}
        canonical={`https://www.elrincondevictor.com/blog/${data.slug}`}
      />

      <div className='container-wrapper'>
        <div className='container'>
          <PostLayout
            main={(
              <>
                <Article data={data} content={content}/>
                <PreviousNextArticles previous={previous} next={next}/>
              </>
            )}
          />
        </div>
      </div>
    </div>
  )
}
