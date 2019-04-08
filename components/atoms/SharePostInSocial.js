export function SharePostInSocial({social, share}) {
  if(!social || !share) return null;

  if(social === 'twitter'){
    return(
      <a
        target='_blank'
        rel="nofollow noopener noreferrer"
        href={`https://twitter.com/intent/tweet?text=${share}`}
        data-size="large">
        Compartir en Twitter

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