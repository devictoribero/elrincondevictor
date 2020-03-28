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
        <Link href={`/blog?slug=${slug}`} as={`/blog/${slug}`} prefetch>
          <a><span>🎲</span>Read a random article</a>
        </Link>
      </div>

      <style jsx>{`
        header {
          position: relative;
          padding-top: 25px;
          padding-bottom: 25px;
          margin-bottom: 32px;
        }

        header:before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: var(--primary-000);
          z-index: -1;
          -webkit-clip-path: polygon(13% 8%, 87% 0, 76% 57%, 10% 71%);
          clip-path: polygon(13% 8%, 87% 0, 76% 57%, 10% 71%);
        }

        h1 {
          font-family: var(--font-family-alter);
          margin: 0 0 2rem 0;
          font-size: 2.5rem;
          line-height: 1.35;
          font-weight: bold;
        }

        p {
          display: block;
          margin: 0.75rem 0;
          color: #1d1d1d;
          font-size: 1.25rem;
          letter-spacing: 0.2px;
          line-height: 2;
        }

        a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
          padding: 10px 30px;
          background-image: linear-gradient(to bottom right, var(--primary-100), var(--primary-300));
          border-radius: 3px;

          color: var(--grey-600);
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
          transition: background-image 0.4s linear, box-shadow 0.15s ease, color 0.15s ease;
          box-shadow: 0 5px 20px 0px rgba(1,1,1,0.15);
          color: var(--primary-800);
        }
        
        a:hover,
        a:focus {
          background-image: linear-gradient(to bottom right, var(--primary-200), var(--primary-400));
          box-shadow: 0 7px 9px -1px rgba(1,1,1,0.15);
          color: var(--primary-900);
        }

        span {
          font-size: 30px;
          margin-right: 10px;
        }

        @media screen and (min-width: 768px) {
          header {
            padding-top: 50px;
            padding-bottom: 50px;
          }

          header::before {
            -webkit-clip-path: polygon(10% 5%, 55% 19%, 54% 64%, 13% 73%);
            clip-path: polygon(10% 5%, 55% 19%, 54% 64%, 13% 73%);
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