
import PropTypes from 'prop-types'
import Link from 'next/link'
import {Title, titleSizes, titleTags} from '../../Atom/Title'
import {FiChevronRight} from 'react-icons/fi'

const ArrowRight = () => (
  <FiChevronRight
    size={18}
    aria-hidden="true"
    style={{marginLeft: '0.5rem'}} />
)

export function Card({
  title,
  link: {
    link,
    text,
    isExternal = false,
    isComingSoon = false,
  },
  children,
}) {
  return(
    <div>
      <Title size={titleSizes.m} as={titleTags.h3} spacelessTop>
        {title}
      </Title>
      {children}
      {link && isExternal && (
        <a href={link}>{text} <ArrowRight/></a>
      )}
      {link && !isExternal && (
        <Link href={link}>
          <a>{text} <ArrowRight/></a>
        </Link>
      )}
      {!link && isComingSoon && (
        <span>I'm working on it</span>
      )}

        
      <style jsx>{`
        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: rgb(64,36,212);
        }

        a:hover {
          color: rgb(35, 14, 143);
        }

        a, span {
          font-size: 1.125rem;
        }

        span {
          background: rgb(239, 236, 252);
          padding: 0.15rem 0.5rem;
          border-radius: 5px;
          color: rgb(40, 20, 147);
        }

        @media screen and (min-width: 768px) {
          a {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
    isExternal: PropTypes.bool,
    isComingSoon: PropTypes.bool,
  }).isRequired,
  children: PropTypes.node.isRequired
}