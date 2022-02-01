import React from "react"
import Fade from 'react-reveal/Fade'

export default function Introduction() {  

 return (
  <>

<div className="is-size-5-mobile has-text-centered-mobile is-size-2-tablet has-text-left-tablet is-size-3-desktop has-text-left-desktop is-size-2-widescreen  has-text-left-widescreen is-size-4-fullhd  has-text-left-fullhd" style={{ marginTop: 6 + "rem"}}>   
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
            
                          <img src="/stephen-universe.png" style={{ marginTop: 6 + "rem"}} className="self-image"/><br/>
        </div>
        </div>



  <Fade bottom duration={1500} delay={4000}> 
    <div className="is-size-5-mobile has-text-centered-mobile is-size-2-tablet has-text-right-tablet is-size-4-desktop has-text-right-desktop is-size-3-widescreen  has-text-right-widescreen is-size-4-fullhd  has-text-right-fullhd" style={{ marginBottom: 6 + "rem", marginTop: 6 + "rem"}}>
    <div className="orange introText ">
  Using my Quantitative Knowledge in Research <br/> & my Methodical Approach in Design 
<br/> I landed a career as a Product Designer!
<br/>
<br/> Originally from the Lone Star State <br/> by way of Houston, Texas I now reside in Atlanta, Georgia 
<br/> where I currently work for AVX Studios as an UX Astronaut!
</div>
      </div>
</Fade>



</>
    )
}
