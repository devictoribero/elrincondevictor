import ReactMarkdown from 'react-markdown'
import {PostHeader} from './PostHeader'
import {CustomPostLink, CustomPostImg} from '../../helpers/renders';
import {SharePostInSocial} from '../atoms/SharePostInSocial';

export function Article({data, content}) {
  return (
    <article>
      <PostHeader
        title={data.title}
        imgSrc={data.img_src}
        createdAt={data.createdAt}
        authorName={data.author_name}
        authorImgSrc={data.author_img_src}
        author={{
          name: data.author_name,
          imgSrc: data.author_img_src
        }}
      />
      <ReactMarkdown
        source={content}
        escapeHtml={false}
        renderers={{
          link: CustomPostLink,
          image: CustomPostImg,
        }}
      />
      <SharePostInSocial
        social='twitter'
        textToShare={getSharePostText({title: data.title, slug: data.slug})}
      />
      <style jsx global>{`
        article {
          font-size: 1.25rem;
          color: var(--grey-800);
          font-weight: 300;
          margin-bottom: 1.25rem;
        }

        article h2 {
          margin: 3rem 0 1rem;
          font-weight: 700;
          font-size: 32px;
          line-height: 1.15;
        }

        article p > img {
          max-width: 100%;
          display: block;
          margin: 0 auto;
        }

        article > h2 + p {
          margin: 0.5rem 0 0 0;
        }

        article p, 
        article li {
          line-height: 1.75;
          color: var(--grey-900);
          hyphens: auto;
          font-size: 18px;
          font-weight: 400;
        }

        article p + p {
          margin: 1.75rem 0 0 0;
        }

        article > p:last-of-type {
          margin: 3rem 0 2rem 0;
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
          margin: 1.25rem 0 2rem 0;
          padding-left: 1.5rem;
        }

        article li {
          line-height: 1.45;
          margin-bottom: 0.5rem;
        }

        article a {
          color: var(--primary-800);
        }

        article blockquote {
          background: linear-gradient(to bottom right, var(--primary-100), var(--primary-000));
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
          background: linear-gradient(to right,var(--primary-000),var(--primary-100));
          margin: 3rem 0;
          height: 2px;
          border: none;
          border-radius: 54px;
        }

        img > img + article h2 {
          margin-top: 2rem;
        }

        article code {
          font-size: 16px;
        }
      `}</style>
    </article>
  )
}

function getSharePostText({title, slug}) {
  return `Acabo de leer el artículo '${title}' de @victorException ¡Y os lo recomiendo, es la caña! `
    +`Link del artículo👉: ${getPostUrl({slug})}`;
}

function getPostUrl({slug}) {
  return `https://www.elrincondevictor.com/blog/${slug}`;
}