import React from 'react'
import Link from 'next/link'
import routes from '../../config/routes'

export function MainNavigation({route}) {
  return (
    <nav aria-label="Navegador principal">
      <div className="container main-navigation__inner">
        <Link href="/">
          <a className="logo">Elrincondevictor</a>
        </Link>

        <div>
          <Link href="/blog">
            <a className={`${isRoute(route, routes['/blog'].page) ? 'selected' : ''}`}>
              blog
            </a>
          </Link>
          <Link href="/books">
            <a className={`${isRoute(route, routes['/books'].page) ? 'selected' : ''}`}>
              books
            </a>
          </Link>
          <Link href="/learn-new-things">
            <a className={`${isRoute(route, routes['/learn-new-things'].page) ? 'selected' : ''}`}>
              learn new things
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        nav {
          padding: 1rem;
          background: red;
          margin-bottom: 2rem;
          position: sticky;
          top: 0;
          z-index: 1;
          background-color: rgba(255,255,255,0.9);
        }
        .main-navigation__inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          box-sizing: border-box;
        }

        .logo {
          color: var(--grey-900);
          font-weight: bold;
          padding: 0.5rem 0;
        }

        a {
          text-decoration: none;
          position: relative;
          padding: 0.5rem 0;
          font-size: 1rem;
          font-weight: 900;
          color: var(--grey-500);
        }

        a.selected,
        a:hover,
        a:focus {
          color: black;
        }

        a:not(.logo) {
          margin-right: 1.25rem;
        }

        @media screen and (min-width: 550px) {
          .main-navigation__inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }

          a { font-size: 1.15rem; }

          .logo {
            font-weight: 400;
          }

          a:not(.logo) {
            margin-right: 1.5rem;
          }
        }
      `}</style>
    </nav>
  )
}

function isRoute(pathname, route) {
  return pathname === route
}