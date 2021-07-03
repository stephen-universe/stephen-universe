import React from "react"
import Fade from 'react-reveal/Fade'

export default function Introduction() {  


    
      
    return (
  <>


<div className="trailsText">
    <Fade cascade duration={2000} delay={800}><span>Hi</span></Fade> <br/>
    <Fade cascade duration={1500} delay={1400}><span>I'm Stephen</span></Fade><br/>
    <Fade cascade duration={2000} delay={2300}><span>And I am A Solver</span></Fade><br/>
    <Fade cascade duration={2000} delay={3000}><span>Of Many Problems</span></Fade><br/>
  </div>



    <Fade bottom duration={1500} delay={4000}> 
    <div className="orange mt-3" style={{textAlign: 'right', fontSize: 1.1 + 'rem'}}>
  Using my Quantitative Knowledge in Research & my Methodical Approach in Design 
<br/> I landed a career as a Product Designer & Developer!
<br/>
<br/> Originally from the Lone Star State, by way of Houston -- I now reside in Atlanta, Georgia
<br/> Where I currently work for AVX Studios as an UX Astronaut!
</div>
</Fade>

 

</>
    )
}



