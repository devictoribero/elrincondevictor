import Link from 'next/link'

export default function PostPreview({
  title, description, imgSrc, slug, className
}) {
  return (
    <article className={className}>
      <img src={imgSrc}/>
      <div>
        <h2>
          <Link href={`/blog/${slug}`}>
            <a className="titleLink" >{title}</a>
          </Link>
        </h2>
        <p>{description}</p>
        <Link href={`/blog/${slug}`}>
          <a className="readMore">Leer más</a>
        </Link>
      </div>
      

      <style jsx>{`
        article {
          position: relative;
          margin-bottom: 32px;
          box-shadow: 0px 5px 15px 0px rgba(130,136,147,0.15)
        }

        img {
          width: 100%;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
          position: relative;
          object-fit: cover;
        }

        img:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: rgba(1,1,1,1);
        }

        div {
          padding: 30px;
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
          margin: 8px 0 24px;
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
          color: #7BB026;
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