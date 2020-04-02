import React from 'react'
import { Link } from 'gatsby'
import { FaAlignRight, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import logo from "../images/logo.svg"
const Navbar = ()=>{
    return(
        <nav>
           <img src = {logo} alt = ''/>
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

        </nav>
    )
}

export default Navbar