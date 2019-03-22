import {socials} from '../config/social'

export default function Footer() {
  return (
    <footer>
      <span>Copyright 2019 · Todos los derechos reservados</span>
      <span>Sígueme en:
        {socials.map(({name, link}) => (
          <a
            key={name}
            className='link social'
            rel="nofollow noopener noreferrer"
            target='_blank'
            href={link}>
            {name}
          </a>
        ))}
      </span>

      <style jsx>{`
        footer {
          padding: 50px 30px;
          text-align: center;
          color: var(--grey-600);
          display: flex; 
          justify-content: space-between;
          flex-wrap: wrap;
        }

        footer a {
          padding: 5px;
          color: var(--primary-800);
        }

        footer a:visited {
          color: var(--primary-900);
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
      `}</style>
    </footer>
  )
}