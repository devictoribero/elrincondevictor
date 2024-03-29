import { months } from "../../helpers/months";
import { Title, titleSizes, titleTags } from "../Atom/Title";

export function ArticleHeader({ tags, title, date, imageSrc }) {
  const publicationDate = new Date(date);
  const day = publicationDate.getDate();
  const month = months[publicationDate.getMonth()];
  const year = publicationDate.getFullYear();

  return (
    <section>
      <div className="container">
        <ul>
          {tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
        <Title
          align="center"
          size={titleSizes.giant}
          as={titleTags.h1}
          spacelessTop
        >
          {title}
        </Title>
        <span>
          By
          <a
            className="link"
            rel="nofollow noopener noreferrer"
            target="_blank"
            href="https://twitter.com/devictoribero"
          >
            @devictoribero,
          </a>
          <time>
            {day}th {month} {year}
          </time>
          .
        </span>
      </div>

      {imageSrc && (
        <picture>
          <img src={imageSrc} />
        </picture>
      )}

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-bottom: 3rem;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 0;
          margin-top: 0;
          margin-bottom: 1rem;
        }

        li {
          padding: 0 0.5rem;
          border-radius: 3px;
          background-color: rgb(240, 238, 255);
          color: rgb(64, 36, 212);
          margin-right: 1rem;
          font-variant: all-petite-caps;
          list-style: none;
          white-space: nowrap;
          font-size: 1rem;
        }

        a {
          margin-left: 0.25rem;
        }

        span {
          color: var(--c-grey-900);
          font-size: 1rem;
          font-weight: 400;
          margin-top: 2rem;
          display: block;
        }

        time {
          margin-left: 0.25rem;
        }

        // Hero image wrapper
        picture {
          padding-left: 1rem;
          padding-right: 1rem;
          width: 100%;
          max-width: 1400px;
        }

        // Hero image
        img {
          aspect-ratio: 16/9;
          border-radius: 10px;
          margin-top: 2rem;
          width: 100%;
          max-width: 100%;
          object-fit: cover;
          object-position: top;
        }

        @media screen and (min-width: 768px) {
          section {
            min-height: 350px;
          }
        }
      `}</style>
    </section>
  );
}
