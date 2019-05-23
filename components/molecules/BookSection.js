import React from 'react'
import PropTypes from 'prop-types'

export function BookSection({id, title, books}) {
  return(
    <section id={id} className="container">
      <header>
        <h2>{title}</h2>  
      </header>

      {books.map(({title, link, img_src, review}) => (
        <article key={title}>
          <h3><a href={link} rel="noopener noreferrer">{title}</a></h3>
          {/* Alternative text empty because it's not a semantic image */}
          <a tabIndex='-1' href={link} rel="noopener noreferrer"><img src={img_src} alt=""/></a>
          {review.text.map((p, index) => <p key={index}>{p}</p>)}
          {link && (
            <ul>
              {link.en && (
                <li>
                  <a aria-label={`Consigue el libro ${title} en inglés`} href={link.en} rel="noopener noreferrer nofollow">
                    Consigue el libro en inglés
                  </a>
                </li>
              )}
              {link.es && (
                <li>
                  <a aria-label={`Consigue el libro ${title} en castellano`} href={link.es} rel="noopener noreferrer nofollow">
                    Consigue el libro en castellano
                  </a>
                </li>
              )}
            </ul>
          )}
        </article>
      ))}  

      <style jsx>{`
        section {
          display: grid;
          padding: 3rem 0;
        }

        section:not(:last-of-type) {
          border-bottom: 1px solid var(--grey-100);
        }

        article {
          max-width: 800px;
          box-sizing: border-box;
        }

        article:not(:last-of-type) {
          margin-bottom: 2rem;
        }

        header { margin-bottom: 1rem; }
        h2 { margin: 0; }

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

        ul a {
          color: var(--primary-800);
          text-decoration: none;
          box-shadow: 0 1px 0 0 currentColor;
        }

        ul a:hover, ul a:active {
          box-shadow: none;
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
    </section>
  )
}
BookSection.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  )
}