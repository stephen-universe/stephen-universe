import React from "react"
import Header from "./Header"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import Footer from "./footer"
import ScrollApp from "./buttons"

export default function Layout(props) {
  const { title, description } = useSiteMetadata()
  return (
    <>
    <section
      className="" 
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header page={props.page} title={title} />
      <div className="">{props.children}</div>
    </section>
    <ScrollApp />
    <section className="">
      <Footer />
    
    </section>
    </>
  )
}