import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import {Submit} from "../components/styled"


const Container = styled.div`
    width: 80vw;
    margin: 0 auto;
    @media (min-width: 960px) {
        width: 50vw;   
    }
`

const Contact = () =>{
    return(
       <Layout>
           
           <div>
           <h2>Contact Us</h2>
           </div>
           
           <form action="" method="POST" >
           <Container>
               <div>
                   <label htmlFor="name">name</label>
                   <input type="text" name="name" />
               </div>
               <div>
                   <label htmlFor='email'>email</label>
                   <input type="email" name="name" />
               </div>
               <div>
                   <label htmlFor='message'>message</label>
                   <textarea name="message" rows="10"/>
               </div>
               
               <div style ={{width: '10rem'}}>
                   <Submit/>
               </div>
               </Container>
           </form>
           
       </Layout> 
    )
}

export default Contact

