import Seo from '../pages/Seo'
import {PostsSection, PostSectionTitle} from '../molecules/PostsSection';

export function BlogMainPage({posts, randomPost}) {
  return (
    <div className="page">
      <Seo
        title='Welcome to my corner · Elrincondevictor'
        description='Productivity, thoughts, things I learn and do and a life style to have a healthy and balanced life.'
        canonical='https://www.elrincondevictor.com/blog'
      />
      <Header randomPost={randomPost}/>
      <main className="container-wrapper">
        <PostsSection
          className="container"
          title={<PostSectionTitle heading='h1'>Articles</PostSectionTitle>}
          posts={posts}/>  
      </main>

      <style jsx>{`
        @media screen and (min-width: 768px) {
          main {
            max-width: 700px;
            margin-right: auto;
            margin-left: auto;
          }
        }
      `}</style>
    </div>
  )
}

function Header({randomPost}){
  const {slug} = randomPost;

  return (
    <header role="banner" className="container-wrapper">
      <div className="container">
        <h1>This is my corner, where I share my philosophy of life and curiosities.</h1>
        <p>I talk about a healthy lifestyle, products, software development and entrepreneurship.</p>
      </div>

      <style jsx>{`
        header {
          position: relative;
          padding-top: 25px;
          padding-bottom: 25px;
          margin-bottom: 32px;
        }

        h1 {
          margin: 0 auto 1rem auto;
          font-size: 42px;
          line-height: 1.15;
          font-weight: 900;
        }

        p {
          display: block;
          margin: 0.75rem auto;
          color: var(--grey-900);
          font-size: 21px;
          line-height: 1.75;
        }

        @media screen and (min-width: 768px) {
          header {
            padding-top: 50px;
            padding-bottom: 50px;
          }


          h1 {
            width: 700px;
          }

          p {
            width: 700px;
          }
        }
      `}</style>
    </header>
  )
}