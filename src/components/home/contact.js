import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'



export default function InitializeContact() {  
    return (

      <>


<div className="container"> 
                <div className="has-text-centered title" style={{marginTop: 15 + 'rem', marginBottom: 3 + 'rem'}}>
                   My Creative Process:
                </div>

                <div className="has-text-centered" style={{ marginBottom: 3 + 'rem'}}>
                Not all products are created equally. <br/>
                In design, every project should solve a unique set of problems. <br/> <br/>
                To follow these guidelines I've generated a processs for constructing 'user-centered' & responsive web design.
                </div>
             <div className="container">
              <div className="row">     
            <div className="columns is-multiline is-12 is-mobile">
        
              <Fade cascade delay={300}>
         
                <div className="column is-half is-6 has-text-centered">
                    <div className="box">
                       <div className="title">Discover</div>
                              <img src="" />
                              <div className="subtitle">
                             Interview Both Owner & Customer </div>
                             <div className="subtitle">
                             Identify Any Pain Points </div> 
                              <div className="subtitle">
                             Identify The Competition</div>
                            </div>
                        
                </div>
                
           </Fade>

           
           <Fade  cascade delay={300}>
         
           <div className="column is-half is-6 has-text-centered">
                    <div className="box">
                       <div className="title">Research</div>
                              <img src="" />
                              <div className="subtitle">
                              Establish Technical Requirements <br/>
                          Collect Data Via User Research <br/>
                          Test
                             


                            <br/>
                            </div>
                            </div>
                        
                </div>
                
     
         
    </Fade>

    
    
    <Fade cascade delay={300}>
         
         <div className="column is-half is-6 has-text-centered">
             <div className="box">
                <div className="title">Discover</div>
                       <img src="" />
                       <div className="subtitle">
                      Interview Both Owner & Customer <br/>
                      Identify Any Pain Points <br/>
                      Identify The Competition<br/>
                      


                     <br/>
                     </div>
                     </div>
                 
         </div>
         
    </Fade>

    
    <Fade  cascade delay={300}>
  
    <div className="column is-half is-6 has-text-centered">
             <div className="box">
                <div className="title">Research</div>
                       <img src="" />
                       <div className="subtitle">
                       Establish Technical Requirements <br/>
                   Collect Data Via User Research <br/>
                   Test
                      


                     <br/>
                     </div>
                     </div>
                 
         </div>
         

  
</Fade>
      
         </div>  
         </div>
  
         </div>                
            </div>
               

<div className=" orange bold has-text-centered" style={{marginTop: 24.5 + "rem"}}>

<div className="">
    <Fade cascade duration={2000} delay={600}><span>Feel Free To Explore Around</span></Fade> <br/>
    <Fade cascade duration={2000} delay={1400}><span style={{fontSize: 2 + 'rem'}}>And When Ready, </span> </Fade> <br/>
    <Fade cascade duration={2000} delay={2250}><span> <div className="button resume-link"><Link to="/contact">Intialize Contact!</Link></div></span></Fade><br/><br/>
                
    <Fade cascade duration={2000} delay={2700}><span>Safe Travels!</span></Fade><br/>
    <Fade cascade duration={2000} delay={3200}><span>As I Look Forward To Working Together.</span></Fade><br/>
  </div>
</div>
           

 
          </>
        ); 
      };
  