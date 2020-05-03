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
            div {
              max-width: 700px;
              margin-right: auto;
              margin-left: auto;
            }
          }
        `}</style>
    </div>
  )
}