
import Form from "../../components/forms/form"
import dynamic from 'next/dynamic';
const Layouts = dynamic(() => import('../../components/layouts'), { ssr: false });

export default function Contact() {



  return (
    <>
<section className="main-body-bg">
<Layouts>
         
  <section className="section">
      <form name="Contact Form v1"
          method="post" 
          data-label="contact us form"
          data-form-type="contact"
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