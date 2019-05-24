import React from 'react'
import PropTypes from 'prop-types'

export function Book({title, link, img_src, review}) {
  return(
    <article>
      <h3><a href={link} rel="noopener noreferrer">{title}</a></h3>
      {/* Alternative text empty because it's not a semantic image */}
      <a tabIndex='-1' href={link} rel="noopener noreferrer"><img src={img_src} alt=""/></a>
      {review.text.map((p, index) => <p key={index}>{p}</p>)}
      {link && (
        <ul>
          {link.en && (
            <li>
              <BookLink title={title} language='english' url={link.en}>
                Consigue el libro en inglés
              </BookLink>
            </li>
          )}
          {link.es && (
            <li>
              <BookLink title={title} language='spanish' url={link.es}>
                Consigue el libro en castellano
              </BookLink>
            </li>
          )}
        </ul>
      )}

      <style jsx>{`
        article {
          max-width: 800px;
          box-sizing: border-box;
        }

        article:not(:last-of-type) {
          margin-bottom: 2rem;
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 500;
          margin: 0;
          letter-spacing: 0.5px;
          line-height: 1.5;
        }

        h3 > a {
          text-decoration: none;
          color: var(--grey-900);
        }

        img {
          float: left;
          height: 200px;
          margin: 10px 15px 0 0;
          border-radius: 3px;
        }

        p {
          line-height: 1.75;
          font-size: 16px;
          color: var(--grey-700);
        }

        .author {
          display: block;
          margin-bottom: 0.5rem;
          font-style: italic;
        }

        .author > a {
          color: var(--primary-900);
        }

        .genre {
          background: var(--grey-100);
          padding: 3px 10px;
          border-radius: 999px;
          font-size: 12px;
        }

        ul {
          display: flex;
          flex-direction: column;
          padding: 0;
        } 

        li {
          list-style: none;
        }

        li:not(:last-of-type) {
          margin: 0 0 0.5rem 0;
        }

        @media screen and (min-width: 550px) {
          ul {
            flex-direction: row;
          } 

          li:not(:last-of-type) {
            margin: 0 0.5rem 0 0;
          }
          li:not(:last-of-type):after {
            content: ",";
          }
        }
      `}</style>
    </article>
  )
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string
  }),
  link: PropTypes.shape({
    es: PropTypes.string,
    en: PropTypes.string
  }),
  genre: PropTypes.oneOf([
    'technical',
    'productivity',
    'finances',
    'soft_skills',
    'personal_development',
    'entrepreneurship',
    'other'
  ])
}

function BookLink({title, language = 'english', url, children}) {
  return (
    <a
      className="link-like"
      aria-label={`Consigue el libro ${title} en ${language}`}
      rel="noopener noreferrer nofollow"
      href={url}>
      {children}

      <style jsx>{`

       `}</style>
    </a>
  )
}
BookLink.propTypes = {
  title: PropTypes.string.isRequired,
  language: PropTypes.oneOf(['english', 'spanish']),
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}