import Link from 'next/link';
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
    </div>
  )
}

function Header({randomPost}){
  const {slug} = randomPost;

  return (
    <header role="banner" className="container-wrapper">
      <div className="container">
        <h1>This is my corner, where I share my philosophy of life.</h1>
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
          font-family: var(--ff-serif);
          margin: 0 0 1rem 0;
          font-size: 2.5rem;
          line-height: 1.15;
          font-weight: 900;
        }

        p {
          display: block;
          margin: 0.75rem 0;
          color: #1d1d1d;
          font-size: 1.25rem;
          letter-spacing: 0.2px;
          line-height: 1.5;
        }

        @media screen and (min-width: 768px) {
          header {
            padding-top: 50px;
            padding-bottom: 50px;
          }


          h1 {
            width: 575px;
          }

          p {
            width: 600px;
          }
        }
      `}</style>
    </header>
  )
}