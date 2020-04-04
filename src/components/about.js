import React from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
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

const About = ()=>{

  const { aboutImage } = useStaticQuery(getAbout)
  const ourImage = aboutImage.childImageSharp.fluid
    return(
      <section>
      <div>
        <h2>About <span>Us</span></h2>
      </div>
      <div>
        <Image fluid = {ourImage} alt = ''/>
      </div>
      <div>
         <h4>explore the difference</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            doloribus enim necessitatibus?
          </p>
      </div>
      <div>
      <button><Link to = '/blog'>Read more</Link></button>
      </div>
      </section>  
    )
}

export default About