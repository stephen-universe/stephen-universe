import React, {useState} from "react"
import Fade from 'react-reveal/Fade'
import VisibilitySensor from "react-visibility-sensor"
import {Link} from "gatsby"



export default function Quote () {
  return (

    <>
    <div className="mt-6 quote-p bold has-text-justified" style={{fontFamily: 'Nostromo-Oblique-Black'}}>


<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade duration={2000} delay={200}> 
<span style={{fontSize: 2.1 + 'rem'}}>When a Gem is made, it's for a reason.</span>
</Fade>
)}
</VisibilitySensor>
<br/>

<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade duration={2000} delay={2400}> 
<span style={{fontSize: 2.1 + 'rem', fontStyle: 'justify'}}>They burst out of the ground</span>
</Fade>
)}
</VisibilitySensor>
<br/>
<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade duration={2000} delay={4600}> 
<span style={{fontSize: 2 + 'rem', fontStyle: 'justify'}}>already knowing what they're supposed to be,</span>
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





    

