import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Tour from "../components/tour"

const getTours = graphql`
query {
  allTours: allDatoCmsTour {
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

const Tours = () =>{

    const {allTours} = useStaticQuery(getTours)
    const excursions = allTours.edges
  

    return(
       <Layout>
         <section>
           <div>
           <h2>All <span>Tours</span></h2> 
           </div>
           <div>        
        {excursions.map(({node}) => {
        return <Tour key={node.id} tour = {node}  /> 
        
      })}
        </div>
        </section>
       </Layout> 
    )
}

export default Tours
