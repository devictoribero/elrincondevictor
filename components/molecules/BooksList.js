import React from 'react'
import PropTypes from 'prop-types'
import {BookSection} from './BookSection'

export function BooksList({books}){
  const tech = filterByGenre(books, 'technical')
  const productivity = filterByGenre(books, 'productivity')
  const personalDevelopment = filterByGenre(books, 'personal_development')
  const finances = filterByGenre(books, 'finances')
  const entrepreneurship = filterByGenre(books, 'entrepreneurship')
  const softSkills = filterByGenre(books, 'soft_skills')

  function filterByGenre(books, genre) {
    return books.filter(book => book.genre === genre)
  }

  return(
    <main className="container-wrapper">
      <BookSection id="books__technical" title="👨‍💻 Libros para ser un buen ingeniero de software" books={tech}/>
      <BookSection id="books__productivity" title="🤓 Libros para ser un buen ingeniero de software" books={productivity}/>
      <BookSection id="books__personal_development" title="🤓 Libros para ser un buen ingeniero de software" books={personalDevelopment}/>
      <BookSection id="books__finances" title="🤑 Libros para ser un buen ingeniero de software" books={finances}/>
      <BookSection id="books__entrepreneurship" title="💼 Libros para ser un buen ingeniero de software" books={entrepreneurship}/>
      <BookSection id="books__soft_skills" title="❤️ Libros para ser un buen ingeniero de software" books={softSkills}/>
    </main>
  )
}
BooksList.propTypes = {
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