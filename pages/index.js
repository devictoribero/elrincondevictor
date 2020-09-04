import {Layout} from '../components/layout/Layout'
import {SeoMetaInfo} from '../components/layout/SeoMetaInfo'

export default function Page() {
  return (
    <Layout>
      <SeoMetaInfo />
      <div className='hero container'>
        <h1>My name is Victor,<br/> and I'm a user-centric software developer</h1>
        <p>I enjoy learning about everything because I like to challenge my mind.</p>
        <p>I love to connect with nature and other people's souls. This is why I'm building a worldwide <a href='https://www.chooseyourplant.com'>community for houseplant lovers</a>.</p>
        <p>I do sport 🏋️, I love yoga and meditation 🧘, I read every night, I travel whenever I can 🛫, and I wonder about life.</p>

        <a className='cta primary' href='#intro'>Know more</a>
      </div>

      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        h1, p { margin: 0; }

        h1 {
          font-family: var(--ff-serif);
          color: black;
          margin-bottom: 24px;
          font-size: 2rem;
          line-height: 1.25;
          font-weight: bold;
          letter-spacing: -1px;
        }

        p {
          display: block;
          margin-bottom: 16px;
          color: var(--c-grey-900);
          line-height: 1.5;
        }
        

        p, a {
          font-size: 1.125rem;
        }

        a {
          color: rgb(64, 36, 212);
          position: relative;
          text-decoration: none;
        }
        a:after {
          content: "";
          position: absolute;
          bottom: 5px;
          height: 2px solid currentColor;
          width: 1005;
        }

        .cta {
          padding: 0.5rem 0;
          text-decoration: none;
        }

        @media screen and (min-width: 768px) {
          h1 {
            margin-bottom: 3rem;
            font-size: 3rem;
            letter-spacing: -2px;
          }

          p, a {
            font-size: 1.35rem;
          }

          p {
            width: 700px;
          }
        }

        @media screen and (min-width: 1024px) {
          h1 {
            font-size: 3.5rem;
            width: auto;
          }

          p, a {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </Layout>
  )
}