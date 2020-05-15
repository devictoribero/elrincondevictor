import {months} from '../../helpers/months';

export function ArticleHeader({title, date}) {
  const publicationDate = new Date(date);
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
          padding: 2rem 0;
        }

        h1 {
          margin: 0 0 0.5rem 0;
          color: var(--c-grey-900);
          font-size: 36px;
          font-family: var(--ff-serif);
          line-height: 1.15;
          display: inline-block;
        }

        a {
          margin-left: 0.25rem;
        }

        span {
          color: var(--c-grey-900);
          font-size: 1rem;
          font-weight: 400;
        }

        time {
          margin-left: 0.25rem;
        }

        @media screen and (min-width: 768px) {
          header {
            padding: 3rem 0;
          }

          h1 {
            font-size: 47px;
          }
        }
      `}</style>
    </header>
  )
}
