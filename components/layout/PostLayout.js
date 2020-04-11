export function PostLayout({main, complementary}) {
  return(
    <div className='PostLayout'>
      <main>{main}</main>   
      <div>{complementary}</div>

      <style jsx>{`
          main {
            margin-bottom: 75px;
          }

          @media screen and (min-width: 768px) {
            main {
              max-width: 700px;
              margin-right: auto;
              margin-left: auto;
            }
          }

          @media screen and (min-width: 1200px) {
            .PostLayout {
              display: grid;
              grid-template-columns: 700px minmax(200px, 1fr);
              grid-gap: 75px;
            }
          }

          @media screen and (min-width: 1400px) {
            .PostLayout {
              grid-gap: 3rem;
            }
          }
        `}</style>
    </div>
  )
}