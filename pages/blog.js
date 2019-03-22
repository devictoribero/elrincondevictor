import Head from 'next/head';
import MainNavigation from '../components/MainNavigation'
import PostsSection from '../components/PostsSection'
import {socials} from '../config/social'

const posts = [
{
  imgSrc: 'https://cdn-images-1.medium.com/max/2400/1*7gKayn-ihEADJ9jOhdMHMQ.jpeg',
  title: 'La importancia de planificarse. La base para un equilibrio mental',
  description: '¿Nervioso antes de un examen? ¿Agobiado por la entrega de un trabajo? Una organización no apropiada o inexistente puede ser el motivo…',
  slug: 'post-title2',
  link: 'https://medium.com/@victorriberoguasch/la-importancia-de-planificarse-la-base-para-un-equilibrio-mental-250b394c2cb1'
},
{
  imgSrc: 'https://cdn-images-1.medium.com/max/2000/1*CiIVIQtbBgDAGJErOK_v4Q.jpeg',
  title: 'Voy a pensar en voz alta ¿Te apuntas?',
  description: 'Recorrido por mis pensamientos. ¿Por qué no soy feliz? ¿Para qué vivo? ¿Cuál es mi propósito? Son cosas de las que aún no tengo respuesta.',
  slug: 'post-title3',
  link: 'https://medium.com/@victorriberoguasch/voy-a-pensar-en-voz-alta-te-apuntas-5830ef6700c7'
},
{
  imgSrc: 'https://i.imgur.com/1Zp8a2L.jpg',
  title: '6 sencillos pasos para organizar tu semana',
  description: '¿No tienes tiempo?😱 ¡Ya basta! Ahora tendrás tiempo para dormir, trabajar, hacer tus obligaciones, cumplir tus metas y tener vida…',
  slug: 'post-title',
  link: 'https://medium.com/@victorriberoguasch/6-sencillos-pasos-para-organizar-tu-semana-220168a6e2c9'
}]

export default function Blog() {
  return (
    <div className="page">
      <Head>
        <title key="title">Bienvenido al rincón de Victor · Namasté🙏</title>
        <meta
          key="description"
          name="description"
          content="Productividad, reflexiones, cosas que aprendo y una filosofía de vida para tener una vida equilibrada."
        />
      </Head>

      <MainNavigation/>
      <header role="banner">
        <h1>Comparto mi filosofía de vida en este, mi rincón.</h1>
        <p>Productividad, reflexiones y un estilo de vida sostenible y equilibrado son algunos de los temas de los que escribo.</p>
      </header>

      <main>
        <PostsSection title='Destacados' posts={posts}/>
      </main>   

      <footer>
        <span>Copyright 2019 · Todos los derechos reservados</span>
        <span>Sígueme en:
          {socials.map(({name, link}) => (
            <a
              className='link social'
              rel="nofollow noopener noreferrer"
              target='_blank'
              href={link}>
              {name}
              </a>
          ))}
        </span>
      </footer>

      <style jsx>{`
        footer {
          padding: 50px 30px;
          text-align: center;
          color: #625D52;
          display: flex; 
          justify-content: space-between;
          flex-wrap: wrap;
        }

        footer a {
          padding: 5px;
          color: #B44D12;
        }

        footer a:visited {
          color: #8D2B0B;
        }

        @media screen and (min-width: 768px) {
          footer {
            padding: 50px;
          }
        }

        span {
          display: block;
          font-size: 12px;
        }

        header {
          padding: 50px 30px;
          position: relative;
          background-image: linear-gradient(rgba(233,185,73,0),rgba(249,218,139,1));
        }

        header:after {
          content: "";
          position: absolute;
          bottom: -200px;
          left: 0;
          right: 0;
          background: rgba(249,218,139,1);
          height: 200px;
          z-index: -1;
        }

        h1 {
          margin: 0;
          color: #B44D12;
        }

        p {
          color: #8D2B0B;
          font-size: 1.5rem;
          margin-top: 1rem;
          line-height: 1.75;
        }

        main {
          padding: 50px 30px;
        }

        @media screen and (min-width: 768px) {
          header {
            padding: 50px;
          }

          h1 {
            width: 500px;
          }

          p {
            width: 600px;
          }

          main {
            padding: 50px;
          }
        }
      `}</style>
    </div>
  )
}