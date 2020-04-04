import React, {useState} from 'react'
import { Link } from 'gatsby'
import { FaAlignRight, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import logo from "../images/logo.svg"
const Navbar = ()=>{

    const [isOpen, setNav] = useState()
    const toggleNav = ()=>{
        setNav(isOpen => !isOpen)
    }

    return(
        <nav>
           <img src = {logo} alt = ''/>
           <button type="button" onClick={toggleNav}>
           <FaAlignRight/>
           </button>
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

        </nav>
    )
}

export default Navbar