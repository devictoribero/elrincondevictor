import PostPreview from './PostPreview'

export default function PostsSection({title, posts}) {
  return (
    <section>
      <h1>{title}</h1>
      <div>
        {posts.map(({title, description, slug, imgSrc}) => (
          <PostPreview
            key={slug}
            title={title}
            description={description}
            imgSrc={imgSrc}
          />
        ))}
      </div>

      <style jsx>{`
        h1 {
          margin: 0 0 16px 0;
          color: #423D33;
        }

        div {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 1rem;
        }
      `}</style>
    </section>
  )
}