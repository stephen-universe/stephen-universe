import React from "react"
import Fade from 'react-reveal/Fade'
import { Link } from "gatsby"



export default function InitializeContact() {  
    return (

      <>
    <div className="mt-6 orange bold has-text-centered">

    <div className="">
        <Fade cascade duration={2000} delay={800}><span>Feel Free To Explore Around</span></Fade> <br/>
        <Fade cascade duration={1500} delay={1400}><span style={{fontSize: 2 + 'rem'}}>And When Ready, <span>
                    <div className="button resume-link"><Link to="/contact">Intialize Contact!</Link></div></span></span></Fade><br/><br/>
        <Fade cascade duration={2000} delay={2300}><span>Safe Travels!</span></Fade><br/>
        <Fade cascade duration={2000} delay={3000}><span>As I Look Forward To Working Together.</span></Fade><br/>
      </div>
</div>
</>
    )
}
