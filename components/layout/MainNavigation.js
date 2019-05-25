import React from 'react'
import Link from 'next/link'
import routes from '../../config/routes'

export function MainNavigation({route}) {
  return (
    <nav className="container-wrapper" aria-label="Navegador principal">
      <div className="container main-navigation__inner">
        <Link href="/">
          <a className="logo">Elrincondevictor</a>
        </Link>

        <div>
          <Link href="/blog">
            <a className={`${isRoute(route, routes['/blog'].page) ? 'selected' : ''}`}>
            Blog
            </a>
          </Link>
          <Link href="/libros">
            <a className={`${isRoute(route, routes['/libros'].page) ? 'selected' : ''}`}>
            Libros
            </a>
          </Link>
          <Link href="/aprende-algo-nuevo">
            <a className={`${isRoute(route, routes['/aprende-algo-nuevo'].page) ? 'selected' : ''}`}>
              Aprende algo nuevo
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .main-navigation__inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          min-height: 125px;
          box-sizing: border-box;
        }

        .logo {
          font-weight: bold;
          padding: 1.25rem 0;
        }

        a {
          text-decoration: none;
          position: relative;
          padding: 0.5rem 0;
          font-size: 18px;
          color: var(--grey-800);
        }

        a:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.1rem;
          width: 0;
          height: 5px;
          z-index: -1;
          transition: width 0.35s ease;
          transform: skewX(150deg);
        }

        a.selected:after {
          width: 100%;
          background: var(--primary-300);
        }

        a:hover:after,
        a:focus:after {
          width: 100%;
          background: var(--primary-300);
        }

        a:not(.logo) {
          margin-right: 1.5rem;
        }

        @media screen and (min-width: 550px) {
          .main-navigation__inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }         

          .logo {
            font-weight: 400;
          }
        }
      `}</style>
    </nav>
  )
}

function isRoute(pathname, route) {
  return pathname === route
}