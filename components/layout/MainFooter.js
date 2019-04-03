import {socials} from '../../config/social'

export function MainFooter() {
  return (
    <footer className="container-wrapper MainFooter">
      <div className="container MainFooter-inner">
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
      </div>

      <style jsx>{`
        .MainFooter {
          margin-top: 50px;
        }

        .MainFooter .MainFooter-inner {
          display: flex;
          min-height: 75px;
          align-items: center;
          align-content: center;
          justify-content: space-between;
          color: var(--grey-600);
          flex-wrap: wrap;
        }

        .MainFooter a {
          padding: 5px;
          color: var(--primary-800);
        }

        .MainFooter a:visited {
          color: var(--primary-900);
        }

        .MainFooter-inner > span {
          display: block;
          font-size: 12px;
        }
      `}</style>
    </footer>
  )
}