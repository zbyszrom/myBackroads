import React from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const getHero = graphql`
  query heroImage {
    heroImage: file(relativeDirectory: {eq: "backgrounds"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`


const Hero = ()=>{

    const { heroImage } = useStaticQuery(getHero)
  const mainImage = heroImage.childImageSharp.fluid

    return(
       <BackgroundImage fluid = {mainImage}>
           <div style = {{color: "white"}}>
           <h1>Continue Exploring</h1>
           <h4>Welcome to my presentation</h4>
           <button><Link to = '/tours'>AllTours</Link></button>
           </div>
           
       </BackgroundImage>
    )
}

export default Hero