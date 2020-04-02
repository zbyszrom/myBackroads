import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "bcg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = ()=>{
    return(
        <h2>About</h2>
    )
}

export default About