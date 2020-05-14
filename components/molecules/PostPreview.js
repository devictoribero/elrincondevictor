import Link from 'next/link'
import PropTypes from 'prop-types'

export function PostPreview({title, description, slug, tags= []}) {
  return (
    <article>
        <h2>
          <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
            <a className="title">{title}</a>
          </Link>
        </h2>
        <p>{description}</p>
      <ul>
        {tags.map(tagName => <li key={tagName}>{tagName}</li>)}
      </ul>
      
      <style jsx>{`
        article {
          background-color: white;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-sizing: border-box;
        }

        h2 {
          margin: 0;
          color: var(--grey-900);
          font-size: 21px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: -1px;
        }

        p {
          font-size: 16px;
          font-weight: 400;
          margin: 0.75rem 0;
          line-height: 1.6;
          color: var(--grey-800);
        }

        .title {
          color: var(--primary-900);
          transition: color 0.35 ease;
          font-family: var(--ff-sans-serif);
        }
        
        .title:hover,
        .title:focus {
          text-decoration: none;
        }

        ul {
          display: flex;
          padding: 0;
          margin: 0;
          flex-wrap: wrap;
        }
        li {
          color: var(--grey-900);
          font-size: 14px;
          list-style: none;
          text-transform: capitalize;
          min-width: 35px;
          font-weight: 600;
          margin-right: 0.5rem;
          margin-bottom: 0.25rem;

        }
        li:before {
          content: '#';
          font-weight: bold;
        }
      `}</style>
    </article>
  )
}
PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img_preview_src: PropTypes.string.isRequired,
}