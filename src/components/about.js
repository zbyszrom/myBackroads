import React from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Button from '../styledComponents/button'
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
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  margin: 1rem 2.5%;
  display: grid;
  grid-gap: 2rem;
  @media(max-width: 900px){
    display: flex;
    flex-direction: column;
    margin: 1rem 5% 1rem 2.5%;
  }
  Button {
    margin-left: 1rem;
    background: transparent; 
          a {
        color: var(--primary);
      }
      &:hover {
        background: var(--primary);  
        a {
          color: white; 
        }
      }
  }
`
const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    top: -1rem;
    left: 1rem;  
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
        <ImgContainer>
        <Image fluid = {ourImage} alt = ''/>
        </ImgContainer>
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