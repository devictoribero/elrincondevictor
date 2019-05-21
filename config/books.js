export const books = [
  /* TECHNICAL */
  {
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    img_src: '/static/img/book-clean-code.jpg',
    review: {
      rate: 5,
      text: [
        'Uncle Bob nos cuenta que prácticas le han ayudado a los largo de los años para hacer un buen código mantenible. El libro se divide en tres partes:',
        'La primera describe principios, patrones y prácticas para escribir código limpio (como nombrar las variables y funciones, cómo manejar errores, los mejores trucos para test unitarios). La segunda parte consiste en diferentes prácticas de mejorar un código complejo y la tercera, nos explica cuáles son los indicios o "code smells" que nos dicen cuándo un código está mal',
      ]
    },
    author: {
      name: 'Robert C. Martin',
      url: 'https://twitter.com/unclebobmartin'
    },
    link: '/path/to/amazon',
    genre: 'technical'
  },
  {
    title: 'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design',
    img_src: '/static/img/book-clean-architecture.jpg',
    review: {
      rate: 5,
      text: [
        'Uncle Bob habla acerca de cual es el objetivo de una buena arquitectura de software y cuánto se puede beneficiar el negocio de ello.',
        'Al comenzar el libro, hace referencia a los paradigmas de programación estructurada que bajo mi punto de vista, nos lo podríamos saltar.',
        'Nos explica al detalle cuáles son los famosos principios "SOLID", como se aplican y cuales son sus antri-patrones. Una vez hemos entendido esto, el libro relaciona los principios SOLID con el diseño y los límites de los módulos de una aplicación.',
      ]
    },
    author: {
      name: 'Robert C. Martin',
      url: 'https://twitter.com/unclebobmartin'
    },
    link: '/path/to/amazon',
    genre: 'technical'
  },
  {
    title: 'Working Effectively with Legacy Code',
    img_src: '/static/img/book-working-effectively-with-legacy-code.jpg',
    review: {
      rate: 5,
      text: [
        'Este libro de nivel avanzado explica como lidiar con un código que no se entiende, es complejo o lleva años manteniéndose.',
        'Michael Feathers nos explica qué técnicas deberíamos usar en las distintas situaciones en las que nos podemos encontrar y la importancia de tener tests.',
      ]
    },
    author: {
      name: 'Michael Feathers',
      url: 'https://twitter.com/mfeathers'
    },
    link: '/path/to/amazon',
    genre: 'technical'
  },
  {
    title: 'The Pragmatic Programmer',
    img_src: '/static/img/book-the-pragmatic-programmer.jpeg',
    review: {
      rate: 5,
      text: [
        'Andrew Hunt no solo nos da consejos a lo largo del libro para mejorar nuestra manera de programar y evitarlos errores comunes que afectan a la futura mantenibilidad del código, sino que este libro también tiene una parte que explica que mentalidad deberíamos tener.',
        'Con una mentalidad muy "lean" nos explican la importancia de reunir todos lo requisitos antes de un proyecto, no buscar la excelencia, no auto-engañarnos y la importancia del "feedback" entre personas'
      ]
    },
    author: {
      name: 'Andrew Hunt',
      url: 'https://twitter.com/pragmaticandy'
    },
    link: '/path/to/amazon',
    genre: 'technical'
  },

  /* PRODUCTIVITY */
  {
    title: 'The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results',
    img_src: '/static/img/book-the-one-thing.jpg',
    review: {
      rate: 5,
      text: [
        'Uncle Bob nos cuenta que prácticas le han ayudado a los largo de los años para hacer un buen código mantenible.',
        `El libro se divide en tres partes: La primera describe princinpios, patrones y prácticas para escribir código limpio. La segunda parte consiste en diferentes prácticas de mejorar un código complejo y la tercera, nos explica cuáles son los indicios o 'code smells' que nos dicen cuándo un código está mal`,
        `Cubre los temas: Como y cuando escribir comentarios, como nombrar las variables y funciones,cómo manejar errores, los mejores trucos para test unitarios y 'code smells' entre otros.`
      ]
    },
    author: {
      name: 'Gary Keller',
      url: 'https://twitter.com/garykeller'
    },
    link: '/path/to/amazon',
    genre: 'productivity'
  },

  /* FINANCIAL INTELLIGENCE */
  {
    title: 'The intelligent investor',
    img_src: '/static/img/book-the-intelligent-investor.jpg',
    review: {
      rate: 5,
      text: [
        'Uncle Bob nos cuenta que prácticas le han ayudado a los largo de los años para hacer un buen código mantenible.',
        `El libro se divide en tres partes: La primera describe princinpios, patrones y prácticas para escribir código limpio. La segunda parte consiste en diferentes prácticas de mejorar un código complejo y la tercera, nos explica cuáles son los indicios o 'code smells' que nos dicen cuándo un código está mal`,
        `Cubre los temas: Como y cuando escribir comentarios, como nombrar las variables y funciones,cómo manejar errores, los mejores trucos para test unitarios y 'code smells' entre otros.`
      ]
    },
    author: {
      name: 'Benjamin Graham',
      url: undefined
    },
    link: '/path/to/amazon',
    genre: 'finances'
  },

  /* SOFT SKILLS */  
  {
    title: 'Soft Skills: The software developer\'s life manual',
    img_src: '/static/img/book-soft-skills.jpg',
    review: {
      rate: 5,
      text: [
        'Uncle Bob nos cuenta que prácticas le han ayudado a los largo de los años para hacer un buen código mantenible.',
        `El libro se divide en tres partes: La primera describe princinpios, patrones y prácticas para escribir código limpio. La segunda parte consiste en diferentes prácticas de mejorar un código complejo y la tercera, nos explica cuáles son los indicios o 'code smells' que nos dicen cuándo un código está mal`,
        `Cubre los temas: Como y cuando escribir comentarios, como nombrar las variables y funciones,cómo manejar errores, los mejores trucos para test unitarios y 'code smells' entre otros.`
      ]
    },
    author: {
      name: 'John Sonmez',
      url: 'https://twitter.com/simpleprogrammr'
    },
    link: '/path/to/amazon',
    genre: 'soft_skills'
  },
  {
    title: 'Find Your Why',
    img_src: '/static/img/book-find-your-why.jpg',
    review: {
      rate: 5,
      text: [
        'Uncle Bob nos cuenta que prácticas le han ayudado a los largo de los años para hacer un buen código mantenible.',
        `El libro se divide en tres partes: La primera describe principios, patrones y prácticas para escribir código limpio (como nombrar las variables y funciones, cómo manejar errores, los mejores trucos para test unitarios). La segunda parte consiste en diferentes prácticas de mejorar un código complejo y la tercera, nos explica cuáles son los indicios o 'code smells' que nos dicen cuándo un código está mal`,
      ]
    },
    author: {
      name: 'Simon Sinek',
      url: 'https://twitter.com/simonsinek'
    },
    link: '/path/to/amazon',
    genre: 'soft_skills'
  },

  /* DESARROLLO PERSONAL */
  {
    title: 'Cómo ganar amigos e influir sobre las personas',
    img_src: '/static/img/book-como-ganar-amigos.jpg',
    review: {
      rate: 5,
      text: [
        'Uncle Bob nos cuenta que prácticas le han ayudado a los largo de los años para hacer un buen código mantenible.',
        `El libro se divide en tres partes: La primera describe princinpios, patrones y prácticas para escribir código limpio. La segunda parte consiste en diferentes prácticas de mejorar un código complejo y la tercera, nos explica cuáles son los indicios o 'code smells' que nos dicen cuándo un código está mal`,
        `Cubre los temas: Como y cuando escribir comentarios, como nombrar las variables y funciones,cómo manejar errores, los mejores trucos para test unitarios y 'code smells' entre otros.`
      ]
    },
    author: {
      name: 'Dale Carnegie',
      url: undefined
    },
    link: '/path/to/amazon',
    genre: 'personal_development'
  },
  {
    title: 'Inteligencia emocional',
    img_src: '/static/img/book-inteligencia-emocional.jpg',
    review: {
      rate: 5,
      text: [
        'Uncle Bob nos cuenta que prácticas le han ayudado a los largo de los años para hacer un buen código mantenible.',
        `El libro se divide en tres partes: La primera describe princinpios, patrones y prácticas para escribir código limpio. La segunda parte consiste en diferentes prácticas de mejorar un código complejo y la tercera, nos explica cuáles son los indicios o 'code smells' que nos dicen cuándo un código está mal`,
        `Cubre los temas: Como y cuando escribir comentarios, como nombrar las variables y funciones,cómo manejar errores, los mejores trucos para test unitarios y 'code smells' entre otros.`
      ]
    },
    author: {
      name: 'Daniel Goleman',
      url: 'https://twitter.com/DanielGolemanEI'
    },
    link: '/path/to/amazon',
    genre: 'personal_development'
  },
  {
    title: 'El elemento: Descubrir tu pasión lo cambia todo',
    img_src: '/static/img/book-el-elemento.jpg',
    review: {
      rate: 5,
      text: [
        'Uncle Bob nos cuenta que prácticas le han ayudado a los largo de los años para hacer un buen código mantenible.',
        `El libro se divide en tres partes: La primera describe princinpios, patrones y prácticas para escribir código limpio. La segunda parte consiste en diferentes prácticas de mejorar un código complejo y la tercera, nos explica cuáles son los indicios o 'code smells' que nos dicen cuándo un código está mal`,
        `Cubre los temas: Como y cuando escribir comentarios, como nombrar las variables y funciones,cómo manejar errores, los mejores trucos para test unitarios y 'code smells' entre otros.`
      ]
    },
    author: {
      name: 'Sir Ken Robinson',
      url: 'https://twitter.com/sirkenrobinson'
    },
    link: '/path/to/amazon',
    genre: 'personal_development'
  },

  /* EMPRENDIMIENTO */
  {
    title: 'Creativity, Inc',
    img_src: '/static/img/book-creativity-inc.jpg',
    review: {
      rate: 5,
      text: [
        'Uncle Bob nos cuenta que prácticas le han ayudado a los largo de los años para hacer un buen código mantenible.',
        `El libro se divide en tres partes: La primera describe princinpios, patrones y prácticas para escribir código limpio. La segunda parte consiste en diferentes prácticas de mejorar un código complejo y la tercera, nos explica cuáles son los indicios o 'code smells' que nos dicen cuándo un código está mal`,
        `Cubre los temas: Como y cuando escribir comentarios, como nombrar las variables y funciones,cómo manejar errores, los mejores trucos para test unitarios y 'code smells' entre otros.`
      ]
    },
    author: {
      name: 'Ed Catmull',
      url: 'https://twitter.com/edcatmull'
    },
    link: '/path/to/amazon',
    genre: 'entrepreneurship'
  },

  /* OTHER */
  {
    title: 'Sapiens: A Brief History of Humankind',
    img_src: '/static/img/book-homo-sapiens.jpg',
    review: {
      rate: 5,
      text: [
        'Uncle Bob nos cuenta que prácticas le han ayudado a los largo de los años para hacer un buen código mantenible.',
        `El libro se divide en tres partes: La primera describe princinpios, patrones y prácticas para escribir código limpio. La segunda parte consiste en diferentes prácticas de mejorar un código complejo y la tercera, nos explica cuáles son los indicios o 'code smells' que nos dicen cuándo un código está mal`,
        `Cubre los temas: Como y cuando escribir comentarios, como nombrar las variables y funciones,cómo manejar errores, los mejores trucos para test unitarios y 'code smells' entre otros.`
      ]
    },
    author: {
      name: 'Yuval Noah Harari',
      url: 'https://twitter.com/harari_yuval'
    },
    link: '/path/to/amazon',
    genre: 'other'
  },
  {
    title: 'Homo Deus: A Brief History of Tomorrow',
    img_src: '/static/img/book-homo-deus.jpg',
    review: {
      rate: 5,
      text: [
        'Uncle Bob nos cuenta que prácticas le han ayudado a los largo de los años para hacer un buen código mantenible.',
        `El libro se divide en tres partes: La primera describe princinpios, patrones y prácticas para escribir código limpio. La segunda parte consiste en diferentes prácticas de mejorar un código complejo y la tercera, nos explica cuáles son los indicios o 'code smells' que nos dicen cuándo un código está mal`,
        `Cubre los temas: Como y cuando escribir comentarios, como nombrar las variables y funciones,cómo manejar errores, los mejores trucos para test unitarios y 'code smells' entre otros.`
      ]
    },
    author: {
      name: 'Yuval Noah Harari',
      url: 'https://twitter.com/harari_yuval'
    },
    link: '/path/to/amazon',
    genre: 'other'
  },
]