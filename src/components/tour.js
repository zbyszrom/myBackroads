import React from "react"
import Image from "gatsby-image"
import { Link} from 'gatsby'
//import styled from 'styled-components'



const Tour = ({tour})=>{
    const {name, country, images, slug} = tour
        let mainImg = images[0].fluid
    return(
        <div>
            <div>
                <Image fluid = {mainImg}/>
            </div>
            <Link to={`/tours/${slug}`}> 
                <h3>{name}</h3>
            </Link>
            <h4>{country}</h4>
        </div>
    )
}

export default Tour