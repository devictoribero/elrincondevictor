import {PostPreview} from './PostPreview';

export function PostsSection({title, posts}) {
  return (
    <section>
      {title}
      <div className="content">
        {posts.map(post => <PostPreview key={post.slug} {...post}/>)}
      </div>

      <style jsx>{`
        .content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 1.5rem;
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
          margin: 0 0 16px 0;
          color: var(--grey-900);
        }

        h1, h2, h3, h4, h5, h6 {
          position: relative;
          margin: 0;
        }

        h1:after,
        h2:after,
        h3:after,
        h4:after,
        h5:after,
        h6:after {
          content: "";
          position: absolute;
          height: 2px;
          width: 50px;
          background: var(--grey-900);
          top: 51%;
          margin-left: 10px;
        }
      `}</style>
    </header>
  )
}