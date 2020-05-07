import React from "react"
import { Link } from "gatsby"
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa"
import styled from "styled-components"

const Ul = styled.ul`
  a {
    display: inline-block;
    text-transform: uppercase;
    color: white;
    margin: 0.5rem 1rem;
    letter-spacing: var(--mainSpacing);
    transition: var(--transition);
    font-weight: bold;
    &:hover {
      color: white;
    }
  }
`
const CRight = styled.div`
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  line-height: 2;
`
const Icons = styled.div`
  a {
    display: inline-block;
    margin: 1rem;
    font-size: 1.3rem;
    color: var(--primary);
    transition: var(--mainTransition);
    &:hover {
      color: white;
    }
  }
`

const Footer = () => {
  return (
    <footer>
      <Ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/tours">Tours</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </Ul>

      <Icons>
        <a href="facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size="1.8rem" />
        </a>
        <a href="twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size="1.8rem" />
        </a>
        <a href="youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size="1.8rem" />
        </a>
      </Icons>

      <CRight>
        copyright &copy; zbyszrom {new Date().getFullYear()} all rights reserved
      </CRight>
    </footer>
  )
}

export default Footer
