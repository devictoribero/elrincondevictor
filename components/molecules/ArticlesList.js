import {ArticlePreview} from './ArticlePreview';

export function ArticlesList({title, articles}) {
  return (
    <section>
      {title}
      <ul>
        {articles.map(post => (
          <li key={post.slug}>
            <ArticlePreview {...post}/>
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

export function ArticlesListTitle({children}) {
  return (
    <header>
      <h1>{children}</h1>

      <style jsx>{`
        header {
          margin: 0 0 0.5rem 0;
          color: var(--c-grey-900);
        }

        h1 {
          margin: 0;
          font-variant: all-small-caps;
          font-weight: 700;
          font-size: 23px;
        }
      `}</style>
    </header>
  )
}