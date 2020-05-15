import {PostPreview} from './PostPreview';

export function ArticlesSection({title, articles}) {
  return (
    <section>
      {title}
      <ul>
        {articles.map(post => (
          <li key={post.slug}>
            <PostPreview {...post}/>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 2rem;
          padding: 0;
          margin: 0;
        }

        li {
          list-style: none;
        }
      `}</style>
    </section>
  )
}

export function ArticlesSectionTitle({heading, children}) {
  return (
    <header>
      {heading === 'h1' && <h1>{children}</h1>}
      {heading === 'h2' && <h2>{children}</h2>}
      {heading === 'h3' && <h3>{children}</h3>}
      {heading === 'h4' && <h4>{children}</h4>}
      {heading === 'h5' && <h5>{children}</h5>}
      {heading === 'h6' && <h6>{children}</h6>}      

      <style jsx>{`
        header {
          margin: 0 0 0.5rem 0;
          color: var(--grey-900);
        }

        h1, h2, h3, h4, h5, h6 {
          margin: 0;
          font-variant: all-small-caps;
          font-weight: 700;
        }

        h1 { font-size: 23px; }
        h2 { font-size: 18px; }
        h3 { font-size: 16px; }
      `}</style>
    </header>
  )
}