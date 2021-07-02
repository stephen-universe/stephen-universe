import React, {Component} from "react"
import {Spring, animated} from '@react-spring/web'
import VisibilitySensor from "../VisibilitySensor"



class Quote extends Component {
    render () {
  return (

    <>
    <div className="mt-6 orange bold has-text-centered">
    <VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring 
              delay={800} 
              config={{ mass: 5, tension: 2000, friction: 500 }} 
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}> 
              { props => (
          <animated.div style={{opacity: props.opacity}}>  
<span>When a Gem is made, it's for a reason.</span>

</animated.div>
              )}
              </Spring>
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

<ChainExample />
</>
    )
}
}

export default Quote

class ChainExample extends Component {
    render() {
      return (
        <Spring
          loop
          from={{ opacity: 0, color: 'red' }}
          to={[
            { opacity: 1, color: '#ffaaee' },
            { opacity: 0, color: 'rgb(14,26,19)' },
          ]}>
          {styles => (
            <animated.div style={styles}>I will fade in and out</animated.div>
          )}
        </Spring>
      )
    }
  }
    

