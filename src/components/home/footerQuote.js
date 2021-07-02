import React, {useState} from "react"
import {Spring, animated} from 'react-spring'
import VisibilitySensor from "react-visibility-sensor"
import { Link } from "gatsby"

export default function FooterQuote () {
  return (

    
    <>
    <div className="has-text-centered">
    <VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring > 
              {styles => (
          <animated.div style={styles}>  
"But you, you're supposed to change.
<br /> You're never the same even moment to moment
<br /> You're allowed and expected to invent who you are.
<br />  What an incredible power -- the ability to 'grow up'."

</animated.div>
              )}
              </Spring>
)}
</VisibilitySensor>

<Link to="/">
<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring delay={3500} config={{ mass: 5, tension: 2000, friction: 700 }} to={{opacity: isVisible ? 1 : 0}}> 
              {styles => (
          <animated.div style={styles}>  
<span><br />--Greg the Babysitter.</span>

</animated.div>
              )}
              </Spring>
)}
</VisibilitySensor>

<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring delay={4000} config={{ mass: 5, tension: 2000, friction: 800 }} to={{opacity: isVisible ? 1 : 0}}> 
              {styles => (
          <animated.div style={styles}>  
<span>Steven Universe</span>

</animated.div>
              )}
              </Spring>
)}
</VisibilitySensor>
</Link>
</div>


</>
    )
}





    

