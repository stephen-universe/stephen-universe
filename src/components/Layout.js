import React from "react"
import Header from "./Header"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import Footer from "./footer"
import ScrollApp from "./buttons"
import { Container } from "@material-ui/core"

export default function Layout(props) {
  const { title, description } = useSiteMetadata()
  return (
    <>
     <div className="header-top-color"> </div>
     <div className="background" alt="Space" >
     <Container>
    <Header page={props.page} title={title} />
    </Container>
    </div>
   
    <section
      className="" 
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <Container>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <div className="">{props.children}</div>
      </Container>
    </section>
    <ScrollApp />

    <Footer />
    
    
    </>
  )
}