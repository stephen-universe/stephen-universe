import React, { Component } from "react"
import { Link } from "gatsby"

export class UserForm extends Component {  
  state = {    
    step: 1,    
    fullName: "",    
    lastName: "",    
    email: "",    
    budget: "",    
    city: "",    
    number: "",    
    message: "",    
    option: "",    
    additionalOptions: "",    
    
    isSubmitting: false,    
    submissionError: null  };  
    
    nextStep = () => {    
      const { step } = this.state;   
      this.setState({ step: step + 1 });  };    
      
      prevStep = () => {    
        const { step } = this.state;    
        this.setState({ step: step - 1 });  };  

        handleChange = (input) => (e) => {    
          this.setState({ [input]: e.target.value });  }; 
          
          handleFinalSubmit = async () => {    
            this.setState({ isSubmitting: true, submissionError: null });        
            
            try {      
                const response = await fetch('/api/submit-form', {        
                method: 'POST',       
                headers: { 'Content-Type': 'application/json' },        
                body: JSON.stringify({          
                  ...this.state })
                });
                  
                if (!response.ok) throw new Error('Submission failed');      
                this.nextStep(); 
                
              }catch (error) {      
                  this.setState({ submissionError: error.message });    
                } finally {      
                  this.setState({ isSubmitting: false });   
                }  
              };  
                
                      render() {    
                        
                        const { step, isSubmitting, submissionError } = this.state;    
                        const values = { ...this.state };    
                        
                        switch (step) {      
                          case 1:       
                          return (          
                          
                          <FormUserDetails           
                          nextStep={this.nextStep}            
                          handleChange={this.handleChange}            
                          values={values}/>        
                          );      
                          
                          case 2:        
                          return (          
                          <FormPersonalDetails            
                          nextStep={this.nextStep}            
                          prevStep={this.prevStep}            
                          handleChange={this.handleChange}            
                          values={values}/>        
                        );      
                        
                          case 3:        
                          return (          
                          <Confirm           
                          nextStep={this.nextStep}            
                          prevStep={this.prevStep}            
                          handleFinalSubmit={this.handleFinalSubmit}           
                          
                          isSubmitting={this.state.isSubmitting}            
                          error={this.state.submissionError}            
                          values={values}/>        
                          );      
                          
                          case 4:  
                          return (    
                          
                          <div className="section">      
                          <div className="container has-text-centered">        
                            <h1 className="title">Thank You!</h1>        
                            <p>We've received your submission.</p>        
                            <button           
                            className="button is-link mt-5"          
                            onClick={() => this.setState({             
                              step: 1,             
                              fullName: "",     
                              email: "",    
                              budget: "",    
                              number: "",    
                              message: "",        
                              additionalOptions: "",            
                              })}        
                              >          
                              Start New Submission        
                              </button>      
                              </div>    
                              </div>  
                              );     
                              
                              default:        
                              return <div>Form Error</div>;    
                            }  
                          }
                     
                }

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values, handleChange } = this.props
    return (
      <>
      <div className="column is-8 ">
      <h1 className="under-construction-title">Site Under Construction</h1>
      <br/>

      <h1 className="contact-title">Still Have Questions?</h1>
        <h1 className="contact-subtitle">Let's Talk Design.</h1>
        <h1 className="contact-p">I'd Love To Hear From You</h1>
        <p className="" style={{fontSize: 0.7 + "rem" }}>Please Fill Out The Form Below</p>
        </div>
        <section className="section is-small">
          <div className="columns">
            <div className="column is-6 ">
              <input
                type="hidden"
                name="form-name"
                value="Initialize Contact Form"
              />
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Name"
                    name="fullName"
                    onChange={handleChange("fullName")}
                    defaultValue={values.fullName}
                    margin="normal"
                  />
                </div>
              </div>

              <input type="hidden" name="bot-field" />

              <div className="field">
                <label className="label">Number</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    placeholder="Enter Your Phone Number"
                    name="Number"
                    onChange={handleChange("number")}
                    defaultValue={values.number}
                    margin="normal"
                  />

                  <input type="hidden" name="bot-field" />
                  <span className="icon is-small is-left">
                   
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeHolder="Email input"
                    placeholder="Enter Your Email"
                    name="Email"
                    onChange={handleChange("email")}
                    defaultValue={values.email}
                    margin="normal"
                    fullWidth
                  />
                  <span className="icon is-small is-left">
                   
                  </span>
                </div>
              </div>

              <div className="d-none">
                <div className="field">
                  <label className="label">Budget (optional)</label>
                  <div className="control">
                    <input
                      className="input"
                      name="Budget"
                      type="number"
                      placeholder="Enter Your Budget"
                      onChange={handleChange("budget")}
                      defaultValue={values.budget}
                      margin="normal"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Project Type</label>
                  <div className="control">
                    <div
                      className="radio"
                      onChange={handleChange("additionalOptions")}
                      defaultValue={values.additionalOptions}
                    >
                      <label for="cars">Choose A Service:</label> <br />
                      <select name="services" id="services">
                        <option value="none">Select A Service</option>
                        <option value="general">General Question</option>
                        <option value="ux-design">UX Design</option>
                        <option value="web-development">Web Development</option>
                        <option value="corportate-identity/logo">
                          Corporate Identity/Logo
                        </option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="print-design">Print Design</option>
                        <option value="typography">Typography</option>
                        <option value="seo">Search Engine Optimization</option>
                        <option value="marketing">Marketing</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="Message"
                      onChange={handleChange("message")}
                      defaultValue={values.message}
                      placeHolder="Breifly describe details about your project needs & goals. I'm here to help!"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="field is-grouped is-grouped-centered">
                <div className="control">
                  <button
                    className="button is-link"
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          <div className="column is-1"></div>
          <div className="column is-1"><div className="vertical-divider"></div></div>
          <div className="column is-4 has-text-centered"><img src="" />
          <p className="" style={{color: "#FFF"}}>
          <img className="" src="/make-contact.png" /> <br />
            Not Sure Where To Start.. <br/>
            I've Got You Covered. <br/> <br/>
            Check Out This Guide To Learn About New Design Techniques, Trends, & More</p>
            <div className="mt-2"  > <Link to="/" style={{color: "#FFF", fontFamily: 'Nostromo-Black', textShadow: '-1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0),', textDecoration:'underline dashed', textDecorationColor: '#E84834', textDecorationThickness: '1.6px' }}>Style Guide</Link></div>
          </div>
          </div>
        </section>
      </>
    )
  }
}

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values, handleChange } = this.props
    return (
      <>
       <div className="column is-8 ">
        <h1 className="contact-title">Site Under Construction</h1>
<h1 className="contact-title">Still Have Questions?</h1>
        <h1 className="contact-subtitle">Let's Talk Design.</h1>
        <h1 className="contact-p">I'd Love To Hear From You</h1>
        <p className="" style={{fontSize: 0.7 + "rem" }}>Please Fill Out The Form Below</p>
        </div>
        <section className="section is-small">
          <div className="columns ">
            <div className="column is-6 ">
              <input
                type="hidden"
                name="form-name"
                value="Initialize Contact Form"
              />
              <input type="hidden" name="bot-field" />

              <div className="field">
                <label className="label">Budget</label>
                <div className="control">
                  <input
                    className="input"
                    name="Budget"
                    type="number"
                    placeholder=" Enter Your Budget Amount"
                    onChange={handleChange("budget")}
                    defaultValue={values.budget}
                    margin="normal"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Project Type</label>
                <div className="control">
                  <div
                    className="radio"
                    onChange={handleChange("additionalOptions")}
                    defaultValue={values.additionalOptions}
                  >
                    <label for="cars">Choose A Service:</label> <br />
                    <select name="services" id="services">
                      <option value="none">Select A Service</option>
                      <option value="ux-design">General Question</option>
                      <option value="ux-design">UX Design</option>
                      <option value="web-development">Web Development</option>
                      <option value="corportate-identity/logo">
                        Corporate Identity/Logo
                      </option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="print-design">Print Design</option>
                      <option value="typography">Typography</option>
                      <option value="seo">Search Engine Optimization</option>
                      <option value="marketing">Marketing</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="Message"
                    onChange={handleChange("message")}
                    defaultValue={values.message}
                    placeHolder=" Breifly describe any details 
                    about your project needs & goals.
                    I'm here to help!"
                  />
                </div>
              </div>

              <div className="field is-grouped is-grouped-centered">
                <div className="control">
                  <button
                    className="button is-link is-light"
                    color="secondary"
                    variant="contained"
                    onClick={this.back}
                  >
                    Back
                  </button>
                </div>

                <div className="control">
                  <button
                    className="button is-link"
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          <div className="column is-1"></div>
          <div className="column is-1"><div className="vertical-divider"></div></div>
          <div className="column is-4 has-text-centered"><img src="" />
          <p className="" style={{color: "#FFF"}}>
          <img className="" src="/make-contact.png" /> <br />
            Not Sure Where To Start.. <br/>
            I've Got You Covered. <br/> <br/>
            Check Out This Guide To Learn About New Design Techniques, Trends, & More</p>
            <div className="mt-2"  > <Link to="/" style={{color: "#FFF", fontFamily: 'Nostromo-Black', textShadow: '-1px -1px 0 rgb(0, 0, 0), -1px 1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0)', textDecoration:'underline dashed', textDecorationColor: '#E84834', textDecorationThickness: '1.6px'}}>Style Guide</Link></div>
          </div>
          </div>
        </section>
      </>
    )
  }
}

export class Confirm extends Component { 
   
    state = { isSubmitting: false, 
    submissionError: null };  

    handleSubmit = async (e) => {    
      e.preventDefault();    
      this.setState({ isSubmitting: true, 
      submissionError: null });    
      
      const { 
        fullName, 
        email, 
        number, 
        budget, 
        additionalOptions,
        option, 
        message } = this.props.values;    
        try {      
          
          const response = await fetch('https://script.google.com/macros/s/AKfycbwrTF1MIXXxjSVCWgvmfuMbTd6rcM68UcxuicNLmPs4qPl9OANXZeV7ytW2MhXndFHr/exec', {        
            method: 'POST',        
            headers: { 'Content-Type': 'application/json' },        
            
            body: JSON.stringify({          
              fullName,          
              email,          
              phone: number,          
              budget,          
              service: additionalOptions,          
              message, 
              option,
              timestamp: new Date().toISOString()       
            }),      
          });      
          
          if (!response.ok) throw new Error('Submission failed');      
          this.props.nextStep();
          } 
          
          catch (error) {       
          this.setState({ submissionError: 'Failed to submit. Please try again.' });    
            } finally {      
              this.setState({ isSubmitting: false });    
              }  
              };  
              
              render() {    
                const {
                  values: {
                  fullName, 
                  email, 
                  number, 
                  budget, 
                  additionalOptions,
                  option, 
                  message }, prevStep, isSubmitting, submissionError
                   } = this.props;    
                return (      
                

      
 
  
    
        <form
          onSubmit= {(e) => {
            e.preventDefault()
            this.props.handleFinalSubmit()}
          }
        >
          <input type="hidden" name="form-name" value="Contact Form v1" />
          <div className="d-none">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="fullName"
                  placeholder="Enter Your Full Name"
                  value={fullName}
                  margin="normal"
                />
              </div>
            </div>
            <input type="hidden" name="bot-field" />

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter Your Email"
                  name="Email"
                  margin="normal"
                  value={email}
                />
                <span className="icon is-small is-left">
                 
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="Message"
                  value={message}
                  placeHolder="Textarea"
                ></textarea>
              </div>
            </div>

            <input type="hidden" name="bot-field" />
            <div className="field">
              <label className="label">Budget</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="Budget"
                  value={budget}
                  placeholder="Enter Your Budget Amount"
                  margin="normal"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Number</label>
              <div className="control">
                <input
                  className="input"
                  name="Number"
                  type="number"
                  value={number}
                  placeholder="Enter Your Email"
                  margin="normal"
                />
                <span className="icon is-small is-left">
                 
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Project Type</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="Option"
                  margin="normal"
                  value={additionalOptions}
                />
              </div>
            </div>
          </div>

          <section className="section">
            <div className="columns is-centered">
              <div className="column is-6">
                <div className="container">
                  <label
                    className="label has-text-centered py-5"
                    name="Details"
                  >
                    Please Confirm
                  </label>

                  <div class="field is-horizontal">
                    <div class="field-label  ">
                      <label class="label">Name</label>
                    </div>
                    <div class="field-body">
                      <div class="field">{fullName}</div>
                    </div>
                  </div>

                  <div class="field is-horizontal">
                    <div class="field-label  ">
                      <label class="label">Email</label>
                    </div>
                    <div class="field-body">
                      <div class="field">{email}</div>
                    </div>
                  </div>

                  <div class="field is-horizontal">
                    <div class="field-label  ">
                      <label class="label">Number</label>
                    </div>
                    <div class="field-body">
                      <div class="field">{number}</div>
                    </div>
                  </div>

                  <div class="field is-horizontal">
                    <div class="field-label  ">
                      <label class="label">Budget</label>
                    </div>
                    <div class="field-body">
                      <div class="field">{budget}</div>
                    </div>
                  </div>

                  <div class="field is-horizontal">
                    <div class="field-label  ">
                      <label class="label">Service</label>
                    </div>
                    <div class="field-body">
                      <div class="field">{additionalOptions}</div>
                    </div>
                  </div>

                  <div class="field is-horizontal">
                    <div class="field-label  ">
                      <label class="label">Message</label>
                    </div>
                    <div class="field-body">
                      <div class="field">{message}</div>
                    </div>
                  </div>

                  <div className="field is-grouped is-grouped-centered py-5">
                    <div className="control">
                      <button
                        className="button is-link is-light"
                        color="secondary"
                        variant="contained"
                        onClick={this.back}
                      >
                        Back
                      </button>
                    </div>

                    <div className="control">
                      <button
                        className={"button is-link $ {this.props.isSubmitting ? 'is-loading' : ''}"}
                        disabled={this.props.isSubmitting}
                        type="submit"
                        color="primary"
                        variant="contained"
                        onSubmit="submit"
                      >
                        {this.props.isSubmitting ? 'Submitting...' : 'Submit'}
                      </button>
                    </div>  
                  </div>
                  {this.props.error && (
                    <div className="notification is-danger">
                      {this.props.error}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </form>
    )
  };
}
export default UserForm
