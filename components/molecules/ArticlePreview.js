import Link from 'next/link'
import PropTypes from 'prop-types'

export function ArticlePreview({title, description, img_preview_src, slug, tags= []}) {
  console.log(img_preview_src)
  return (
    <article>
      <img src={img_preview_src}/>
      <div>
        <h2>
          <Link href='/blog/[slug]' as={`/blog/${slug}`}>
            <a className="title">{title}</a>
          </Link>
        </h2>
        <p>{description}</p>
        <ul>{tags.map(tagName => <li key={tagName}>{tagName}</li>)}</ul>
      </div>
      
      <style jsx>{`
        article {
          background-color: white;
          border-radius: 20px;
          height: 100%;
          box-sizing: border-box;
          box-shadow: 0 10px 30px -10px rgba(1,1,1, 0.1);
        }
        
        div {
          display: flex;
          flex-direction: column;
          padding: 2rem;
        }

        h2 {
          margin: 0;
          color: var(--c-grey-900);
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
          color: var(--c-grey-800);
        }

        .title {
          color: var(--c-primary-900);
          transition: color 0.35 ease;
          font-family: var(--ff-sans-serif);
          text-decoration: none;
          border-bottom: 1px dashed currentColor;
        }
        .title:hover {
          border-bottom: transparent;
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
          padding: 0.15rem 0.35rem;
          background-color: var(--c-grey-000);
          border-radius: 5px;
          color: var(--c-grey-600);
          font-size: 14px;
          list-style: none;
          min-width: 35px;
          font-weight: 600;
          margin-right: 0.5rem;
          margin-bottom: 0.25rem;
          font-family: var(--ff-sans-serif);
          text-align: center;
        }
      `}</style>
    </article>
  )
}
ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img_preview_src: PropTypes.string.isRequired,
}