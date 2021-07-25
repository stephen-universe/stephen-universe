import React from "react"
import Fade from 'react-reveal/Fade'

export default function Introduction() {  


    
      
    return (
  <>


        <div className="tile is-10 is-ancestor">
            <div className="tile is-12">
                <div className="tile">
                      <div className="tile is-parent">
                        <div className="trailsText" style={{ marginTop: 6 + "rem"}}>
                            <Fade cascade duration={2000} delay={800}><span>Hi</span></Fade> <br/>
                            <Fade cascade duration={1500} delay={1400}><span>I'm Stephen</span></Fade><br/>
                            <Fade cascade duration={2000} delay={2300}><span>And I am A Solver</span></Fade><br/>
                            <Fade cascade duration={2000} delay={3000}><span>Of Many Problems</span></Fade>
                           
                        </div>
                    </div>
                </div>
            </div>
            
                          <img src="/stephen-universe.png" style={{width: 35 + '%', maxHeight: 235 + 'px', marginTop: 12 + 'rem'}}/><br/>
                      </div>



        
  


    <Fade bottom duration={1500} delay={4000}> 
    <div className="orange" style={{textAlign: 'right', fontSize: 1.1 + 'rem', marginTop: 4 + "rem"}}>
  Using my Quantitative Knowledge in Research & my Methodical Approach in Design 
<br/> I landed a career as a Product Designer & Developer!
<br/>
<br/> Originally from the Lone Star State, by way of Houston -- I now reside in Atlanta, Georgia
<br/> Where I currently work for AVX Studios as an UX Astronaut!
</div>
</Fade>

 

</>
    )
}



