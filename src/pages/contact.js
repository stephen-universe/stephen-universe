import React from "react"
import Form from "../components/forms/form"
import Layout from "../components/Layout"
import Cursor from '../components/home/cursor'

export default function Contact() {
  return (
    <>
 <section className="main-body-bg">
    <Layout >
<Cursor />
    <form name="Contact Form v1"
    method="post" 
    netlify-honeypot="bot-field" 
    data-netlify="true" 
    onSubmit="submit"
    >  <Form /></form>
       
    </Layout>
    </section>
    </>
  )
}