import {months} from '../../helpers/months';

export function ArticleHeader({title, date}) {
  const publicationDate = new Date(date);
  const day = publicationDate.getDate();
  const month = months[publicationDate.getMonth()];
  const year = publicationDate.getFullYear();

  return (
    <header>
      <div className='container-wrapper'>
        <div className='container'>
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
        </div>
      </div>

      <style jsx>{`
        header {
          margin-bottom: 50px;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: #f7f7f7;
        }

        h1 {
          margin: 0 0 0.5rem 0;
          color: var(--c-grey-900);
          font-size: 36px;
          font-family: var(--ff-serif);
          line-height: 1.15;
          display: inline-block;
          font-weight: 900;
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
            margin-bottom: 75px;
          }

          h1 {
            font-size: 47px;
          }
        }
      `}</style>
    </header>
  )
}
