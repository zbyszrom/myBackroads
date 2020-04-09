import React from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Image from 'gatsby-image'

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativeDirectory: {eq: "backgrounds"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const Section = styled.section`
  @media(max-width: 800px){
    display: flex;
    flex-direction: column; 
  }
`

const Button = styled.button`
  margin-left: 1rem;
  background: transparent; 
      border: 2px solid var(--primary);
      a {
        color: var(--primary);
      }
      &:hover {
        background: var(--primary);  
        a {
          color: white; 
        }
      }
`

const About = ()=>{

  const { aboutImage } = useStaticQuery(getAbout)
  const ourImage = aboutImage.childImageSharp.fluid
    return(
     <>
      <div>
        <h2>About <span>Us</span></h2>
      </div>
      <Section>
      <article>
        <div className = 'imgContainer'>
        <Image fluid = {ourImage} alt = ''/>
        </div>
      </article>
      <article >
      <div>
         <h4>Explore the difference</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
      </div>
      
      <Button><Link to = '/blog'>Read more</Link></Button>
      
      </article>
     
      </Section> 
      </> 
    )
}

export default About