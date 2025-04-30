import React, {useState} from "react"
import Fade from 'react-reveal/Fade'
import VisibilitySensor from "react-visibility-sensor"
import {Link} from "gatsby"



export default function Quote () {
  return (

    <>
    <div className=" quote-p bold has-text-justified" style={{fontFamily: 'Nostromo-Oblique-Black', marginTop: 8 + "rem"}}>


<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade duration={2000} delay={200}> 
<span>When a Gem is made, it's for a reason.</span>
</Fade>
)}
</VisibilitySensor>
<br/>

<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade duration={2000} delay={2400}> 
<span>They burst out of the ground</span>
</Fade>
)}
</VisibilitySensor>
<br/>
<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade duration={2000} delay={4600}> 
<span>already knowing what they're supposed to be,</span>
</Fade>
)}
</VisibilitySensor>

<br/>
<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade duration={2000} delay={6900}> 
<span>And then...</span>
</Fade>
)}
</VisibilitySensor>
<br/>
<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade duration={2000} delay={8400}> 
<span>That's what they are. Forever.</span>
</Fade>
)}
</VisibilitySensor>
<br/>

<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade duration={2000} delay={10900}> 
<Link to="/contact"><div className="button mt-4">Let's Talk</div></Link>
</Fade>
)}
</VisibilitySensor>



</div>

</>
    )
}





    

