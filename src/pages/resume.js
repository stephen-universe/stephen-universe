import { graphql, Link} from "gatsby";
import React from "react"
import Layout from "../components/Layout"
import useResumeData from "../static_queries/useResumeData"





export default function Info({ data }) {
  const { infoData } = useResumeData()

  return (
    <>
<section className="main-body-bg">
    <Layout page="info">
      <section className="section">
        <h1 className="subtitle bold pt-3 is-size-5-mobile is-size-2-tablet is-size-1-desktop is-size-1-widescreen is-size-1-fullhd line-height">
          <div dangerouslySetInnerHTML={{__html: infoData.author}}></div> </h1>
        <h2 className="title mt-1 is-size-5-mobile is-size-3-tablet is-size-4-desktop is-size-4-widescreen is-size-4-fullhd">
          <div dangerouslySetInnerHTML={{__html: infoData.title}}></div></h2>
       
        <ul className="is-size-6-mobile is-size-6-tablet is-size-5-desktop is-size-5-widescreen is-size-5-fullhd">
          <li>
            <p>
              <a href={`mailto:${infoData.contact.email}`}>Email: {infoData.contact.email}</a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://github.com/${infoData.contact.github}`}>Github: www.github.com/{infoData.contact.github}</a>
            </p>
          </li>
        </ul>
      </section>

    
   

<section className="section">
<p className="title is-size-5-mobile is-size-3-tablet is-size-2-desktop is-size-1-widescreen is-size-1-fullhd">Summary/Highlights</p> 
<p className="py-6">{infoData.introduction}</p>

  <div className="columns">
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-1-desktop  is-size-2-widescreen is-size-2-fullhd">
      <button className="button is-rounded">{ infoData.skill.one }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-1-desktop  is-size-2-widescreen is-size-2-fullhd">
      <button className="button is-rounded">{ infoData.skill.two }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-1-desktop  is-size-2-widescreen is-size-2-fullhd">
      <button className="button is-rounded">{ infoData.skill.three }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-1-desktop  is-size-2-widescreen is-size-2-fullhd">
      <button className="button is-rounded">{ infoData.skill.four }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-1-desktop  is-size-2-widescreen is-size-2-fullhd">
      <button className="button is-rounded">{ infoData.skill.five }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-1-desktop  is-size-2-widescreen is-size-2-fullhd">
      <button className="button is-rounded">{ infoData.skill.six }</button>
    </div>
  </div>

  <div className="columns has-text-centered">
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-1-desktop  is-size-2-widescreen is-size-2-fullhd ">
      <button className="button is-rounded">{ infoData.skill.seven }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-1-desktop  is-size-2-widescreen is-size-2-fullhd ">
      <button className="button is-rounded">{ infoData.skill.eight }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-1-desktop  is-size-2-widescreen is-size-2-fullhd ">
      <button className="button is-rounded">{ infoData.skill.nine }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-1-desktop  is-size-2-widescreen is-size-2-fullhd ">
      <button className="button is-rounded">{ infoData.skill.ten }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-1-desktop  is-size-2-widescreen is-size-2-fullhd ">
      <button className="button is-rounded">{ infoData.skill.eleven }</button>
    </div>
  </div>

<div className="container">
  <div className="columns">
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-3-desktop  is-size-2-widescreen is-size-2-fullhd">
      <button className="button is-rounded">{ infoData.skill.twelve }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-3-desktop  is-size-2-widescreen is-size-2-fullhd">
      <button className="button is-rounded">{ infoData.skill.thirteen }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-3-desktop  is-size-2-widescreen is-size-2-fullhd">
      <button className="button is-rounded">{ infoData.skill.fourteen }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-3-desktop  is-size-2-widescreen is-size-2-fullhd">
      <button className="button is-rounded">{ infoData.skill.fifteen }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-3-desktop  is-size-2-widescreen is-size-2-fullhd">
      <button className="button is-rounded">{ infoData.skill.sixteen }</button>
    </div>
    <div className="column is-size-12-mobile has-text-centered-mobile is-size-4-tablet has-text-centered-tablet is-size-3-desktop  is-size-2-widescreen is-size-2-fullhd">
      <button className="button is-rounded">{ infoData.skill.seventeen }</button>
    </div>
  </div>
  </div>
</section>




<section className="section">
<div className="tile is-ancestor">
<div className="tile is-5 ">
      <div className="tile">
          <div className="tile is-parent">
              <div className="tile is-child ">
                <p className="title ">Education</p>
                  <span className="pt-5 bold subtitle">{infoData.education.educationOne.school}</span>
                    <span className="right bold italicize">
                      {infoData.education.educationOne.location}</span> <br/>

                  <span className="pt-5 orange">{infoData.education.educationOne.degree}</span>
                    <span className="right orange italicize" style={{fontSize: 0.75 + "rem"}}>
                      {infoData.education.educationOne.year}</span>

                      <br />
                      <br />

                  <span className="pt-5 bold subtitle">{infoData.education.educationTwo.school}</span>
                    <span className="right bold italicize">
                      {infoData.education.educationTwo.location}</span>  <br/>

                  <span className="pt-5 orange">{infoData.education.educationTwo.degree}</span>
                    <span className="right orange italicize" style={{fontSize: 0.75 + "rem"}}>
                      {infoData.education.educationTwo.year}</span>
              </div>
          </div>
      </div>
  </div>
  <div className="tile auto"> </div>

<div className="tile is-5">
      <div className="tile">
          <div className="tile is-parent">
              <div className="tile is-child ">
                <p className="title ">Certification</p>
                <p className="bold">{infoData.certification.certificationOne.title} 
                  <span className="right orange italicize">{infoData.certification.certificationOne.completion}</span></p>
                  <p className="bold">{infoData.certification.certificationTwo.title} 
                  <span className="right orange italicize">{infoData.certification.certificationTwo.completion}</span></p>
              </div>
          </div>
        </div>
   

  

          
</div>

</div>
</section>




<section className="section">
<div className="tile is-ancestor">
<div className="tile is-5 ">
      <div className="tile">
          <div className="tile is-parent">
              <div className="tile is-child ">
              <p className="title">Experience</p>
                  <span className="pt-5 bold subtitle">{infoData.employer.jobOne.title}</span>
                    <span className="right bold italicize">
                      {infoData.employer.jobOne.location}</span>
                      <br/>
                    <span className="pt-5 orange subtitle">{infoData.employer.jobOne.position}</span> <br/>
                      <span className=" orange italicize"  style={{fontSize: 0.75 + "rem"}}>{infoData.employer.jobOne.date}</span>
                      <br/>
                      <br/>
                      <ul className="justify">
                        <li>{infoData.employer.jobOne.descriptionOne}</li>
                        <br/>
                        <li>{infoData.employer.jobOne.descriptionTwo}</li>
                        <br/>
                        <li>{infoData.employer.jobOne.descriptionThree}</li>
                        <br/>
                        <li>{infoData.employer.jobOne.descriptionFour}</li>
                        <br/>
                        <li>{infoData.employer.jobOne.descriptionFive}</li>
                      </ul> 

              </div>
          </div>
      </div>
  </div>
  <div className="tile auto"> </div>

<div className="tile is-5 is-vertical">
      <div className="tile">
          <div className="tile is-parent">
              <div className="tile is-child ">
                  <p className="title">Tools</p>
                <div className="pt-5 bold subtitle">Graphic Design</div>
                  <div className="item">
                      <img className="centered" src="autocad-sketch.png"/>
                      <span className="caption">{infoData.toolbox.one}</span>
                  </div>
                  <div className="item">
                      <img className="centered" src="photoshop.png"/>
                      <span className="caption">{infoData.toolbox.two}</span>
                  </div>
                  <div className="item">
                      <img className="centered" src="in-design.png"/>
                      <span className="caption">{infoData.toolbox.three}</span>
                  </div>
                  <div className="item">
                      <img className="centered" src="illustrator.png"/>
                      <span className="caption">{infoData.toolbox.four}</span>
                  </div>
                 
                  <div className="pt-5 bold subtitle">Animation</div>
                  <div className="item">
                      <img className="centered" src="premiere.png"/>
                      <span className="caption">{infoData.toolbox.five}</span>
                  </div>
                  <div className="item">
                      <img className="centered" src="autocad-maya.png"/>
                      <span className="caption">{infoData.toolbox.six}</span>
                  </div>
                  <div className="item">
                      <img className="centered" src="after-effects.png"/>
                      <span className="caption">{infoData.toolbox.seven}</span>
                  </div>
                  <div className="item">
                      <img className="centered" src="animate.png"/>
                      <span className="caption">{infoData.toolbox.eight}</span>
                  </div>

                  <div className="pt-5 bold subtitle">Web Design</div>
                  <div className="item">
                      <img className="centered" src="sketch.png"/>
                      <span className="caption">{infoData.toolbox.nine}</span>
                  </div>
                  <div className="item">
                      <img className="centered" src="xd.png"/>
                      <span className="caption">{infoData.toolbox.ten}</span>
                  </div>
                  <div className="item">
                      <img className="centered" src="invision.png"/>
                      <span className="caption">{infoData.toolbox.eleven}</span>
                  </div>
                  <div className="item">
                      <img className="centered" src="webflow.png"/>
                      <span className="caption">{infoData.toolbox.twelve}</span>
                  </div> 

                  <div className="pt-5 bold subtitle">Web Development</div>
                  <div className="item">
                      <img className="centered" src="angular.png"/>
                      <span className="caption">{infoData.toolbox.thirteen}</span>
                  </div>
                  <div className="item">
                      <img className="centered" src="react.png"/>
                      <span className="caption">{infoData.toolbox.fourteen}</span>
                  </div>
                  <div className="item">
                      <img className="centered" src="express.png"/>
                      <span className="caption">{infoData.toolbox.fifteen}</span>
                  </div>
                  <div className="item">
                      <img className="centered" src="node-js.png"/>
                      <span className="caption">{infoData.toolbox.sixteen}</span>
                  </div>

                      
                </div>
              
          </div>
        </div>
   
        <div className="tile">
          <div className="tile is-parent">
              <div className="tile is-child">
                  <p className="title">Hobbies</p>
                  <div className="tile is-3">

                  <div className="hobby-item">
                      <img className="centered" src="drawing.png"/>
                      <span className="caption">{infoData.hobby.one}</span>
                  </div>

                  <div className="hobby-item">
                      <img className="centered" src="editing.png"/>
                      <span className="caption">{infoData.hobby.two}</span>
                  </div>

                  <div className="hobby-item">
                      <img className="centered" src="photography.png"/>
                      <span className="caption">{infoData.hobby.three}</span>
                  </div>

                  
            
                  <div className="hobby-item">
                      <img className="centered" src="cooking.png"/>
                      <span className="caption">{infoData.hobby.four}</span>
                  </div>



                  <div className="hobby-item">
                      <img className="centered" src="reading.png"/>
                      <span className="caption">{infoData.hobby.five}</span>
                  </div>


                  <div className="hobby-item">
                      <img className="centered" src="investing.png"/>
                      <span className="caption">{infoData.hobby.six}</span>
                  </div>

          
                  </div>
              </div>
          </div>
      </div>
  

          
</div>

</div>
</section>




    </Layout>

    </section>

</>
  )
}


