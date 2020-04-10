import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Tour from "./tour"
import { Link } from "gatsby"
import Button from '../styledComponents/button' 
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
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
    Button {
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
  


const FeaturedTours = ()=> {

  const response = useStaticQuery(getTours)
  const tours = response.featuredTours.edges

    return (
      <>
    <div>
      <h2>Featured <span>Tours</span></h2>
    </div>
    <section>         
        {tours.map(({ node }) => {
        return <Tour key={node.id} tour = {node}  />         
      })}
    </section>
    <Section >
        <div >
        <Button>
        <Link to="/tours" >
            All tours
        </Link>
        </Button>
        </div> 
    </Section>   
    </>
    )

}
export default FeaturedTours