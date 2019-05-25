import {Fragment} from 'react'
import {MainNavigation} from './MainNavigation'
import {MainFooter} from './MainFooter'

export function Layout({route, children}) {
  return(
    <Fragment>
      <MainNavigation route={route}/>
      {children}
      <MainFooter/>
    </Fragment>
  )
}