import PropTypes from 'prop-types'

export function SharePostInSocial({social, textToShare}) {
  if(!social || !textToShare) return null;

  if(social === 'twitter'){
    return(
      <a
        target='_blank'
        rel="nofollow noopener noreferrer"
        href={`https://twitter.com/intent/tweet?text=${textToShare}`}
        data-size="large">
        Compartir en {capitalize(social)}

        <style jsx>{`
          a {
            display: block;
            background-color: var(--social-twitter);
            width: 130px;
            margin: 0 auto;
            padding: 7px 10px;
            border-radius: 3px;
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 12px;
            text-align: center;
            transition: background-color 0.35 ease;            
          }

          a:hover {
            background-color: var(--social-twitter-dark);
          }
        `}</style>
      </a>
    )
  }

  return null;
}

SharePostInSocial.propTypes = {
  social: PropTypes.oneOf(['twitter']).isRequired,
  textToShare: PropTypes.string.isRequired,
}

const capitalize = string = string.charAt(0).toUpperCase() + string.slice(1)