import React, {Fragment} from 'react'
import Error from '../_error'
import Seo from '../../components/pages/Seo'
import {Layout} from '../../components/layout/Layout'
import {
  ArticlesSection,
  ArticlesSectionTitle
} from '../../components/molecules/ArticlesSection'


export default function Blog({pathname, articles}) {
  if (!articles) return <Error statusCode={404} />

  return (
    <Layout route={pathname}>
      <div className="page">
        <Seo
          title='Welcome to my corner · Elrincondevictor'
          description='Productivity, thoughts, things I learn and do and a life style to have a healthy and balanced life.'
          canonical='https://www.elrincondevictor.com/blog'
        />
        <Header
          title='This is my corner, where I share my philosophy of life and curiosities.'
          subtitle='I talk about a healthy lifestyle, products, software development and entrepreneurship.'/>
        <main className="container-wrapper">
          <ArticlesSection
            className="container"
            title={<ArticlesSectionTitle heading='h1'>Articles</ArticlesSectionTitle>}
            articles={articles}/>  
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
    </Layout>
  )
}


Blog.getInitialProps = async ({pathname, query}) => {
  const {list} = await require(`../../content/index.json`);
  return {pathname, articles: list}
}

function Header({title, subtitle}) {
  return (
    <header role="banner" className="container-wrapper">
      <div className="container">
        <h1>{title}</h1>
        <p>{subtitle}</p>
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
