import React from 'react'
import Link from 'next/link'

export function Logo() {
  return (
    <>
      <Link href="/">
        <a>elrincondevictor</a>
      </Link>

      <style jsx>{`
        a {
          position: relative;
          color: var(--c-grey-900);
          font-family: var(--ff-sans-serif);
          font-size: 1.25rem;
          font-weight: 500;
          margin-right: 0.5rem;
          padding: 0.5rem 0;
          text-decoration: none;
          letter-spacing: 1px;
        }

        a:after {
          content: "";
          position: absolute;
          bottom: 0;
          height: 3px;
          left: 0;
          background-color: rgb(64,36,212);
          width: 0;
          transition: width 0.15s ease-in;
        }

        a:hover:after {
          width: 100%;
        }
      `}</style>
    </>
  )
}
