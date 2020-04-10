import React from 'react'
import { FaWallet, FaTree, FaSocks } from "react-icons/fa"
import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    @media(max-width:600px){
    flex-direction: column;
    }
`
const Service = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Services = ()=>{
    return(
        <>
        <div>
            <h2>Our Services</h2>
        </div>
        <Section>
        <Service>
            <span><FaWallet /></span>
            <h4>saving monay</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Null</p>
        </Service>
        <Service>
            <span><FaTree /></span>
            <h4>endless hiking</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Null</p>
        </Service>
        <Service>
            <span><FaSocks /></span>
            <h4>amazing comfort</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Null</p>
        </Service>
        </Section>
        </>
    )
}

export default Services