import {Layout} from '../components/layout/Layout';

export default function Page() {
  return (
    <Layout>
      <header>
        <h1>Hello,<br/>I'm Victor Ribero.</h1>
        <p>I'm a software engineer 👨‍💻 who likes to connect with other people's souls ❤️ and nature. This is why I'm building <a href='https://www.chooseyourplant.com'>a worldwide community for houseplant lovers</a>.</p>
        <p>I do sport 🏋️, I love yoga 🧘, practice meditation 🙏, travel whenever I can 🛫 and I wonder about life.</p>
      </header>

      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        h1, p { margin: 0; }

        h1 {
          font-family: var(--ff-serif);
          color: var(--c-grey-900);
          margin-bottom: 24px;
          font-size: 60px;
          line-height: 1.125;
          font-weight: bold;
        }

        p {
          display: block;
          margin-bottom: 16px;
          color: var(--c-grey-900);
          font-size: 18px;
          line-height: 1.75;
        }


        a {
          color: var(--c-primary-900);
        }

        @media screen and (min-width: 768px) {
          h1 {
            margin-bottom: 36px;
            font-size: 52px;
          }

          p {
            font-size: 18px;
            width: 600px;
          }
        }
      `}</style>
    </Layout>
  )
}