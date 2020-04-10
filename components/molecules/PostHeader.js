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
          position: relative;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          padding: 3rem 0;
          box-sizing: border-box;
        }
        header:after {
          content: "";
          background-image: url(${imgSrc});
          background-size: cover;
          background-color: var(--primary-700);
          background-blend-mode: overlay;
          border-radius: 20px;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          position: absolute;
          opacity: 0.3;
          z-index: -1;
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

        h1 span {
          background-color: white;
          padding: 0.15rem 0.75rem;
          border-radius: 10px;
        }

        .publication-details {
          color: var(--grey-800);
          font-size: 1rem;
        }

        .publication-details time,
        .publication-details a {
          background-color: white;
          padding: 0.1rem 0.5rem;
          border-radius: 3px;

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
