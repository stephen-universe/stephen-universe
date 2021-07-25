
import React from "react";
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade';



export default function Hobbies () {
        return (
            <>
<br/>
<br/>
<br/>

<div className="container"> 
                <div className="has-text-centered">
                    When I'm not creating products or brand identites
                </div>
            <div className="tile is-12 is-ancestor">
        
              <Fade delay={300}>
         
                <div className="tile is-4 has-text-centered">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                               
                             Here is Some Text

                            <br/>
                             <button type="button">
                               Click Me 
                              </button>
                            </div>
                          </div>
                      </div>
                </div>
                
           </Fade>

           
           <Fade delay={300}>
         
         <div className="tile is-4 has-text-centered">
             <div className="tile">
                 <div className="tile is-parent">
                     <div className="tile is-child box">
                        
                      Here is Some Text

                     <br/>
                      <button type="button">
                        Click Me 
                       </button>
                     </div>
                   </div>
               </div>
         </div>
         
    </Fade>

    
    <Fade delay={300}>
         
         <div className="tile is-4 has-text-centered">
             <div className="tile">
                 <div className="tile is-parent">
                     <div className="tile is-child box">
                        
                      Here is Some Text

                     <br/>
                      <button type="button">
                        Click Me 
                       </button>
                     </div>
                   </div>
               </div>
         </div>
         
    </Fade>
         </div>                
            </div>
                <br/>
                <br/>

<div className=" orange bold has-text-centered" style={{marginTop: 24.5 + "rem"}}>

<div className="">
    <Fade cascade duration={2000} delay={600}><span>Feel Free To Explore Around</span></Fade> <br/>
    <Fade cascade duration={2000} delay={1400}><span style={{fontSize: 2 + 'rem'}}>And When Ready, </span> </Fade> <br/>
    <Fade cascade duration={2000} delay={2250}><span> <div className="button resume-link"><Link to="/contact">Intialize Contact!</Link></div></span></Fade><br/><br/>
                <br/>
                <br/>
    <Fade cascade duration={2000} delay={2700}><span>Safe Travels!</span></Fade><br/>
    <Fade cascade duration={2000} delay={3200}><span>As I Look Forward To Working Together.</span></Fade><br/>
  </div>
</div>
                               <br/>
                <br/>
                <br/>
                <br/>

 
          </>
        ); 
      };
  