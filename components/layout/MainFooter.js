import {socials} from '../../config/social'

export function MainFooter() {
  return (
    <footer className="container-wrapper main-footer">
    <div className="container">
      {socials.map(({name, link}) => (
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

      <style jsx>{`
        .main-footer {
          margin-top: 50px;
          display: flex;
          min-height: 75px;
          align-items: center;
          align-content: center;
          color: var(--grey-600);
          flex-wrap: wrap;
        }

        .link.social {
          position: relative;
          color: var(--primary-800);
          text-decoration: none;
          box-shadow: 0 1px 0 0 currentColor;
        }

        .link.social:not(:last-of-type) {
          margin-right: 15px;
        }

        .link.social:not(:last-of-type):after {
          content: "";
          position: absolute;
          top: 50%;
          right: -10px;
          height: 3px;
          width: 3px;
          background: var(--grey-900);
          border-radius: 999px;
        }

        .link.social:visited {
          color: var(--primary-900);
        }
      `}</style>
    </footer>
  )
}