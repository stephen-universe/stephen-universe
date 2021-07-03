import React from "react"
import Form from "../components/forms/form"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <>
<section className="main-body-bg">
<Layout >
  <section className="section">
      <form name="Contact Form v1"
          method="post" 
          netlify-honeypot="bot-field" 
          data-netlify="true" 
          onSubmit="submit"
          > 
        <div className="tile is-ancestor">
          <div className="tile is-12">
            <div className="tile">
              <div className="tile is-parent">
                <div className="tile is-child box">
                  
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
  </section>
</Layout>
</section>
    </>
  )
}