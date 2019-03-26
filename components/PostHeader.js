import {months} from '../helpers/months';

export default function Post({post}) {
  const publicationDate = new Date(post.date);
  const day = publicationDate.getDate();
  const month = months[publicationDate.getMonth()];
  const year = publicationDate.getFullYear();
  const author = {
    name: 'Victor Ribero',
    img_src: 'https://avatars0.githubusercontent.com/u/16169890?s=400&v=4'
  }

  return (
    <header>
      <figure>
        <img src={'https://cdn-images-1.medium.com/max/2400/1*7gKayn-ihEADJ9jOhdMHMQ.jpeg'} alt="" role="presentation"/>
      </figure>
      <h1>{post.meta_title}</h1>

      <PublicationDetails
        day={day}
        month={month}
        year={year}
        author={author}/>

      <style jsx global>{`
        header {
          margin-bottom: 3rem;
        }

        figure {
          margin: 0;
          position: relative;
          z-index: -1;
        }

        figure:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1));
        }

        figure img {
          display: block;
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 3px;
        }

        h1 {
          color: transparent;
          -webkit-text-stroke: 1px var(--grey-600);
          text-shadow: 2px 2px var(--primary-400);
          font-size: 36px;
          line-height: 1.5;
          letter-spacing: 0.5px;
          margin: -5rem 0 0;
        }

        @media screen and (min-width: 768px) {
          figure img {
            height: 300px;
          }

          h1 {
            text-shadow: 4px 3px var(--primary-400);
            font-size: 50px;
            line-height: 1.25;
            margin: -7rem 0 0 0;
          }
        }
      `}</style>
    </header>
  )
}

function PublicationDetails({day, month, year, author}) {
  return (
    <span>
      <img
        src={author.img_src}
        alt={`Fotografía de ${author.name}, el autor de este artículo.`}/>
      {author.name},
      <time>{day} {month} del {year}</time>.

      <style jsx>{`
        span {
          display: flex;
          align-items: center;
          margin-top: 1rem;
          color: var(--grey-600);
        }

        img {
          width: 30px;
          height: 30px;
          margin-right: 0.25rem;
          border-radius: 100%;
          border: 2px solid var(--primary-400);
        }

        time {
          margin-left: 0.25rem;
        }
      `}</style>
    </span>
  )
}