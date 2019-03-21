import Link from 'next/link'

export default function MainNavigation() {
  return (
    <header className="MainNavigation">
      <Link href="/">
        <a className="logo">Elrincondevictor</a>
      </Link>

      <nav>
        <Link href="/blog">
          <a className="link blog">Blog</a>
        </Link>
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
          font-size: 22px;
          color: #1d1d1d;
        }
        .link.blog {
          font-weight: bold;
        }

        @media screen and (min-width: 768px) {
          .MainNavigation {
            padding: 50px;
          }
        }
      `}</style>
    </header>
  )
}