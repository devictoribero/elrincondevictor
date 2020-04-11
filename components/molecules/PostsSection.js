import {PostPreview} from './PostPreview';

export function PostsSection({title, posts, className}) {
  return (
    <section className={className}>
      {title}
      <div>
        {posts.map(post => <PostPreview key={post.slug} {...post}/>)}
      </div>
      <style jsx>{`
        div {
          max-width: 800px;
        }
      `}</style>
    </section>
  )
}

export function PostSectionTitle({heading, children}) {
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