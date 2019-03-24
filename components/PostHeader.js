export default function Post({post}) {
  return (
    <header role="banner">
      <figure>
        <img src={'https://cdn-images-1.medium.com/max/2400/1*7gKayn-ihEADJ9jOhdMHMQ.jpeg'} alt="" role="presentation"/>
      </figure>
      <h1>{post.title}</h1>

      <style jsx global>{`
        figure {
          margin: 0;
          position: relative;
          z-index: -1;
        }

        figure:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,1));
        }

        img {
          display: block;
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 3px;
        }

        h1 {
          color: transparent;
          -webkit-text-stroke: 1px var(--grey-600);
          text-shadow: 2px 2px var(--primary-400);
          font-size: 36px;
          line-height: 1.5;
          letter-spacing: 0.5px;
          margin: -3rem 0 2rem 0;
        }

        @media screen and (min-width: 768px) {
          img {
            height: 300px;
          }

          h1 {
            text-shadow: 4px 3px var(--primary-400);
            font-size: 50px;
            line-height: 1.25;
            margin: -7rem 0 2rem 0;
          }
        }
      `}</style>
    </header>
  )
}