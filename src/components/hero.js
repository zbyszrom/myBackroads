import React from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

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
const SBackgroundImage = styled(BackgroundImage)`
    height: calc(100vh - 4rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
     font-size: 3rem; 
     margin: 0 auto;
     margin-bottom: 1rem;
     padding: 0 1rem;
     letter-spacing: var(--mainSpacing);
    }
    h4 {
      text-align: center;  
      margin-bottom: 2rem;
    }
    button {
      background: var(--primary);
      border: 2px solid var(--primary);
      a {
        color: white;
      }
      &:hover {
        background: transparent;      
        a {
          color: var(--primary);
        }
    }
    }
`

const Hero = ()=>{

    const { heroImage } = useStaticQuery(getHero)
    const mainImage = heroImage.childImageSharp.fluid

    return(      
       <SBackgroundImage fluid = {mainImage}>
           <div style = {{color: "white"}}>
           <h1>Continue Exploring</h1>
           <h4>Welcome to my presentation</h4>
           </div>
           <button><Link to = '/tours'>AllTours</Link></button>
           
           
       </SBackgroundImage>
       
    )
}

export default Hero