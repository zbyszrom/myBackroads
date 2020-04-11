import React, {useState} from 'react'
import { Link } from 'gatsby'
import { FaAlignRight, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import logo from "../images/logo.svg"
import styled from 'styled-components'

   const Nav = styled.nav`
    @media (min-width: 960px) {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
   `   
   const Sheader = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
   `
   const Button = styled.button`
    background: transparent;
    border: none;
    outline: none;
    &:hover {
      cursor: pointer
    }
    @media (min-width: 960px) {
        display: none;
    }
   `
   const SFaAlignRight = styled(FaAlignRight)`
   color: var(--primary);
    font-size: 1.5rem
`
const SLink = styled(Link)`
      padding: 1rem 1.25rem;
      text-transform: capitalize;
      color: var(--mainBlack);
      transition: var(--mainTransition);
      font-weight: bold;
      letter-spacing: var(--mainSpacing);
      &:hover {
        color: var(--primaryColor);
      }
`
const Social = styled.div`
        display: none;
        @media (min-width: 960px){
        display: flex;
      
      a {
        color: var(--primary);
        margin: 0 0.5rem;
        font-size: 1.2rem;
        transition: var(--transition);
        &:hover {
          color: var(--black);
          transform: translateY(-5px);
        }
      }
    }
`



const Navbar = ()=>{

    const [isOpen, setNav] = useState(false)
    const toggleNav = ()=>{
        setNav(isOpen => !isOpen)
    }

    return(
    <Nav>
        
          <Sheader>
           <img src = {logo} alt = ''/>
           <Button type="button"  onClick={toggleNav}>
           <SFaAlignRight />
           </Button>
          </Sheader>

        <ul className={
          isOpen
          ? 'links showNav' 
          : `links`
          }>
             <li><SLink to = "/">home</SLink></li>     
             <li><SLink to = "/tours">Tours</SLink></li>     
             <li><SLink to = "/contact">Contact</SLink></li>               
        </ul>

        <Social>
            <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size = '1.8rem' /></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaTwitter size = '1.8rem'/></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaYoutube size = '1.8rem'/></a>
        </Social>
        
    </Nav>
    )
}

export default Navbar