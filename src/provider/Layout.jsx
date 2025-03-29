import React , {Children} from 'react'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'

function Layout({children}) {
  return (
    <div>
        <Navigation/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout