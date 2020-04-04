import React from "react"
import Layout from "../components/layout"

const Contact = () =>{
    return(
       <Layout>
           <section>
           <div>
           <h2>Contact Us</h2>
           </div>
           <form action="" method="POST" >
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
               <div>
                   <input type="submit" value='submit here'/>
               </div>
           </form>
           </section>
       </Layout> 
    )
}

export default Contact

