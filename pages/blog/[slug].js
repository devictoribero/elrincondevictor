import React from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Error from "../_error";
import { Layout } from "../../components/layout/Layout";
import { SeoMetaInfo } from "../../components/layout/SeoMetaInfo";
import { ArticleHeader } from "../../components/molecules/ArticleHeader";
import { CustomPostLink, CustomPostImg } from "../../helpers/renders";
import { Paragraph } from "../../components/Atom/Typography/Paragraph";
import { List } from "../../components/Atom/List";
import { ListItem } from "../../components/Atom/ListItem";
import { Blockquote } from "../../components/Atom/Blockquote";

export default function Page({ article }) {
  if (!article) return <Error statusCode={404} />;

  const { data, content } = article;
  return (
    <Layout>
      <SeoMetaInfo
        title={`${article.data.title} | Elrincondevictor`}
        description={`${article.data.description}`}
        image={`https://elrincondevictor.com/img/social-media/${article.data.slug}.png`}
        canonical={`https://www.elrincondevictor.com/blog/${article.data.slug}`}
      />
      <main>
        <article>
          <ArticleHeader
            tags={data.tags}
            title={data.title}
            date={data.date}
            imageSrc={data.img_src}
          />
          <div className="container container--boxed">
            <ReactMarkdown
              source={content}
              escapeHtml={false}
              renderers={{
                link: CustomPostLink,
                image: CustomPostImg,
                paragraph: Paragraph,
                list: List,
                listItem: ListItem,
                blockquote: Blockquote,
              }}
            />
          </div>
        </article>
      </main>
      <style jsx global>{`
        article {
          font-size: 1.25rem;
          color: var(--c-grey-900);
          font-weight: 300;
          font-family: var(--ff-serif);
        }

        article h1,
        article h2,
        article h3,
        article h4,
        article h5,
        article h6 {
          font-family: var(--ff-sans-serif) !important;
          letter-spacing: -0.5px;
        }

        article h1 {
          line-height: 1.25;
          letter-spacing: -1.75px;
        }

        article h2 {
          margin: 3rem 0 2rem;
          font-weight: 700;
          font-size: 32px;
          line-height: 1.25;
        }

        article h3,
        article h4 {
          margin-top: 3rem;
        }

        article p > img {
          max-width: 100%;
          display: block;
          margin: 3rem auto;
          border-radius: 10px;
        }

        article strong {
          color: black;
          font-weight: 500;
        }

        article hr {
          background-color: rgb(232, 229, 248);
          margin: 3rem 0;
          height: 2px;
          border: none;
          border-radius: 54px;
        }

        img {
          box-shadow: 0 10px 25px -10px rgb(1 1 1 / 10%),
            0 5px 15px -5px rgb(1 1 1 / 10%);
        }

        img > img + article h2 {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const articlesJSON = require("../../content/index.json").list;
  const articles = Object.values(articlesJSON);
  console.log(articles);
  const articlesPublished = articles.filter((article) => article.isPublished);
  const articlesSlugs = articlesPublished.map((article) => article.slug);

  const routingPaths = articlesSlugs.filter(Boolean).map((slug) => {
    return { params: { slug } };
  });

  return {
    paths: routingPaths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const article = await getPost({ slug });
  const relatedArticles = await getRelatedArticlesTo({ article });

  return {
    props: {
      article: article,
      relatedArticles: relatedArticles,
    },
  };
}

// get a blog info and parse it
async function getPost({ slug }) {
  const contentModule = await require(`../../content/${slug}.md`);
  const articleParsed = matter(contentModule.default);

  return {
    content: articleParsed.content,
    data: {
      ...articleParsed.data,
      // Logic to avoid NextJS serialization error
      date: articleParsed.data.date ? `${articleParsed.data.date}` : null,
    },
  };
}

async function getRelatedArticlesTo({ article }) {
  const { list: articlesList } = await require(`../../content/index.json`);

  let similarArticles = [];
  article.data.tags.forEach((tag) => {
    articlesList.filter((article) => {
      article.tags.includes(tag) && similarArticles.push(article);
    });
  });

  // this makes sure there are not items repeated
  return [...new Set(similarArticles)];
}
