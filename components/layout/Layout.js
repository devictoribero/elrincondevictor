import {Fragment} from 'react'
import {Navigation} from './Navigation'
import {Footer} from './Footer'

export function Layout({route, children}) {
  return(
    <Fragment>
      <Navigation route={route}/>
      {children}
      <Footer/>
    </Fragment>
  )
}