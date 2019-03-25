import PostPreview from './PostPreview'

export default function PostsSection({title, posts}) {
  return (
    <section className="container-wrapper">
      <div className="container">
        <h1>{title}</h1>
        <div className="content">
          {posts.map(post => <PostPreview key={post.slug} {...post}/>)}
        </div>
      </div>

      <style jsx>{`
        h1 {
          position: relative;
          margin: 0 0 16px 0;
          color: var(--grey-900);
        }

        h1:after {
          content: "";
          position: absolute;
          height: 2px;
          width: 50px;
          background: var(--grey-900);
          top: 51%;
          margin-left: 10px;
        }

        .content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 1.5rem;
        }
      `}</style>
    </section>
  )
}