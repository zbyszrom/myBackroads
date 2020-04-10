import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Tour from "../components/tour"
import styled from 'styled-components'

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
const Section = styled.section`
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  text-align: center;
  padding: 2rem 0;
  @media(min-width: 600){
    grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    
  }
  `

const Tours = () =>{

    const {allTours} = useStaticQuery(getTours)
    const excursions = allTours.edges
  

    return(
       <Layout>
         
           <div>
           <h2>All <span>Tours</span></h2> 
           </div>
           <Section>        
        {excursions.map(({node}) => {
        return <Tour key={node.id} tour = {node}  /> 
        
      })}
        </Section>
        
       </Layout> 
    )
}

export default Tours
