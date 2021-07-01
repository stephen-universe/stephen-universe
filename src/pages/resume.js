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
      <section className="">
        <h1 className="subtitle bold is-2 pt-3">
          <div dangerouslySetInnerHTML={{__html: infoData.author}}></div> </h1>
        <h2 className="title is-4 pt-4" style={{marginBottom: 0.2 + "rem"}}>
          <div dangerouslySetInnerHTML={{__html: infoData.title}}></div></h2>
       
        <ul>
          <li>
            <p>
              <a href={`mailto:${infoData.contact.email}`}>Email: {infoData.contact.email}</a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://github.com/${infoData.contact.github_handle}`}>Github: {infoData.contact.github_handle}</a>
            </p>
          </li>
        </ul>
      </section>

    
   

<section className="section">
<p className="title">Summary/Highlights</p> 
<p className="py-6">{infoData.introduction}</p>
  <div className="columns">
    <div className="column is-2">
      <button className="button is-rounded">{ infoData.skill.one }</button>
    </div>
    <div className="column is-2">
      <button className="button is-rounded">{ infoData.skill.two }</button>
    </div>
    <div className="column is-2">
      <button className="button is-rounded">{ infoData.skill.three }</button>
    </div>
    <div className="column is-2">
      <button className="button is-rounded">{ infoData.skill.four }</button>
    </div>
    <div className="column is-2">
      <button className="button is-rounded">{ infoData.skill.five }</button>
    </div>
    <div className="column is-2">
      <button className="button is-rounded">{ infoData.skill.six }</button>
    </div>
  </div>

  <div className="columns has-text-centered">
    <div className="column is-2 pl-9">
      <button className="button is-rounded">{ infoData.skill.seven }</button>
    </div>
    <div className="column is-2 pl-9">
      <button className="button is-rounded">{ infoData.skill.eight }</button>
    </div>
    <div className="column is-2 pl-9">
      <button className="button is-rounded">{ infoData.skill.nine }</button>
    </div>
    <div className="column is-2 pl-9">
      <button className="button is-rounded">{ infoData.skill.ten }</button>
    </div>
    <div className="column is-2 pl-9">
      <button className="button is-rounded">{ infoData.skill.eleven }</button>
    </div>
  </div>

  <div className="columns">
    <div className="column is-2">
      <button className="button is-rounded">{ infoData.skill.twelve }</button>
    </div>
    <div className="column is-2">
      <button className="button is-rounded">{ infoData.skill.thirteen }</button>
    </div>
    <div className="column is-2">
      <button className="button is-rounded">{ infoData.skill.fourteen }</button>
    </div>
    <div className="column is-2">
      <button className="button is-rounded">{ infoData.skill.fifteen }</button>
    </div>
    <div className="column is-2">
      <button className="button is-rounded">{ infoData.skill.sixteen }</button>
    </div>
    <div className="column is-2">
      <button className="button is-rounded">{ infoData.skill.seventeen }</button>
    </div>
  </div>

</section>




<section className="section">
<div className="tile is-ancestor">
<div className="tile is-5 ">
      <div className="tile">
          <div className="tile is-parent">
              <div className="tile is-child ">
                <p className="title">Education</p>
                  <span className="pt-5 bold subtitle">{infoData.educationOne.school}</span>
                    <span className="right bold italicize">
                      {infoData.educationOne.location}</span>

                  <span className="pt-5 orange">{infoData.educationOne.degree}</span>
                    <span className="right orange italicize">
                      {infoData.educationOne.year}</span>

                      <br />
                      <br />

                  <span className="pt-5 bold subtitle">{infoData.educationTwo.school}</span>
                    <span className="right bold italicize">
                      {infoData.educationTwo.location}</span>

                  <span className="pt-5 orange">{infoData.educationTwo.degree}</span>
                    <span className="right orange italicize">
                      {infoData.educationTwo.year}</span>
              </div>
          </div>
      </div>
  </div>
  <div className="tile auto"> </div>

<div className="tile is-5">
      <div className="tile">
          <div className="tile is-parent">
              <div className="tile is-child ">
                <p className="title">Certification</p>
                <p className="bold">{infoData.certificationOne.title} 
                  <span className="right orange italicize">{infoData.certificationOne.completion}</span></p>
                  <p className="bold">{infoData.certificationTwo.title} 
                  <span className="right orange italicize">{infoData.certificationTwo.completion}</span></p>
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
                  <span className="pt-5 bold subtitle">{infoData.jobOne.title}</span>
                    <span className="right bold italicize">
                      {infoData.jobOne.location}</span>
                      <br/>
                    <span className="pt-5 orange subtitle">{infoData.jobOne.position}</span>
                      <span className="right orange italicize">{infoData.jobOne.date}</span>
                      <br/>
                      <br/>
                      <ul className="justify">
                        <li>{infoData.jobOne.descriptionOne}</li>
                        <br/>
                        <li>{infoData.jobOne.descriptionTwo}</li>
                        <br/>
                        <li>{infoData.jobOne.descriptionThree}</li>
                      </ul>

                    <br />
                    <br />

                  <span className="pt-5 bold subtitle">{infoData.jobTwo.title}</span>
                    <span className="right bold italicize">
                      {infoData.jobTwo.location}</span>
                      <br/>
                    <span className="pt-5 subtitle orange">{infoData.jobTwo.position}</span>
                      <span className="right italicize orange">{infoData.jobTwo.date}</span>
                      <br/>
                      <br/>
                      <ul className="justify">
                        <li>{infoData.jobTwo.description}</li>
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
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.one}</span>
                  </div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.two}</span>
                  </div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.three}</span>
                  </div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.four}</span>
                  </div>
                 
                  <div className="pt-5 bold subtitle">Animation</div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.five}</span>
                  </div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.six}</span>
                  </div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.seven}</span>
                  </div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.eight}</span>
                  </div>

                  <div className="pt-5 bold subtitle">Web Design</div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.nine}</span>
                  </div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.ten}</span>
                  </div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.eleven}</span>
                  </div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.twelve}</span>
                  </div>

                  <div className="pt-5 bold subtitle">Web Development</div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.thirteen}</span>
                  </div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.fourteen}</span>
                  </div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.fifteen}</span>
                  </div>
                  <div class="item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.toolbox.sixteen}</span>
                  </div>

                      
                </div>
              
          </div>
        </div>
   
        <div className="tile">
          <div className="tile is-parent">
              <div className="tile is-child">
                  <p className="title">Hobbies</p>
                  <div class="hobby-item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.hobby.one}</span>
                  </div>
                  <div class="hobby-item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.hobby.two}</span>
                  </div>
                  <div class="hobby-item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.hobby.three}</span>
                  </div>
                  <div class="hobby-item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.hobby.four}</span>
                  </div>
                  <div class="hobby-item">
                      <img className="centered" src="src\images\francesco-mazzoli-0xh3QPqcfKM-unsplash.jpg"/>
                      <span class="caption">{infoData.hobby.five}</span>
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


