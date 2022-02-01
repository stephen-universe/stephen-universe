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
import Hobbies from "../components/home/hobbies"

export default function ProjectPage(props) {
  // Little helpers ...
  const url = (name: string, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  
  const { title, description } = useResumeData()
  const parallax = useRef<IParallax>(null!)

  return (
       <div className="body-bg" style={{ position: "sticky"}}>
          <Parallax ref={parallax} pages={5}>
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

      
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#021f7c', zIndex: -1 }} />
        <ParallaxLayer offset={4.1} speed={1} style={{ backgroundColor: '#0071fd' }} />

        <ParallaxLayer
          offset={1}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        >   <div className="container"><Introduction /></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }} />



        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%', zIndex: 1  }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%', zIndex: 1  }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%', zIndex: 1  }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%', zIndex: 1  }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%', zIndex: 1  }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%', zIndex: 1  }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%', zIndex: 1  }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%', zIndex: 1 }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%', zIndex: 1  }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%', zIndex: 1  }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%', zIndex: 1  }} />
        </ParallaxLayer>
        <ParallaxLayer offset={3.4} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%', zIndex: 1  }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%', zIndex: 1  }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%', zIndex: 1  }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%', zIndex: 1  }} />
        </ParallaxLayer>

        <ParallaxLayer offset={3.1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%', zIndex: 1  }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%', zIndex: 1  }} />
        </ParallaxLayer>


        <ParallaxLayer offset={4.2} speed={0.4} style={{ opacity: 0.6 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%', zIndex: 1  }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%', zIndex: 1  }} />
        </ParallaxLayer>    

        <ParallaxLayer offset={4.5} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%', zIndex: 1  }} />
          
        </ParallaxLayer> 

        <ParallaxLayer offset={2.999} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%', zIndex: 1  }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%', zIndex: 1  }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5.2}
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
          offset={3}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
          }} />


        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}/>

        <ParallaxLayer
          offset={2.7}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div className="container"> <InitializeContact /></div>
            
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.1}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
           <FooterQuote/>
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
           <ScrollApp/>
        </ParallaxLayer>
      </Parallax>
      </div>
    
  )
}