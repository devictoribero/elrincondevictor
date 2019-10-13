import Link from 'next/link'
import PropTypes from 'prop-types'

export function PostPreview({
  title, description, img_preview_src, slug, hasImage = true
}) {
  return (
    <article>
      <div className='wrapper-content'>
        <h2>
          <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
            <a className="title">{title}</a>
          </Link>
        </h2>
        <p>{description}</p>
        <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
          <a className="readMore link-like">read more</a>
        </Link>
      </div>
      
      <style jsx>{`
        article {
          position: relative;
          margin-bottom: 1rem;
        }

        article::before {
          position: absolute;
          content: "";
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-image: url(${img_preview_src});
          background-repeat: no-repeat;
          border-radius: 50px;
          z-index: -1;
        }
        
        .wrapper-content {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 13px 78px -11px rgba(50,50,93,.05), 0 8px 16px -3px rgba(0,0,0,.05), 0 0 5px -10px rgba(0,0,0,.05);
        }

        h2 {
          margin: 0;
          color: var(--grey-900);
          font-size: 1.5rem;
          font-weight: 900;
          font-family: var(--font-family-alter);
        }

        h2 > a {
          line-height: 1.5;
          color: var(--grey-900);
        }

        p {
          font-size: 1.15rem;
          margin: 4px 0;
          line-height: 1.75;
          color: var(--grey-700);
        }

        .title {
          transition: color 0.35 ease;
          text-decoration: none;
        }

        .title:hover,
        .title:focus {
          text-decoration: underline;
        }

        .readMore:after {
          content: "→";
        }

        @media screen and (min-width: 768px) {
          article {
            padding-left: 1rem;
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
  hasImage: PropTypes.bool
}