import Link from 'next/link'

export function MainNavigation() {
  return (
    <nav className="container-wrapper" aria-label="Navegador principal">
      <div className="container main-navigation__inner">
        <Link href="/">
          <a className="logo">Elrincondevictor</a>
        </Link>

        <div>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/libros"><a>Libros</a></Link>
          <Link href="/aprende-algo-nuevo"><a>Aprende algo nuevo</a></Link>
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

        a {
          text-decoration: none;
          position: relative;
          padding: 0.5rem 0;
          font-size: 18px;
          color: var(--grey-800);
        }

        a:after {
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

        a:hover:after,
        a:focus:after {
          width: 100%;
          background: var(--primary-300);
        }

        a:not(.logo) {
          margin-right: 1.5rem;
        }
      `}</style>
    </nav>
  )
}