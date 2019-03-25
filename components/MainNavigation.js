import Link from 'next/link'
import {socials} from '../config/social'

const socialLinks = socials.filter(social => social.name !== 'Medium');

export default function MainNavigation() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <Link href="/">
          <a className="logo">Elrincondevictor</a>
        </Link>

        <nav>
          <Link href="/blog">
            <a className="blog">Mi blog</a>
          </Link>

          {socialLinks.map(({name, link}) => (
            <a
              key={name}
              className='social'
              rel="nofollow noopener noreferrer"
              target='_blank'
              href={link}>
              {name}
              </a>
          ))}
        </nav>
      </div>

      <style jsx>{`
        div {
          display: flex;
          justify-content: space-between;
          min-height: 125px;
          align-items: center;
          box-sizing: border-box;
        }

        .logo {
          font-size: 18px;
          color: #1d1d1d;
        }

        a {
          text-decoration: none;
        }

        nav > a {
          position: relative;
          padding: 0.5rem;
          font-size: 18px;
          color: var(--grey-800);
        }

        nav > a:after {
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

        nav > a:hover:after,
        nav > a:focus:after {
          width: 100%;
          background: var(--primary-300);
        }

        nav > .blog {
          font-weight: bold;
        }

        nav > .social {
          display: none;
          font-size: 14px;
          margin-left: 0.5rem;
        }

        @media screen and (min-width: 768px) {
          nav > .social {
            display: inline;
          }
        }
      `}</style>
    </div>
  )
}