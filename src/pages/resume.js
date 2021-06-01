import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (

    <Layout page="info" bgColor={infoData.background_color}>
      <section className="">
        <h2>
          <div dangerouslySetInnerHTML={{__html: infoData.description}}></div>
          <div dangerouslySetInnerHTML={{__html: infoData.cta}}></div>
        </h2>
        <ul>
          <li>
            <p>
              <a href={`mailto:${infoData.contact.email}`}>Email: {infoData.contact.email}</a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://twitter.com/${infoData.contact.twitter_handle}`}>
                Twitter: @{infoData.contact.twitter_handle}
              </a>
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
      <p>Lorem ipsum dolor sit amet, 
              consetetur sadipscing elitr, sed 
              diam nonumy eirmod tempor 
              invidunt ut labore et dolore 
              magna aliquyam erat, sed diam 
              voluptua. At vero eos et 
              accusam et justo duo dolores 
              et ea rebum. Stet clita kasd 
              gubergren, no sea takimata 
              sanctus est Lorem ipsum dolor 
              sit amet. Lorem ipsum dolor sit 
              amet, consetetur sadipscing</p>
        <div className="columns">
          <div className="column is-2">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-2">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-2">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-2">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-2">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-2">
            <button className="button is-rounded">Text</button>
          </div>
        </div>

        <div className="columns is-centered has-centered text-centered">
          <div className="column is-3">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-3">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-3">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-3">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-3">
            <button className="button is-rounded">Text</button>
          </div>
        </div>

        <div className="columns">
          <div className="column is-2">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-2">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-2">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-2">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-2">
            <button className="button is-rounded">Text</button>
          </div>
          <div className="column is-2">
            <button className="button is-rounded">Text</button>
          </div>
        </div>

      </section>



      <section className="section">
        <div className="columns">
          <div className="column is-5">
          <p>Lorem ipsum dolor sit amet, 
              consetetur sadipscing elitr, sed 
              diam nonumy eirmod tempor 
              invidunt ut labore et dolore 
              magna aliquyam erat, sed diam 
              voluptua. At vero eos et 
              accusam et justo duo dolores 
              et ea rebum. Stet clita kasd 
              gubergren, no sea takimata 
              sanctus est Lorem ipsum dolor 
              sit amet. Lorem ipsum dolor sit 
              amet, consetetur sadipscing</p>
          </div>
          <div className="column auto"></div>
          <div className="column is-5">
          <p>Lorem ipsum dolor sit amet, 
              consetetur sadipscing elitr, sed 
              diam nonumy eirmod tempor 
              invidunt ut labore et dolore 
              magna aliquyam erat, sed diam 
              voluptua. At vero eos et 
              accusam et justo duo dolores 
              et ea rebum. Stet clita kasd 
              gubergren, no sea takimata 
              sanctus est Lorem ipsum dolor 
              sit amet. Lorem ipsum dolor sit 
              amet, consetetur sadipscing</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="columns">
          <div className="column is-5">
          <p>Lorem ipsum dolor sit amet, 
              consetetur sadipscing elitr, sed 
              diam nonumy eirmod tempor 
              invidunt ut labore et dolore 
              magna aliquyam erat, sed diam 
              voluptua. At vero eos et 
              accusam et justo duo dolores 
              et ea rebum. Stet clita kasd 
              gubergren, no sea takimata 
              sanctus est Lorem ipsum dolor 
              sit amet. Lorem ipsum dolor sit 
              amet, consetetur sadipscing</p>
          </div>
          <div className="column auto"></div>
          <div className="column is-5">
          <p>Lorem ipsum dolor sit amet, 
              consetetur sadipscing elitr, sed 
              diam nonumy eirmod tempor 
              invidunt ut labore et dolore 
              magna aliquyam erat, sed diam 
              voluptua. At vero eos et 
              accusam et justo duo dolores 
              et ea rebum. Stet clita kasd 
              gubergren, no sea takimata 
              sanctus est Lorem ipsum dolor 
              sit amet. Lorem ipsum dolor sit 
              amet, consetetur sadipscing</p>
          </div>
        </div>
      </section>

<section className="section">

<div className="tile is-ancestor">

<div className="tile is-5 ">
            <div className="tile">
                <div className="tile is-parent">
                    <div className="tile is-child ">
                        <p className="title">One</p>
                        <Link to="/"><img src="/" /></Link>
                        <p> Lorem Ipsum</p>
                        <Link to="/" >
                            <div className="buttons  has-addons is-right">
                                <button className="button">Click Me</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="tile auto">
                </div>

  <div className="tile is-5 is-vertical">
            <div className="tile">
                <div className="tile is-parent">
                    <div className="tile is-child ">
                        <p className="title">One</p>
                        <Link to="/"><img src="/" /></Link>
                        <p> Lorem Ipsum</p>
                        <Link to="/" >
                            <div className="buttons  has-addons is-right">
                                <button className="button">Click Me</button>
                            </div>
                        </Link>
                    </div>
                </div>
              </div>
         
              <div className="tile">
                <div className="tile is-parent">
                    <div className="tile is-child">
                        <p className="title">One</p>
                        <Link to="/"><img src="/" /></Link>
                        <p> Lorem Ipsum</p>
                        <Link to="/" >
                            <div className="buttons  has-addons is-right">
                                <button className="button">Click Me</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        
      
                
  </div>

       

    </div>


</section>
  

    </Layout>
  )
}