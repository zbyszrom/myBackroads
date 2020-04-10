import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import styled from 'styled-components'

export const query = graphql`
  query($slug: String!) {
    tour: datoCmsTour(slug: { eq: $slug }) {
      name
      country 
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      video {
        url
      }
      images {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

const Template = ({data}) =>{

    const {
        name,
        descriptionNode,
        images,
        country,
        } = data .tour

    return(
        <Layout>
            <h1>{name}</h1>
            <h4>{country}</h4>        
            <div dangerouslySetInnerHTML={{ __html: descriptionNode.childMarkdownRemark.html }}/>
            <section>
            {images.map((item, index) => {
              return (
                <Image
                  key={index}
                  fluid={item.fluid} 
                />
              )
            })}
            </section>
        </Layout>
    )
}
export default Template