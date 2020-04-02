import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Services from "../components/services"


const IndexPage = () => (
  <Layout>    
    <Hero/>
    <About/>
    <Services/>    
  </Layout>
)

export default IndexPage
