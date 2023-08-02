import React from 'react'
import Header from './Components/Header/Header'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main>{children}</main>
    {/* <Footer/> */}
    </>
  )
}

export default Layout