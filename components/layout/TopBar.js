import React from 'react'
import Link from 'next/link'
import {Logo} from '../Atom/Logo'
import {FiGithub, FiTwitter, FiLinkedin} from 'react-icons/fi'

export function TopBar() {
  return (
    <header>
      <div className='container'>
        <Logo />
        <nav aria-label="Navegador principal">
          <Link href="/blog"><a>blog</a></Link>
          <Link href="/blog"><a>about</a></Link>
          <Link href="/blog"><a>contact</a></Link>
          <div className='nav-social'>
            <a href="https://twitter.com/devictoribero"><FiTwitter size={20}/></a>
            <a href="https://www.linkedin.com/in/devictoribero/"><FiLinkedin size={20}/></a>
            <a href="https://github.com/devictoribero"><FiGithub size={20}/></a>
          </div>
        </nav>
      </div>
      <style jsx>{`
        header {
          margin-bottom: 2rem;
        }

        .container {
          display: flex;
          min-height: 100px;
          padding-top: 0.5rem;
          padding-top: 0.5rem;
          box-sizing: border-box;
          flex-wrap: wrap;
        }

        .container,
        nav,
        .nav-social {
          display: flex;
          align-items: center;
        }

        nav {
          display: flex;
          align-items: stretch;
        }

        a {
          position: relative;
          color: var(--c-grey-800);
          font-size: 1.15rem;
          font-family: var(--ff-sans-serif);
          text-decoration: none;
          padding: 0.5rem 0;
          border-radius: 5px;
          transition: background-color 0.25 ease;
          display: flex;
          align-items: center;
          margin-right: 1rem;
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

        .nav-social {
          margin-left: 2rem;
        }

        @media screen and (min-width: 550px) {
          .container {
            justify-content: space-between;
          }
        }
      `}</style>
    </header>
  )
}
