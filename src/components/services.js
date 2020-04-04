import React from 'react'
import { FaWallet, FaTree, FaSocks } from "react-icons/fa"

const Services = ()=>{
    return(
        <section>
        <div>
            <h2>Our Services</h2>
        </div>
        <div>
            <span><FaWallet /></span>
            <h4>saving monay</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Null</p>
        </div>
        <div>
            <span><FaTree /></span>
            <h4>endless hiking</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Null</p>
        </div>
        <div>
            <span><FaSocks /></span>
            <h4>amazing comfort</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Null</p>
        </div>
        </section>
    )
}

export default Services