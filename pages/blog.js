import MainNavigation from '../components/MainNavigation'
import PostsSection from '../components/PostsSection'

const posts = [
{
  imgSrc: 'https://cdn-images-1.medium.com/max/2400/1*7gKayn-ihEADJ9jOhdMHMQ.jpeg',
  title: 'La importancia de planificarse. La base para un equilibrio mental',
  description: '¿Nervioso antes de un examen? ¿Agobiado por la entrega de un trabajo? Una organización no apropiada o inexistente puede ser el motivo…',
  slug: 'post-title2',
},
{
  imgSrc: 'https://cdn-images-1.medium.com/max/2000/1*CiIVIQtbBgDAGJErOK_v4Q.jpeg',
  title: 'Voy a pensar en voz alta ¿Te apuntas?',
  description: 'Recorrido por mis pensamientos. ¿Por qué no soy feliz? ¿Para qué vivo? ¿Cuál es mi propósito? Son cosas de las que aún no tengo respuesta.',
  slug: 'post-title3',
},
{
  imgSrc: 'https://i.imgur.com/1Zp8a2L.jpg',
  title: '6 sencillos pasos para organizar tu semana',
  description: '¿No tienes tiempo?😱 ¡Ya basta! Ahora tendrás tiempo para dormir, trabajar, hacer tus obligaciones, cumplir tus metas y tener vida…',
  slug: 'post-title',
}]

export default function Blog() {
  return (
    <div className="page">
      <MainNavigation/>
      {/*<header>
        <h1>Compartiendo mi filosofía de vida y estilo de vida saludable.</h1>
      </header>*/}

      <main>
        <PostsSection title='Lo último' posts={posts}/>
      </main>   

      <style jsx>{`
        header {
          min-height: 200px;
          padding: 50px 30px;
          background: #FFFBEA;
        }

        h1 {
          margin: 0;
          color: #DE911D;
        }

        main {
          padding: 50px 30px;
        }

        @media screen and (min-width: 768px) {
          main {
            padding: 50px;
          }
        }
      `}</style>
    </div>
  )
}