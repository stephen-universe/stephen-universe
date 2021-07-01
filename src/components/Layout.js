import React from "react"
import Resume from "../components/resume"
import Navigation from "./navigation"
import Helmet from "react-helmet"
import useResumeData from "../static_queries/useResumeData"
import Footer from "./footer"
import ScrollApp from "./buttons"

export default function Layout(props) {
  const { title, description } = useResumeData()
  return (
    <>
     <div className="header-top-color"> <Resume /> </div>
     <div className="background" alt="Space" >
     <div className="section-divider"></div> 
     <div className="container">
    <Navigation page={props.page} title={title} />
    </div>
    </div>
   
    <section className="" >
      <div className="container">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <div className="">{props.children}</div>
      </div>
    </section> 
    <ScrollApp />

    <Footer />
    
    
    </>
  )
}