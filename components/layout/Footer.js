import {socials} from '../../config/social'

export function Footer() {
  return (
    <footer className="footer">
      {socials.map(({name, link}) => (
        <a
          key={name}
          className='link-like link social'
          rel="nofollow noopener noreferrer"
          target='_blank'
          href={link}>
          {name}
        </a>
      ))}

      <style jsx>{`
        .footer {
          margin-top: 50px;
          display: flex;
          min-height: 75px;
          align-items: center;
          align-content: center;
          color: var(--c-grey-600);
          flex-wrap: wrap;
        }

        .link.social {
          position: relative;
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
          background: var(--c-grey-900);
          border-radius: 999px;
        }

        .link.social:visited {
          color: var(--c-primary-900);
        }
      `}</style>
    </footer>
  )
}