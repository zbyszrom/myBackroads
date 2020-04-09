import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Services from "../components/services"
import FeaturedTours  from "../components/featuredTours"


const IndexPage = () => (
  <Layout>    
    <Hero/>
    <About/>
    <Services/> 
    <FeaturedTours/>   
  </Layout>
)

export default IndexPage
