import React from 'react'
import Link from 'next/link'
import {Logo} from '../Atom/Logo'

export function Navigation() {
  return (
    <nav aria-label="Navegador principal">
      <Logo />
      <Link href="/blog"><a>blog</a></Link>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 75px;
          margin-top: 25px;
          margin-bottom: 50px;
          position: sticky;
          top: 0;
          z-index: 1;
          background-color: rgba(255,255,255,0.9);
        }

        a {
          color: var(--c-grey-800);
          font-size: 1.15rem;
          font-family: var(--ff-sans-serif);
          text-decoration: none;
        }

        a.selected,
        a:hover,
        a:focus {
          color: black;
        }

        @media screen and (min-width: 768px) {
          nav {
            margin-bottom 100px;
          }
        }
      `}</style>
    </nav>
  )
}

function isRoute(pathname, route) {
  return pathname === route
}