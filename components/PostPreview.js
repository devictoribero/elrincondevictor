import Link from 'next/link'

export default function PostPreview({
  title, description, imgSrc, slug, link
}) {
  return (
    <article>
      <figure className='overlay'>
        <img src={imgSrc} alt="" role="presentation"/>
      </figure>

      <div>
        <h2>
          <Link href={link}>
            <a
              className="titleLink"
              rel="nofollow noopener noreferrer"
              target='_blank'>{title}</a>
          </Link>
        </h2>
        <p>{description}</p>
        <Link href={link}>
          <a
            className="readMore"
            rel="nofollow noopener noreferrer"
            target='_blank'>Leer más</a>
        </Link>
      </div>
      

      <style jsx>{`
        img {
          width: 100%;
          border-radius: 3px;
          position: relative;
          object-fit: cover;
          display: block;
        }

        figure {
          position: relative;
          margin: 0;
        }

        div {
          padding: 15px 0;
        }

        h2 {
          margin: 0;
          color: #423D33;
          font-size: 22px;
          font-weight: bold;
        }

        .titleLink {
          display: block;
        }

        p {
          font-size: 18px;
          margin: 8px 0 16px;
          line-height: 1.75;
          color: #625D52;
        }

        a {
          text-decoration: none;
          color: initial;
        }
        
        a:hover,
        a:focus {
          text-decoration: underline;
        }

        .readMore {
          color: #B44D12;
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
            height: 200px;
          }
        }
      `}</style>
    </article>
  )
}