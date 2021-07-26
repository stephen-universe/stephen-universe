import React, {useState} from "react"
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"

export default function FooterQuote () {
  return (

    
    <>



        
        <div className="quote-p bold has-text-centered" style={{fontFamily: 'Nostromo-Oblique-Black'}}> 
       <Fade cascade duration={2000} delay={5500}>
          <span> "But you, you're supposed to change. <br />
                 You're never the same even moment to moment  <br />
                 You're allowed and expected to invent who you are. <br />
                 What an incredible power -- the ability to 'grow up'." <br /> <br />
          </span>
        </Fade>
      
                
        <span><Link to=""><Fade cascade duration={2000} delay={5500}><br/><span className="has-text-centered white">--Greg The Babysitter</span></Fade> <br/>
        <Fade cascade duration={2000} delay={6000}><br/><span className="has-text-centered white">Steven Universe</span></Fade><br/></Link></span>
        
          
        </div>
      

</>
    )
}



    

