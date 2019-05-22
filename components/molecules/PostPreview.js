import Link from 'next/link'

export function PostPreview({
  title, description, img_preview_src, slug
}) {
  return (
    <article>
      <img src={img_preview_src} alt="" role="presentation"/>

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
          article {
            display: grid;
            grid-template-columns: 100px auto;
            grid-column-gap: 1rem;
          }

          img {
            display: block;
          }
        }

        @media screen and (min-width: 767px) {
        }
      `}</style>
    </article>
  )
}