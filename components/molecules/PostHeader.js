import {months} from '../../helpers/months';

export function PostHeader({title, author, createdAt, updatedAt, imgSrc}) {
  const publicationDate = new Date(createdAt);
  const day = publicationDate.getDate();
  const month = months[publicationDate.getMonth()];
  const year = publicationDate.getFullYear();

  return (
    <header className='PostHeader'>
      <figure>
        <img src={imgSrc} alt="" role="presentation"/>
      </figure>

      <div className='box'>
        <PublicationDetails
          day={day}
          month={month}
          year={year}
          author={author}/>
        <h1>{title}</h1>
        
      </div>
      

      <style jsx>{`
        .PostHeader {
          margin-bottom: 3rem;
        }

        .PostHeader > figure {
          margin: 0;
          position: relative;
          z-index: -1;
        }

        .PostHeader > figure:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.5)  )
        }

        .PostHeader img {
          display: block;
          width: 100%;
          border-radius: 3px;
          object-fit: cover;
        }

        .box {
          padding: 1.5rem;
          margin: -3rem auto 0 auto;
          border-radius: 20px;
          width: 95%;
          box-shadow: 0 5px 20px -2px rgba(1,1,1,0.1);
          background-color: white;
          box-sizing: border-box;
        }

        h1 {
          margin: 0.5rem 0 0;
          color: var(--primary-500);
          font-size: 1.5rem;
          font-family: var(--font-family-alter);
          line-height: 1.5;
          letter-spacing: 0.5px;
        }

        @media screen and (min-width: 768px) {
          .PostHeader img {
            height: 300px;
          }

          .box { padding: 2rem; }

          h1 {
            font-size: 2rem;
            line-height: 1.35;
          }
        }
      `}</style>
    </header>
  )
}

function PublicationDetails({day, month, year, author}) {
  return (
    <span className='wrapper'>
        <a
          className='link-like link social'
          rel="nofollow noopener noreferrer"
          target='_blank'
          href='https://twitter.com/devictoribero'>
          @devictoribero,
        </a>
      <time>{day} {month} del {year}</time>.

      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: center;
          color: var(--grey-600);
          font-size: 0.9rem;
          font-weight: 500;
          flex-wrap: wrap;
        }

        time {
          margin-left: 0.25rem;
        }
      `}</style>
    </span>
  )
}