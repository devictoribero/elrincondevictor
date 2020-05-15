import React from 'react'
import Link from 'next/link'
import routes from '../../config/routes'

export function Navigation({route}) {
  return (
    <nav aria-label="Navegador principal">
      <div className="main-navigation__inner">
        <Link href="/">
          <a className="logo">Elrincondevictor</a>
        </Link>

        <div>
          <Link href="/blog">
            <a className={`${isRoute(route, routes['/blog'].page) ? 'selected' : ''}`}>
              blog
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100px;
          background: red;
          margin-bottom: 2rem;
          position: sticky;
          top: 0;
          z-index: 1;
          background-color: rgba(255,255,255,0.9);
        }
        .main-navigation__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
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
          color: var(--grey-500);
          font-family: var(--ff-sans-serif);
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