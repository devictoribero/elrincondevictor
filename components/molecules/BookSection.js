import React from 'react'
import PropTypes from 'prop-types'

export function BookSection({id, title, books}) {
  return(
    <section id={id} className="container">
      <header>
        <h2>{title}</h2>  
      </header>

      {books.map(book => (
        <article key={book.title}>
          <h3><a href={book.link} rel="noopener noreferrer">{book.title}</a></h3>
          {/* Alternative text empty because it's not a semantic image */}
          <a tabIndex='-1' href={book.link} rel="noopener noreferrer"><img src={book.img_src} alt=""/></a>
          {book.review.text.map(p => <p>{p}</p>)}
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
      link: PropTypes.string,
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

function getGenreText(genre) {
  if (genre === 'technical') return 'técnico'
  if (genre === 'productivity') return 'productividad'
  if (genre === 'personal_development') return 'desarrollo personal'
  if (genre === 'finances') return 'finanzas'
  if (genre === 'entrepreneurship') return 'emprendedoría'
  if (genre === 'soft_skills') return 'soft skills'
  
  return undefined;
}