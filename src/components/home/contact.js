import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'



export default function InitializeContact() {  
    return (

      <>

<br/>
<br/>
<br/>

<br/>
<br/>
<br/>

<br/>
<br/>
<br/>
<div className="container"> 
                <div className="has-text-centered title" style={{marginTop: 15 + 'rem', marginBottom: 3 + 'rem'}}>
                   My Creative Process:
                </div>

                <div className="has-text-centered" style={{ marginBottom: 3 + 'rem'}}>
                Not all products are created equally. <br/>
                In design, every project should solve a unique set of problems. <br/> <br/>
                To follow these guidelines I've generated a processs for constructing 'user-centered' & responsive web design.
                </div>
                  
            <div className="tile is-12 is-ancestor">
        
              <Fade cascade delay={300}>
         
                <div className="tile is-4 has-text-centered">
                    <div className="tile">
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                              <img src="" />
                              <div className="subtitle">Discover</div>
                             Interview Both Owner & Customer <br/>
                             Identify Any Pain Points <br/>
                             Identify The Competition<br/>
                             


                            <br/>
                            </div>
                          </div>
                      </div>
                </div>
                
           </Fade>

           
           <Fade  cascade delay={300}>
         
         <div className="tile is-4 has-text-centered">
             <div className="tile">
                 <div className="tile is-parent">
                     <div className="tile is-child box">
                        <img src="" />
                        <div className="subtitle">Research</div>
                          Establish Technical Requirements <br/>
                          Collect Data Via User Research <br/>
                          Test

                     <br/>

                     </div>
                   </div>
               </div>
         </div>
         
    </Fade>

    
    <Fade cascade delay={300}>
         
         <div className="tile is-4 has-text-centered">
             <div className="tile">
                 <div className="tile is-parent">
                     <div className="tile is-child box">
                     <img src="" />
                     <div className="subtitle">Design</div>
                      Provide A Solution <br/>
                      Provide Illustrations & Mock-Ups <br/>

                     <br/>

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
  