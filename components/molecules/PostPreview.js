import Link from 'next/link'
import PropTypes from 'prop-types'

export function PostPreview({title, description, slug, tags= []}) {
  return (
    <article>
      <div>
        <h2>
          <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
            <a className="title">{title}</a>
          </Link>
        </h2>
        <p>{description}</p>
      </div>
      <ul>
        {tags.map(tagName => <li key={tagName}>{tagName}</li>)}
      </ul>
      
      <style jsx>{`
        article {
          background-color: white;
          border-radius: 20px;
          box-shadow: 0 13px 78px -11px rgba(50,50,93,.05), 0 8px 16px -3px rgba(0,0,0,.05), 0 0 5px -10px rgba(0,0,0,.05);
          display: flex;
          flex-direction: column-reverse;
          margin-bottom: 1rem;
          padding: 1.5rem 1.75rem;
        }

        h2 {
          margin: 0;
          color: var(--grey-900);
          font-size: 1.25rem;
          font-weight: 900;
          font-family: var(--font-family-alter);
        }

        h2 > a {
          line-height: 1.4;
          color: var(--grey-900);
        }

        a:after {content: "→";}

        p {
          font-size: 1rem;
          margin: 0.5rem 0;
          line-height: 1.6;
          color: var(--grey-800);
        }

        .title {
          transition: color 0.35 ease;
          text-decoration: none;
        }

        .title:hover,
        .title:focus {
          text-decoration: underline;
        }

        ul {
          display: flex;
          padding: 0;
        }
        li:not(:first-child) { margin-left: 0.5rem;}
        li {
          background-color: var(--primary-100);
          border-radius: 5px;
          color: var(--primary-800);
          font-size: 0.8rem;
          font-weight: 600;
          list-style: none;
          padding: 0.25rem 0.75rem;
        }

        @media screen and (min-width: 768px) {
          article {
            padding: 2rem;
          }
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