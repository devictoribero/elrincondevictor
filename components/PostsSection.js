import PostPreview from './PostPreview'

export default function PostsSection({title, posts}) {
  return (
    <section>
      <h1>{title}</h1>
      <div>
        {posts.map(post => <PostPreview key={post.slug} {...post}/>)}
      </div>

      <style jsx>{`
        h1 {
          position: relative;
          margin: 0 0 16px 0;
          color: #27241D;
        }

        h1:after {
          content: "";
          position: absolute;
          height: 2px;
          width: 50px;
          background: #27241D;
          top: 51%;
          margin-left: 10px;
        }

        div {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 1.5rem;
        }
      `}</style>
    </section>
  )
}