import Link from 'next/link'
import PropTypes from 'prop-types'

export function PostPreview({
  title, description, img_preview_src, slug, hasImage = true, style
}) {
  return (
    <article style={style}>
      {hasImage && <img src={img_preview_src} alt="" role="presentation"/>}

      <div>
        <h2>
          <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
            <a className="title">{title}</a>
          </Link>
        </h2>
        <p>{description}</p>
        <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
          <a className="readMore link-like">Leer más</a>
        </Link>
      </div>
      

      <style jsx>{`
        article:not(:last-of-type) {
          border-bottom: 1px solid var(--grey-100);
        }

        img {
          display: none;
          position: relative;
          width: 100px;
          max-width: 100%;
          height: 100px;
          border-radius: 999px;
          object-fit: cover;
        }

        h2 {
          margin: 0;
          color: var(--grey-900);
          font-size: 22px;
          font-weight: bold;
          font-family: var(--font-family-alter);
        }

        h2 > a {
          line-height: 1.5;
          color: var(--grey-900);
        }

        h2 > a:visited {
          color: var(--grey-800);
        }

        p {
          font-size: 18px;
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

        @media screen and (min-width: 550px) {
          article {
            display: grid;
            /*
              Because the image is not always present so, in case it isn't
              the text will be shown okay
            */
            grid-template-columns: ${hasImage ? '100px auto' : 'auto auto'};
            grid-column-gap: 1.5rem;
          }

          img {
            display: block;
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