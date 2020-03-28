import {months} from '../../helpers/months';

export function PostHeader({title, author, createdAt, updatedAt, imgSrc}) {
  console.log(createdAt)
  const publicationDate = new Date(createdAt);
  const day = publicationDate.getDate();
  const month = months[publicationDate.getMonth()];
  const year = publicationDate.getFullYear();

  return (
    <header>
      <h1><span>{title}</span></h1>
      <span className='publication-details'>
        <a
          className='link-like link social'
          rel="nofollow noopener noreferrer"
          target='_blank'
          href='https://twitter.com/devictoribero'>
          @devictoribero,
        </a>
        <time>{day}th {month} {year}</time>.
      </span>
      

      <style jsx>{`
        header {
          min-height: 200px;
          display: flex;
          flex-direction: column;
          padding: 3rem 0;
          box-sizing: border-box;
          background-image: url(${imgSrc});
          background-size: cover;
        }

        h1 > span, time, a {
          background-color: white;
        }

        h1 {
          margin: 0 0 0.5rem 0;
          color: var(--grey-900);
          font-size: 1.5rem;
          font-family: var(--font-family-alter);
          line-height: 1.5;
          letter-spacing: 0.5px;
          display: inline-block;
        }

        .publication-details {
          color: var(--grey-800);
          font-size: 1rem;
        }

        @media screen and (min-width: 768px) {
          header {
            min-height: 300px;
          }

          h1 {
            font-size: 2rem;
            line-height: 1.35;
          }
        }
      `}</style>
    </header>
  )
}
