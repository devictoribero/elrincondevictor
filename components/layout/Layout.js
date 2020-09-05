import {TopBar} from './TopBar'

export function Layout({route, children}) {
  return (
    <>
      <TopBar route={route}/>
      {children}
    </>
  )
}