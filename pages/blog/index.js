import { useState } from "react";
import Error from "../_error";
import { SeoMetaInfo } from "../../components/layout/SeoMetaInfo";
import { Layout } from "../../components/layout/Layout";
import { Title, titleSizes, titleTags } from "../../components/Atom/Title";
import { Subtitle } from "../../components/Atom/Typography/Subtitle";
import { ArticlesCardList } from "../../components/molecules/ArticlesCardList";
import { ButtonCheckbox } from "../../components/Atom/ButtonCheckbox";

const TAGS = {
  ALL: "all",
  TECH: "tech",
  PRODUCTIVITY: "productivity",
  TOUGHTS: "thoughts",
  SEO: "seo",
  UIUX: "ui/ux",
  PRODUCTS: "products",
  ENTREPRENEURSHIP: "entrepreneurship",
};
export default function Blog({ pathname, articles }) {
  if (!articles) return <Error statusCode={404} />;

  const [tagSelected, setTagSelected] = useState();
  const articlesToShow = tagSelected
    ? articles.filter((article) => article.tags.includes(setTagSelected))
    : articles;

  return (
    <Layout>
      <SeoMetaInfo
        title="Welcome to my corner · Elrincondevictor"
        description="Productivity, thoughts, things I learn and do and a life style to have a healthy and balanced life."
        canonical="https://www.elrincondevictor.com/blog"
      />
      <Header
        title="This is my corner, where I share my experiences and curiosities."
        subtitle="I talk about a healthy lifestyle, products, software development and entrepreneurship."
      />
      <main className="container">
        <Title size={titleSizes.l} as={titleTags.h2} spacelessTop>
          Articles
        </Title>
        <div>
          {Object.values(TAGS).map((tag) => {
            <ButtonCheckbox
              name="tag-all"
              isActive={tagSelected === tag}
              onClick={() => setTagSelected(tag)}
            >
              {tag}
            </ButtonCheckbox>;
          })}
        </div>
        <ArticlesCardList blogPosts={articlesToShow} />
      </main>
    </Layout>
  );
}

Blog.getInitialProps = async ({ pathname, query }) => {
  const { list } = await require(`../../content/index.json`);
  return { pathname, articles: list };
};

function Header({ title, subtitle }) {
  return (
    <header role="banner">
      <div className="container-wrapper">
        <div className="container">
          <Title size={titleSizes.giant} as={titleTags.h1} spacelessTop>
            {title}
          </Title>
          <Subtitle>{subtitle}.</Subtitle>
        </div>
      </div>

      <style jsx>{`
        header {
          margin-bottom: 32px;
          margin-bottom: 50px;
          min-height: 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: #f7f7f7;
        }

        @media screen and (min-width: 768px) {
          header {
            margin-bottom: 50px;
          }
        }
      `}</style>
    </header>
  );
}
