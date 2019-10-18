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

  return(
    <main className="container-wrapper">
      <BookSection
        id="technical"
        title="👨‍💻 Books to be a good software engineer"
        books={tech}/>
      <BookSection
        id="productivity"
        title="🤓 Books that will help you to achieve your goals"
        books={productivity}/>
      <BookSection
        id="personal_development"
        title="❤️ Books that will help you to know yourself better and find your passion"
        books={personalDevelopment}/>
      <BookSection
        id="soft_skills"
        title="☯️ Books to understand the importance of emotions"
        books={softSkills}/>
      <BookSection
        id="entrepreneurship"
        title="💼 Books to know how to execute your projects"
        books={entrepreneurship}/>
      <BookSection
        id="finances"
        title="🤑 Books that teach you how the money game works"
        books={finances}/>
    </main>
  )

  function filterByGenre(books, genre) {
    return books.filter(book => book.genre === genre)
  }
}
BooksList.propTypes = {
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