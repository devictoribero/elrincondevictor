import Link from 'next/link'
import {socials} from '../../config/social'

const socialLinks = socials.filter(social => social.name !== 'Medium');

export function MainNavigation() {
  return (
    <nav className="container-wrapper" aria-label="Navegador principal">
      <div className="container main-navigation__inner">
        <Link href="/">
          <a className="link logo">Elrincondevictor</a>
        </Link>

        <div>
          <Link href="/blog">
            <a className="link blog">Mi blog</a>
          </Link>

          {socialLinks.map(({name, link}) => (
            <a
              key={name}
              className='link social'
              rel="nofollow noopener noreferrer"
              target='_blank'
              href={link}>
              {name}
              </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .main-navigation__inner {
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

        .link {
          text-decoration: none;
        }

        .link {
          position: relative;
          padding: 0.5rem;
          font-size: 18px;
          color: var(--grey-800);
        }

        .link:after {
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

        .link:hover:after,
        .link:focus:after {
          width: 100%;
          background: var(--primary-300);
        }

        .blog {
          font-weight: bold;
        }

        .social {
          display: none;
          font-size: 14px;
          margin-left: 0.5rem;
        }

        @media screen and (min-width: 768px) {
          .social {
            display: inline;
          }
        }
      `}</style>
    </nav>
  )
}