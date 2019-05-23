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
      <BookSection id="technical" title="👨‍💻 Libros para ser un buen ingeniero de software" books={tech}/>
      <BookSection id="productivity" title="🤓 Libros que te ayudarán a conseguir todos tus objetivos" books={productivity}/>
      <BookSection id="personal_development" title="❤️ Libros que contribuirán a descubrirte a ti mismo y tu pasión" books={personalDevelopment}/>
      <BookSection id="soft_skills" title="☯️ Libros para entender la importancia de las emociones" books={softSkills}/>
      <BookSection id="entrepreneurship" title="💼 Libros para saber ejecutar tus proyectos" books={entrepreneurship}/>
      <BookSection id="finances" title="🤑 Libros te enseñan como funciona el juego del dinero" books={finances}/>
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