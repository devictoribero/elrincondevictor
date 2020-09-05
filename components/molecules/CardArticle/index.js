
import PropTypes from 'prop-types'
import {Card} from '../Card'

export function CardArticle({
  media,
  title,
  link: {
    link,
    text,
  },
  children,
}) {
  return (
    <div>
      {media && (
        <img src={media.src} alt={media.alt} aria-hidden="true"/>
      )}
      <Card title={title} link={{text: text, link: link, href:'blog/[slug].js'}}>
        {children}
      </Card>
        
      <style jsx>{`
        img {
          background-color: #f7f7f7;
          box-sizing: border-box;
          display: block;
          margin-bottom: 2rem;
          min-height: 200px;
          object-fit: cover;
          object-position: center;
          padding: 1rem;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
CardArticle.propTypes = {
  media: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  link: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
    isExternal: PropTypes.bool,
    isComingSoon: PropTypes.bool,
  }).isRequired,
  children: PropTypes.node.isRequired
}