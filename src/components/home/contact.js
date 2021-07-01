import React from "react"
import {Spring, animated} from 'react-spring'
import { Link } from "gatsby"
import VisibilitySensor from "react-visibility-sensor"


export default function InitializeContact() {  
    return (
  
      <>
    <div className="mt-6 orange bold has-text-centered">
<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring delay={800} config={{ mass: 5, tension: 2000, friction: 500 }} to={{opacity: isVisible ? 1 : 0}}> 
              {styles => (
          <animated.div style={styles}>  
<span>Feel Free To Explore Around</span>
<br/>
</animated.div>
              )}
              </Spring>
)}
</VisibilitySensor>

<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring delay={2000} config={{ mass: 5, tension: 2000, friction: 500 }} to={{opacity: isVisible ? 1 : 0}}> 
              {styles => (
          <animated.div style={styles}>  
          <br/>
<span style={{fontSize: 2 + 'rem'}}>And When Ready, <span><Link to="/contact">Intialize Contact!</Link></span></span>
<br/>
</animated.div>
              )}
              </Spring>
)}
</VisibilitySensor>

<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring delay={3250} config={{ mass: 5, tension: 2000, friction: 500 }} to={{opacity: isVisible ? 1 : 0}}> 
              {styles => (
          <animated.div style={styles}>  

<br/>
<span>Safe Travels!</span>
<br/>
</animated.div>
              )}
              </Spring>
)}
</VisibilitySensor>

<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring delay={5000} config={{ mass: 5, tension: 2000, friction: 500 }} to={{opacity: isVisible ? 1 : 0}}> 
              {styles => (
          <animated.div style={styles}>  
  <br/>
<span>As I Look Forward To Working Together.</span>

</animated.div>
              )}
              </Spring>
)}
</VisibilitySensor>

</div>
</>
    )
}
