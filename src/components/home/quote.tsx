import React from "react"
import {Spring, animated, useSpring} from 'react-spring'
import VisibilitySensor from '../VisibilitySensor'
import isVisible from 'react-visibility-sensor'


export default function Quote () {


    const styles = useSpring({ 
        delay: 800,
        config: { mass: 5, tension: 2000, friction: 500 },
        to: {opacity: isVisible ? 1 : 0 }})

  return (

    <>
    <div className="mt-6 orange bold has-text-centered">
    <VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
          <animated.div style={styles}>  
<span>When a Gem is made, it's for a reason.</span>
</animated.div>
)}
</VisibilitySensor>

<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring delay={2000} config={{ mass: 5, tension: 2000, friction: 500 }} to={{opacity: 1 }}> 
              {styles => (
          <animated.div style={styles}>  
<span style={{fontSize: 2 + 'rem'}}>They burst out of the ground<br /> already knowing what they're supposed to be,</span>

</animated.div>
              )}
              </Spring>
)}
</VisibilitySensor>

<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring delay={3250} config={{ mass: 5, tension: 2000, friction: 500 }} to={{opacity:  1 }}> 
              {styles => (
          <animated.div style={styles}>  

<span>And then...</span>

</animated.div>
              )}
              </Spring>
)}
</VisibilitySensor>

<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring delay={5000} config={{ mass: 5, tension: 2000, friction: 500 }} to={{opacity: 1 }}> 
              {styles => (
          <animated.div style={styles}>  
<span>That's what they are. Forever.</span>

</animated.div>
              )}
              </Spring>
)}
</VisibilitySensor>
</div>

</>
    )
}





    

