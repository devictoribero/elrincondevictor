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
          {/* Alternative text empty because it's not a semantic image */}
          <a tabIndex='-1' href={book.link}><img src={book.img_src} alt=""/></a>
          <h3><a href={book.link}>{book.title}</a></h3>
          <span className="author">
            Escrito por <a href="">{book.author.name}</a>
          </span>
          <span className="genre">{getGenreText(book.genre)}</span>
        </article>
      ))}  

      <style jsx>{`
        section {
          display: grid;
          padding: 0;
          margin-top: 2rem;
        }

        section:not(:last-of-type) {
          border-bottom: 1px solid var(--grey-100);
        }

        article {
          box-sizing: border-box;
          padding: 0.5rem 0;
        }

        header { margin-bottom: 1rem; }
        h2 { margin: 0; }

        img {
          float: left;
          height: 100px;
          margin-right: 10px;
          margin-bottom: 10px;
          border-radius: 3px;
        }

        h3 {
          font-size: 1.25rem;
          font-weight: 500;
          margin: 0 0 0.5rem 0;
          letter-spacing: 0.5px;
        }

        h3 > a {
          text-decoration: none;
          color: var(--grey-900);
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