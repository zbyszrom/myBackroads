import React from 'react'
import {Link} from 'gatsby'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"


const Footer = ()=>{
    return(
        <footer>
            <div>
                <Link to = "/">home</Link>
                <Link to = "/tours">Tours</Link>
                <Link to = "/blog">Blog</Link>
                <Link to = "/contact">Contact</Link>
                
            </div>
           <div>
            <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size = '1.8rem' /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaTwitter size = '1.8rem'/></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaYoutube size = '1.8rem'/></a>
           </div>
           <div>
            <small>copyright &copy; backroads travel company {new Date().getFullYear()} all
            rights reserved</small>
           </div>
        </footer>
    )
}

export default Footer