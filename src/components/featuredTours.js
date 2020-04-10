import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Tour from "./tour"
import { Link } from "gatsby"
import styled from 'styled-components'


const getTours = graphql`
query {
  featuredTours: allDatoCmsTour(filter: { featured: { eq: true } }) {
    edges {
      node {
        images {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        name
        slug
        country
       id          
      }
    }
  }
}
`
const Section = styled.section`
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  text-align: center;
  padding: 2rem 0;
 
  @media(min-width: 600){
    grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    
  }
`

const FeaturedTours = ()=> {

  const response = useStaticQuery(getTours)
  const tours = response.featuredTours.edges

    return (
      <>
      <div>
      <h2>Featured <span>Tours</span></h2>
      </div>
    <Section>
         
        {tours.map(({ node }) => {
        return <Tour key={node.id} tour = {node}  />         
      })}
    </Section>
        <div>
        <Link to="/tours" >
        All tours
        </Link>
        </div>
    
        </>
    )

}
export default FeaturedTours