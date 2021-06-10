import React from "react"
import Form from "../components/forms/form"
import Layout from "../components/Layout"
import Resume from "../components/resume"

export default function Contact() {
  return (
    <>
 
    <Layout >

    <form name="Contact Form v1"
    method="post" 
    netlify-honeypot="bot-field" 
    data-netlify="true" 
    onSubmit="submit"
    >  <Form /></form>
        <Resume />
    </Layout>
    </>
  )
}