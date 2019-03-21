import Link from 'next/link'
import {socials} from '../config/social'

const socialLinks = socials.filter(social => social.name !== 'Medium');

export default function MainNavigation() {
  return (
    <div className="MainNavigation">
      <Link href="/">
        <a className="logo">Elrincondevictor</a>
      </Link>

      <nav>
        <Link href="/blog">
          <a className="link blog">Blog</a>
        </Link>

        {socialLinks.map(({name, link}) => (
          <a
            className='link social'
            rel="nofollow noopener noreferrer"
            target='_blank'
            href={link}>
            {name}
            </a>
        ))}
      </nav>

      <style jsx>{`
        .MainNavigation {
          display: flex;
          justify-content: space-between;
          min-height: 75px;
          padding: 30px;
          align-items: baseline;
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
        }

        .logo {
          font-size: 18px;
          color: #1d1d1d;
        }

        .link {
          position: relative;
          padding: 0.5rem;
          font-size: 22px;
          color: #1d1d1d;
        }

        .link:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -0.1rem;
          width: 0;
          height: 10px;
          z-index: -1;
          -webkit-transition: 0.3s ease width;
          transition: 0.3s ease width;
          -webkit-transform: skewX(150deg);
          -ms-transform: skewX(150deg);
          transform: skewX(150deg);
        }

        .link:hover:after, .link:focus:after {
          width: 100%;
          background: #FADB5F;
        }

        .link.blog {
          font-weight: bold;
        }

        .link.social {
          display: none;
          font-size: 14px;
          margin-left: 0.5rem;
        }

        @media screen and (min-width: 768px) {
          .MainNavigation {
            padding: 50px;
          }

          .link.social {
            display: initial;
          }
        }
      `}</style>
    </div>
  )
}