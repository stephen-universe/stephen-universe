import React, {useState} from "react"
import Fade from 'react-reveal/Fade'
import VisibilitySensor from "react-visibility-sensor"



export default function Quote () {
  return (

    <>
    <div className="mt-6 orange bold has-text-centered">


<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade delay={800}> 
<span>When a Gem is made, it's for a reason.</span>
</Fade>
)}
</VisibilitySensor>
<br/>

<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade delay={2500}> 
<span style={{fontSize: 2 + 'rem'}}>They burst out of the ground<br /> already knowing what they're supposed to be,</span>
</Fade>
)}
</VisibilitySensor>
<br/>
<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade delay={4200}> 
<span>And then...</span>
</Fade>
)}
</VisibilitySensor>
<br/>
<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
            <Fade duration={2000} delay={6000}> 
<span>That's what they are. Forever.</span>
</Fade>
)}
</VisibilitySensor>


</div>

</>
    )
}





    

