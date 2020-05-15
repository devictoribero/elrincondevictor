export const books = [
  /* TECHNICAL */
  {
    title: 'Clean Code: A Handbook of Agile Craftsmanship',
    img_src: '/public/img/book-clean-code.jpg',
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
    link: {
      en: 'https://amzn.to/2Qltatd',
      es: 'https://amzn.to/2HwYd2l'
    },
    genre: 'technical'
  },
  {
    title: 'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design',
    img_src: '/public/img/book-clean-architecture.jpg',
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
    link: {
      en: 'https://amzn.to/2EsPZqb',
      es: 'https://amzn.to/2HxFaF5'
    },
    genre: 'technical'
  },
  {
    title: 'Working Effectively with Legacy Code',
    img_src: '/public/img/book-working-effectively-with-legacy-code.jpg',
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
    link: {
      en: 'https://amzn.to/2Hzge0d',
    },
    genre: 'technical'
  },
  {
    title: 'The Pragmatic Programmer',
    img_src: '/public/img/book-the-pragmatic-programmer.jpeg',
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
    link: {
      en: 'https://amzn.to/2QgEnv6',
    },
    genre: 'technical'
  },

  /* PRODUCTIVITY */
  {
    title: 'The One Thing: The Surprisingly Simple Truth Behind Extraordinary Results',
    img_src: '/public/img/book-the-one-thing.jpg',
    review: {
      rate: 5,
      text: [
        'Me encanta la manera práctica en la que este libro enseña a que no existen las prioridades sino la prioridad. Con la idea en mente que únicamente solo hay una cosa que es la más importante, nos enseña ejemplos, prácticas y ejercicios para que no perdamos el foco.',
        'Un libro muy recomendable tanto para todos los que quieren ser productivos pero aún tienen caos en sus vidas como también para esa gente que ya es productiva dado que nombra distintas maneras de como reducir las prioridades a una, la que debemos hacer.'
      ]
    },
    author: {
      name: 'Gary Keller',
      url: 'https://twitter.com/garykeller'
    },
    link: {
      en: 'https://amzn.to/2QjVa08',
      es : 'https://amzn.to/2VZgxdu'
    },
    genre: 'productivity'
  },

  /* FINANCIAL INTELLIGENCE */
  {
    title: 'The intelligent investor',
    img_src: '/public/img/book-the-intelligent-investor.jpg',
    review: {
      rate: 5,
      text: [
        'Warren Buffet y yo pensamos lo mismo: Sin duda el mejor en cuanto a inversiones que existe. Este libro nos explica desde la sensatez, la inversión a largo plazo con una meta muy clara: Un ingreso pasivo.',
        '"The intelligent investor" diferencia entre especuladores e inversores y explica a través de muchísimos ejemplos y estudios, una estrategia clara: Buscar empresas infravaloradas por el mercado haciendo estudios fundamentales en lugar de basarse en las opiniones de terceras personas o las tendencias de mercados.',
        'Lo recomiendo para toda persona que quiera empezar a invertir a largo plazo.'

      ]
    },
    author: {
      name: 'Benjamin Graham',
      url: undefined
    },
    link: {
      en: 'https://amzn.to/2VVWiNS',
      es : 'https://amzn.to/2VV8tKG'
    },
    genre: 'finances'
  },

  /* SOFT SKILLS */
  {
    title: 'Inteligencia emocional',
    img_src: '/public/img/book-inteligencia-emocional.jpg',
    review: {
      rate: 5,
      text: [
        '"Inteligencia emocional" es un libro lento e intenso de leer no apto apra impacientes. Daniel Goleman revoluciona los tradicionales conceptos de inteligencia, afirmando que existe una que es mucho más efectiva.',
        'Este libro nos intenta explicar la importancia de dotar de inteligencia a la emoción y de la importancia de ello. Con algunos ejemplos a lo largo del libro, nos escenifica situaciones en las cuales la inteligencia emocional nos puede ser de gran utilidad.'
      ]
    },
    author: {
      name: 'Daniel Goleman',
      url: 'https://twitter.com/DanielGolemanEI'
    },
    link: {
      en: 'https://amzn.to/2HvgME6',
      es : 'https://amzn.to/2ErYthb'
    },
    genre: 'soft_skills'
  },
  {
    title: 'Soft Skills: The software developer\'s life manual',
    img_src: '/public/img/book-soft-skills.jpg',
    review: {
      rate: 4,
      text: [
        '"Soft Skills" es un libro muy recomendado el cual habla de nuestra carrera profesional, marca personal, aprendizaje, productividad y finanzas entre otros muchos temas.',
        'Una vez leído este libro, tendremos otra percepción de las entrevistas, como negociar salarios, que hacer con nuestro dinero o como vendernos a los compañeros, empresas y amigos.',
        'Es un libro que nos hace cambiar la manera de ver las cosas.'
      ]
    },
    author: {
      name: 'John Sonmez',
      url: 'https://twitter.com/simpleprogrammr'
    },
    link: {
      en: 'https://amzn.to/2HwtwKO',
    },
    genre: 'soft_skills'
  },
  {
    title: 'Cómo ganar amigos e influir sobre las personas',
    img_src: '/public/img/book-como-ganar-amigos.jpg',
    review: {
      rate: 5,
      text: [
        'Aunque creas que tienes el suficiente poder de la palabra o facilidad para tratar con la gente, deberías leerte este libro.',
        '"Cómo ganar amigos e influir sobre las personas" se basa en la idea de que el éxito económico depende en un 15% del conocimiento profesional, y en un 85% de la capacidad para expresar ideas, asumir liderazgo y despertar el entusiasmo de los demás.',
        'A base de ejemplos el autor muestra las técnicas fundamentales para gustar a los demás, comprender sus puntos de vista e imponer las propias ideas sin causar resentimiento.'
      ]
    },
    author: {
      name: 'Dale Carnegie',
      url: undefined
    },
    link: {
      en: 'https://amzn.to/2Hw8U5e',
      es : 'https://amzn.to/2JyVh7F'
    },
    genre: 'soft_skills'
  },
  

  /* DESARROLLO PERSONAL */
  {
    title: 'El elemento: Descubrir tu pasión lo cambia todo',
    img_src: '/public/img/book-el-elemento.jpg',
    review: {
      rate: 5,
      text: [
        'Ken Robinson en este libro afirma que habría que cambiar el modelo tradicional de educación y fomentar muchísimo más la creatividad.',
        '"El elemento" va más allá y afirma que las asignaturas en los colegios no deberían enseñarse como entidades independientes sin relaciones entre ellas.',
        'Por último, defiende la idea de que los planes de estudios deberían ser individualizados dado que cada uno tenemos aptitudes y requerimientos distintos como también ritmos distintos y lo único que hace el sistema actual es limitarnos.'
      ]
    },
    author: {
      name: 'Sir Ken Robinson',
      url: 'https://twitter.com/sirkenrobinson'
    },
    link: {
      en: 'https://amzn.to/2JA79X2',
      es : 'https://amzn.to/2HxJB2H'
    },
    genre: 'personal_development'
  },
  {
    title: 'Find Your Why',
    img_src: '/public/img/book-find-your-why.jpg',
    review: {
      rate: 5,
      text: [
        'Simon Sinek, uno de los mejores líderes de hoy en día, nos acompaña a lo largo del libro en la búsqueda de "Nuestro por qué".',
        '"Find your why" es un libro de auto-ayuda que nos propone ejercicios, quebraderos de cabeza y problemáticas para que nosotros mismos nos descubramos poco a poco.',
        'Spoiler Alert: Para algunos ejercicios se necesita de un amigo o compañero que entienda la importancia de dar una opinión sincera.'
      ]
    },
    author: {
      name: 'Simon Sinek',
      url: 'https://twitter.com/simonsinek'
    },
    link: {
      en: 'https://amzn.to/2HwmZ2F',
      es : 'https://amzn.to/2EqDifC'
    },
    genre: 'personal_development'
  },

  /* EMPRENDIMIENTO */
  {
    title: 'Creativity, Inc',
    img_src: '/public/img/book-creativity-inc.jpg',
    review: {
      rate: 5,
      text: [
        'El co-fundador de Pixar Ed Catmull relata de manera muy entretenida sus experiencias en Pixar sin caer en los típicos tópicos. Nos explica las diferentes estrategias siguieron para superar todos y cada uno de los problemas que querían impedir que Pixar fuera el gigante que es hoy en día.',
        'Lo que más me gusta de este libro es la pasión con que Ed Catmull explica la importancia de una buena cultura de empresa.',
        'El libro va más allá y desvela cómo Pixar mejora sus películas gracias a los "candor meeting", las cuales son reuniones que se basaban en feedback honesto.'
      ]
    },
    author: {
      name: 'Ed Catmull',
      url: 'https://twitter.com/edcatmull'
    },
    link: {
      en: 'https://amzn.to/2Hw32sW',
      es : 'https://amzn.to/2JCkI8u'
    },
    genre: 'entrepreneurship'
  },

  /* OTHER */
  {
    title: 'Homo Deus: A Brief History of Tomorrow',
    img_src: '/public/img/book-homo-deus.jpg',
    review: {
      rate: 5,
      text: [
        '"Homo Deus" narra un posible futuro para la especie humana en el que seremos pequeños dioses amortales.',
        'Equipados con biotecnología, inteligencia articial y nanotecnología, seremos capaz de burlar la muerte. Solo habrá dos manera de no ser amortal: no tener dinero o morir en algún accidente.',
        '¿Seremos capaces de mantenernos motivados para realizar objetivos en una sociedad donde el tiempo ya no tiene límite?'

      ]
    },
    author: {
      name: 'Yuval Noah Harari',
      url: 'https://twitter.com/harari_yuval'
    },
    link: {
      en: 'https://amzn.to/2VZjN8s',
      es : 'https://amzn.to/2HxPaOX'
    },
    genre: 'other'
  },
]