import React from 'react'
import Link from 'next/Link'

export function Logo() {
  return (
    <>
      <Link href="/">
        <a>
          <span className='text'>elrincondevictor</span>
          <span className='emoji' role='img' aria-hidden='true'>🧠</span>
          <span className='emoji' role='img' aria-hidden='true'>🧘‍♂️</span>
        </a>
      </Link>

      <style jsx>{`
        a {
          color: var(--c-grey-900);
          font-family: var(--ff-sans-serif);
          font-size: 1.25rem;
          font-weight: 500;
          margin-right: 0.5rem;
          padding: 0.5rem 0;
          letter-spacing: -1px;
          text-decoration: none;
        }
        .text {
          margin-right: 0.5rem;
        }
        .emoji {
          font-size: 1.25rem;
        }

        a:hover,
        a:focus {
          background-color: var(--)
        }
      `}</style>
    </>
  )
}
