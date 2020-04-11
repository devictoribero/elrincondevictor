import {months} from '../../helpers/months';

export function PostHeader({title, author, createdAt, updatedAt, imgSrc}) {
  const publicationDate = new Date(createdAt);
  const day = publicationDate.getDate();
  const month = months[publicationDate.getMonth()];
  const year = publicationDate.getFullYear();

  return (
    <header>
      <h1>{title}</h1>
      <span>
        By
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
          padding: 2rem 1rem;
        }

        h1 {
          margin: 0 0 0.5rem 0;
          color: var(--grey-900);
          font-size: 36px;
          font-family: var(--ff-serif);
          line-height: 1.15;
          display: inline-block;
        }

        a {
          margin-left: 0.25rem;
        }

        span {
          color: var(--grey-900);
          font-size: 1rem;
          font-weight: 400;
        }

        time {
          margin-left: 0.25rem;
        }

        @media screen and (min-width: 768px) {
          header {
            padding: 3rem;
            text-align: center;
          }

          header:before,
          header:after {
            position: absolute;
            content: "";
            z-index: -1;
            border-radius: 20px;
          }

          header:before {
            top: 0;
            bottom: -1rem;
            left: -1.5rem;
            right: -1.5rem;
            background-color: #fff4e5;
          }

          header:after {
            height: 75px;
            background: white;
            left: -1rem;
            right: -1rem;
            bottom: -50px;
          }

          h1 {
            font-size: 52px;
          }
        }

        @media screen and (min-width: 1024px) {
          header:before {
            left: -100px;
            right: -100px;
            bottom: -75px;
          }
  
          header:after {
            height: 200px;
            background: white;
            left: -50px;
            right: -50px;
            bottom: -190px;
          }
        }
      `}</style>
    </header>
  )
}
