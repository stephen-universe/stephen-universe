
import Form from "../../components/forms/form"
import Layouts from "../../components/layouts"

export default function Contact() {



  return (
    <>
<section className="main-body-bg">
<Layouts>
         
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
</Layouts>
</section>
    </>
  )
}