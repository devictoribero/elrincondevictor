import Link from 'next/link'
import {Layout} from '../components/layout/Layout'
import {SeoMetaInfo} from '../components/layout/SeoMetaInfo'
import {ProjectsList} from '../components/molecules/ProjectsList'
import {Title,titleSizes,titleTags} from '../components/Atom/Title'
import {Subtitle} from '../components/Atom/Typography/Subtitle'
import {Paragraph} from '../components/Atom/Typography/Paragraph'
import {FiChevronRight} from 'react-icons/fi'
import {MySkills} from '../components/molecules/MySkills'
import {WorkedFor} from '../components/molecules/WorkedFor'
import {ArticlesCardList} from '../components/molecules/ArticlesCardList'
import featuredBlogPosts from '../content/featured-blog-posts.json'

const ArrowRight = () => (
  <FiChevronRight
    size={18}
    aria-hidden="true"
    style={{marginLeft: '0.5rem'}} />
)

export default function Page() {
  return (
    <Layout>
      <SeoMetaInfo />
      <HomeHeader />
      <HomeSection id='side-hustles'>
        <Title size={titleSizes.l} as={titleTags.h2} spacelessTop>
          Side hustles
        </Title>
        <ProjectsList />
      </HomeSection>
      
      <HomeSection>
        <MySkills />
      </HomeSection>

      <HomeSection>
        <WorkedFor />
      </HomeSection>

      <HomeSection>
        <Title size={titleSizes.l} as={titleTags.h2} spacelessTop>
          Some of my articles
        </Title>
        <Paragraph>I write about <Link href='/blog'><a className='link'>some of my learnings and curiosities</a></Link> to keep a track of the things I do. Some articles are longer than others, so expect the unexpected.</Paragraph>
        <ArticlesCardList blogPosts={featuredBlogPosts.list} />
      </HomeSection>

      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        a {
          color: rgb(64, 36, 212);
          position: relative;
          text-decoration: none;
          font-size: 1.125rem;
        }

        a:after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          right: 0;
          height: 2px;
          width: 100%;
          background: currentColor;
          trannsition: width 0.15s ease-in;
        }

        a:hover:after {
          width: 0;
        }

        @media screen and (min-width: 768px) {
          a {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </Layout>
  )
}

function HomeHeader() {
  return (
    <div className='hero container'>
      <Title size={titleSizes.giant} as={titleTags.h1} spacelessTop>
        My name is Victor,<br/> and I'm a user-centric software developer
      </Title>
      <Subtitle>I enjoy learning about everything because I like to challenge my mind. I gain experiencies and knowledge by reading books and connecting with nature and other people's souls. This is why I'm building a worldwide <a href='https://www.chooseyourplant.com'>community for houseplant lovers</a>.</Subtitle>
      <Subtitle>I do sport 🏋️, I love yoga and meditation 🧘, I travel whenever I can 🛫, and I wonder about life.</Subtitle>
      <a className='cta' href='#side-hustles'>Know more <ArrowRight/></a>

      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        a {
          color: rgb(64, 36, 212);
          position: relative;
          text-decoration: none;
          font-size: 1.125rem;
        }

        a:not(.cta):after {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 0;
          right: 0;
          height: 2px;
          width: 100%;
          background: currentColor;
          transition: width 0.15s ease-in;
        }

        a:not(.cta):hover:after {
          width: 0;
        }

        .cta {
          padding: 0.5rem 0;
          text-decoration: none;
          display: flex;
          align-items: center;
        }

        @media screen and (min-width: 768px) {
          a {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </div>
  )
}

function HomeSection({id, children}) {
  return (
    <section id={id} className='container'>
      {children}
      <style jsx>{`
        section {
          margin-top: 5rem;
        }
      `}</style>
    </section>
  )
}