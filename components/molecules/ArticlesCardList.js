import PropTypes from 'prop-types'
import {Paragraph} from '../Atom/Typography/Paragraph'
import {Card} from './Card'

export function ArticlesCardList({blogPosts}) {
  return(
    <ul className='reset'>
      {blogPosts.map(blogPost => {
        return (
          <li key={blogPost.slug}>
            <Card
              title={blogPost.title}
              link={{text: 'Read article', link: `/blog/${blogPost.slug}`}}>
              <Paragraph>{blogPost.description}</Paragraph>
            </Card>
          </li>
          )
      })}

      <style jsx>{`
        ul {
          margin-top: 3rem;
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 3rem;
        }

        @media screen and (min-width: 1024px) {
          ul {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </ul>
  )
}

ArticlesCardList.propTypes = {
  blogPosts: PropTypes.array.isRequired
}