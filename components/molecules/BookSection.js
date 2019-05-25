import React from 'react'
import PropTypes from 'prop-types'
import {Book} from './Book'

export function BookSection({id, title, books}) {
  return(
    <section id={id} className="container">
      <header>
        <h2>{title}</h2>  
      </header>

      {books.map(({title, link, img_src, review}) => (
        <Book
          key={title}
          title={title}
          link={link}
          img_src={img_src}
          review={review}/>
      ))}

      <style jsx>{`
        section {
          display: grid;
          padding: 3rem 0;
        }

        section:not(:last-of-type) {
          border-bottom: 1px solid var(--grey-100);
        }

        header { margin-bottom: 1rem; }
        h2 { margin: 0; }
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