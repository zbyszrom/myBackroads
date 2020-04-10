import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Tour from "./tour"
import { Link } from "gatsby"
import {Button} from '../styledComponents/button' 


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
        <div style = {{textAlign: 'center', marginBottom: '2rem'}}>
        <Button>
        <Link to="/tours" >
            All tours
        </Link>
        </Button>
        </div>    
    </>
    )

}
export default FeaturedTours