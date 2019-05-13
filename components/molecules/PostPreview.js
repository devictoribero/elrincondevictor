import Link from 'next/link'

export function PostPreview({
  title, description, img_preview_src, slug
}) {
  return (
    <article>
      <figure className='overlay'>
        <img src={img_preview_src} alt="" role="presentation"/>
      </figure>

      <div>
        <h2>
          <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
            <a>{title}</a>
          </Link>
        </h2>
        <p>{description}</p>
        <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
          <a className="readMore">Leer más</a>
        </Link>
      </div>
      

      <style jsx>{`
        figure {
          position: relative;
          margin: 0;
        }

        img {
          width: 100%;
          border-radius: 5px;
          position: relative;
          object-fit: cover;
          display: block;
        }

        div {
          padding: 15px 0;
        }

        h2 {
          margin: 0;
          color: var(--grey-900);
          font-size: 22px;
          font-weight: bold;
        }

        h2 > a {
          color: var(--grey-900);
        }

        h2 > a:visited {
          color: var(--grey-800);
        }

        p {
          font-size: 18px;
          margin: 8px 0 8px;
          line-height: 1.75;
          color: var(--grey-700);
        }

        a {
          transition: color 0.35 ease;
          text-decoration: none;
        }

        a:hover, a:focus {
          text-decoration: underline;
        }

        .readMore {
          color: var(--primary-900);
        }

        .readMore:after {
          content: "→";
        }

        @media screen and (min-width: 550px) {
          img {
            height: 150px;
          }
        }

        @media screen and (min-width: 767px) {
          img {
            height: 175px;
          }
        }
      `}</style>
    </article>
  )
}