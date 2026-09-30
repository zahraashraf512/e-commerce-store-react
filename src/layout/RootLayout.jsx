import React from 'react'
import Navbar from '../components/common/Navbar'
import {Outlet}from "react-router-dom"
    import Footer from '../components/common/Footer'
const RootLayout = () => {
  return (
    <div>
<Navbar></Navbar>
<main>
    <Outlet></Outlet>
</main>
<Footer></Footer>
    </div>
  )
}

export default RootLayout