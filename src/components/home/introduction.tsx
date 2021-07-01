import React, {useState} from "react"
import {Spring, animated, useTrail} from 'react-spring'
import VisibilitySensor from "react-visibility-sensor"



const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 500 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (

    <>
    <div>
      {trail.map(({ height, ...style }, index) => (
        <animated.div key={index} className="trailsText" style={style}>
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
    </>
  )
}

export default function Introduction() {  

    const [open, set] = useState(true)
    
      
    return (
  <>


<div className="is-horizontal-center">
  <div className="container">
    <img src=" "/>
  </div>
</div>


   <VisibilitySensor partialVisibility offset={{ top: 100 }}>
          {({ isVisible }) => (
              <Spring delay={100} config={{ mass: isVisible ? 8 : 0, tension: isVisible ? 2000 : 0, friction: isVisible ? 1000 : 0 }} from={{opacity: 0}} to={{opacity: isVisible ? 1 : 0,
                }}> 
              {styles => (
          <animated.div style={styles}>  
          <section className="section" style={{marginTop: 11 + 'rem'}}>
      <div className="container" onClick={() => set(state => !state)}>
      <Trail open={open}>
        <span>Hi!</span>
        <span>I'm Stephen</span>
        <span>And I Am A Solver</span>
        <span>Of Many Problems!</span>
      </Trail>
</div>
</section>
</animated.div>
              )}
              </Spring>
)}
</VisibilitySensor>




<VisibilitySensor partialVisibility offset={{ bottom: -100 }}>
          {({ isVisible }) => (
              <Spring delay={300} config={{ mass: 5 , tension:2000, friction: 1000  }} from={{opacity: 0}} to={{opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50vh)"}}> 
              {styles => (
          <animated.div style={styles}>  
<div className="orange" style={{textAlign: 'right', fontSize: 1.1 + 'rem'}}>
Using my Quantitative Knowledge in Research & my Methodical Approach in Design 
<br/> I landed a career as a Product Designer & Developer!
<br/>
<br/> Originally from the Lone Star State, by way of Houston -- I now reside in Atlanta, Georgia
<br/> Where I currently work for AVX Studios as an UX Astronaut!
</div>

</animated.div>
              )}
              </Spring>
)}
</VisibilitySensor>


</>
    )
}



