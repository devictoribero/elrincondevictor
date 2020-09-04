import React from 'react'
import Error from '../_error'
import {SeoMetaInfo} from '../../components/layout/SeoMetaInfo'
import {Layout} from '../../components/layout/Layout'
import {
  ArticlesList,
  ArticlesListTitle
} from '../../components/molecules/ArticlesList'


export default function Blog({pathname, articles}) {
  if (!articles) return <Error statusCode={404} />

  return (
    <Layout route={pathname}>
      <SeoMetaInfo
        title='Welcome to my corner · Elrincondevictor'
        description='Productivity, thoughts, things I learn and do and a life style to have a healthy and balanced life.'
        canonical='https://www.elrincondevictor.com/blog'
      />
      <Header
        title='This is my corner, where I share my experiences and curiosities.'
        subtitle='I talk about a healthy lifestyle, products, software development and entrepreneurship.'/>
      <main className='container-wrapper'>
        <div className='container'>
          <ArticlesList
            title={<ArticlesListTitle>Articles</ArticlesListTitle>}
            articles={articles}/>  
        </div>
      </main>
    </Layout>
  )
}


Blog.getInitialProps = async ({pathname, query}) => {
  const {list} = await require(`../../content/index.json`);
  return {pathname, articles: list}
}

function Header({title, subtitle}) {
  return (
    <header role="banner">
      <div className='container-wrapper'>
        <div className='container'>
          <h1>{title}</h1>
          <p>{subtitle}</p>
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

        h1 {
          margin: 0 auto 1rem auto;
          font-size: 42px;
          line-height: 1.15;
          font-weight: 900;
        }

        p {
          display: block;
          margin: 0.75rem auto;
          color: var(--c-grey-900);
          font-size: 21px;
          line-height: 1.75;
        }

        @media screen and (min-width: 768px) {
          header {
            margin-bottom: 50px;
          }
        }
      `}</style>
    </header>
  )
}
