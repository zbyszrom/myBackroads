import React from 'react'
import {Link} from 'gatsby'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"


const Footer = ()=>{
    return(
        <footer>
            
            <ul>
             <li><Link to = "/">home</Link></li>     
             <li><Link to = "/tours">Tours</Link></li>     
             <li><Link to = "/blog">Blog</Link></li>    
             <li><Link to = "/contact">Contact</Link></li>               
            </ul>
           
           <div>
            <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size = '1.8rem' /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaTwitter size = '1.8rem'/></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaYoutube size = '1.8rem'/></a>
           </div>
           <div>
            <p>copyright &copy; backroads travel company {new Date().getFullYear()} all
            rights reserved</p>
           </div>
        </footer>
    )
}

export default Footer