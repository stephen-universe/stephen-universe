import React, {useState} from "react"
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"

export default function FooterQuote () {
  return (

    
    <>



        <Fade cascade duration={2000} delay={1500}>
        <div className="has-text-centered orange">
                "But you, you're supposed to change. <br />
                 You're never the same even moment to moment <br />
                 You're allowed and expected to invent who you are. <br />
                 What an incredible power -- the ability to 'grow up'." <br /> <br />
                
        <span><Link to=""><Fade cascade duration={2000} delay={3500}><br/><span className="has-text-centered orange">--Greg The Babysitter</span></Fade><br/>
        <Fade cascade duration={2000} delay={4000}><br/><span className="has-text-centered orange">Steven Universe</span></Fade><br/></Link></span>
        
        
        </div>
        </Fade>

</>
    )
}



    

