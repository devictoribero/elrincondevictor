import {Fragment} from 'react'
import {MainNavigation} from './MainNavigation'
import {MainFooter} from './MainFooter'

export function Layout({route, children}) {
  console.log(route)
  return(
    <Fragment>
      <MainNavigation route={route}/>
      {children}
      <MainFooter/>
    </Fragment>
  )
}