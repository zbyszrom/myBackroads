import React from "react"
import "../styles/layout.css"
import Navbar from "./navbar"
import Footer from "./footer"
//import '../styles/layout.css'

const Layout = ({ children }) => {
 

  return (
  
      <main>
      <Navbar />   
      {children}  
      <Footer />
      </main>
       
  )
}



export default Layout
