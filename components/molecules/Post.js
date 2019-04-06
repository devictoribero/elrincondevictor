import ReactMarkdown from 'react-markdown'
import {PostHeader} from './PostHeader'
import {CustomPostLink, CustomPostImg} from '../../helpers/renders';

export function Article({data, content}) {
  return (
    <article>
      <PostHeader
        title={data.title}
        imgSrc={data.img_src}
        post={data}
        author={{
          name: 'Victor Ribero',
          imgSrc: 'https://avatars0.githubusercontent.com/u/16169890?s=400&v=4'
        }}/>
      <ReactMarkdown
        source={content}
        escapeHtml={false}
        renderers={{
          link: CustomPostLink,
          image: CustomPostImg,
        }} />

      <style jsx global>{`
        article {
          font-size: 18px;
          color: var(--grey-900);
          font-weight: 300;
        }

        article h2 {
          margin: 2.5rem 0 0.5rem;
        }

        article p,
        article li {
          hyphens: auto;
        }

        article p > img {
          max-width: 100%;
          display: block;
          margin: 0 auto;
        }

        article p {
          line-height: 1.75;
          letter-spacing: 0.2px;
          margin: 0 0 2rem 0;
        }

        article em {
          color: var(--grey-700);
        }

        article strong {
          color: black;
          font-weight: 500;
        }

        article ul,
        article ol {
          padding-left: 1.5rem;
        }

        article li {
          line-height: 1.75;
          letter-spacing: 0.2px;
          margin-bottom: 1.25rem;
        }

        article a {
          color: var(--primary-800);
        }

        article blockquote {
          background: linear-gradient(to right, var(--primary-000), var(--primary-100));
          border-radius: 5px;
          margin: 0;
        }

        article blockquote > p {
          color: var(--primary-900);
          line-height: 2;
          position: relative;
          margin: 3rem 0;
          padding: 1.5rem 2rem;
        }

        article hr {
          background: linear-gradient(to right, var(--primary-000), var(--primary-200));
          margin: 3rem 0;
          height: 5px;
          border: none;
          border-radius: 54px;
        }

        @media screen and (min-width: 768px) {
          article h2 { font-size: 27px; }
          
          article p,
          article em,
          article a,
          article li { font-size: 20px; }
        }
      `}</style>
    </article>
  )
}