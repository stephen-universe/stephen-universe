import React, { useRef, Component } from "react"
import Resume from "../components/resume"
import Navigation from "../components/navigation"
import Helmet from "react-helmet"
import useResumeData from "../static_queries/useResumeData"
import Footer from "../components/footer"
import ScrollApp from "../components/buttons"
import Quote from "../components/home/quote"
import Introduction  from "../components/home/introduction"
import InitializeContact from "../components/home/contact"
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import FooterQuote from "../components/home/footerQuote"
import {Spring, animated} from 'react-spring'
import VisibilitySensor from "react-visibility-sensor"
import { Link } from "gatsby"


export default function ProjectPage(props) {
  const { title, description } = useResumeData()
  const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  const parallax = useRef<IParallax>(null!)
  return (
    <>


<div className="header-top-color"> <Resume /> </div>
          
          <div className="background" >
          <div className="section-divider"></div> 
             <div className="container">
                  <Helmet>
                    <html lang="en" />
                    <title>{title}</title>
                    <meta name="description" content={description} />
                  </Helmet>
                <Navigation page={props.page} title={title} />
                <Quote />
              </div>
          </div>

  <section className="main-body-bg" > 
      <Parallax ref={parallax} pages={3}>

                  
                  
                
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
            
           

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        >
          <div className="container"><Introduction /></div>
          </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
          }}
        >
            </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
             
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
                  <InitializeContact />

        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
                    <div className="has-text-centered">
    <VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
          {({ isVisible }) => (
              <Spring delay={2000} config={{ mass: 5, tension: 2000, friction: 500 }} from={{opacity: 0}} to={{opacity: isVisible ? 1 : 0}}> 
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
              <Spring delay={3500} config={{ mass: 5, tension: 2000, friction: 700 }} from={{opacity: 0}} to={{opacity: isVisible ? 1 : 0}}> 
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
              <Spring delay={4000} config={{ mass: 5, tension: 2000, friction: 800 }} from={{opacity: 0}} to={{opacity: isVisible ? 1 : 0}}> 
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

        </ParallaxLayer>
      </Parallax>

   </section>


   

 <ScrollApp />

 <div className="footer-bottom-color has-text-centered"> All Rights Reserved.</div>


    </>
    
  )
}












