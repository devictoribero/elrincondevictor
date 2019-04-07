export function PostLayout({main, complementary}) {
  return(
    <div className='PostLayout'>
      <main>{main}</main>   
      <div>{complementary}</div>

      <style jsx>{`
          @media screen and (min-width: 1024px) {
            .PostLayout {
              display: grid;
              grid-template-columns: 2fr 1fr;
              grid-gap: 2rem;
            }
          }

          @media screen and (min-width: 1400px) {
            .PostLayout {
              grid-gap: 5rem;
            }
          }
        `}</style>
    </div>
  )
}