import React, { Component } from 'react';
import { Container } from '@material-ui/core';


export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    budget: '',
    city: '',
    number: '',
    message: '',
    option: '',
    additionalOptions: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, message, option, additionalOptions, budget, city, number } = this.state;
    const values = { firstName, lastName, email, message, option, additionalOptions, budget, city, number };

    switch (step) {
      case 1:
        return (

    
    

          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        ); 
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (

    

          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      default:
        (console.log('This is a multi-step form built with React.'))



            
      
    }
  }
}



export class FormUserDetails extends Component {
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    };
  
    render() {
      const { values, handleChange } = this.props;
      return (
    
          <>


  <section className="section is-large">
  <div className="columns is-centered">
  <div className="column is-6 ">
  <input type="hidden" name="form-name" value="Initialize Contact Form" />    
      <div className="field">
      <label className="label">Name</label>
      <div className="control">
          

          <input 
          className="input" 
          type="text" 
          placeholder="Enter Your Name"
          name="firstName"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          margin="normal" />
      </div>
  </div>
  
  <input type="hidden" name="bot-field" />

  

  <div className="field">
              <label className="label">Number</label>
              <div className="control">
                  <input className="input" type="number" placeholder="Enter Your Phone Number" name="Number"
                    onChange={handleChange('number')} defaultValue={values.number} margin="normal"/>
                          
      <input type="hidden" name="bot-field" />
                      <span className="icon is-small is-left">
                          <i className="fas fa-envelope"></i>
                      </span> 
              </div>
          </div>
  
<div className="field">
      <label className="label">Email</label>
      <div className="control">
          <input className="input" type="email" 
          placeHolder="Email input" 
            placeholder="Enter Your Email"
            name="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
            margin="normal"
            fullWidth
           />
              <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
              </span> 
      </div>
  </div>
  

  <div className="d-none">
  <div className="field">
              <label className="label">Budget (optional)</label>
              <div className="control">
              <input className="input" name="Budget" type="number" placeholder="Enter Your Budget"
                  onChange={handleChange('budget')} defaultValue={values.budget} margin="normal" />
              </div>
          </div>
          

         
          <div className="field">
          <label className="label">Project Type</label>
      <div className="control">
          <div className="radio"
          onChange={handleChange('additionalOptions')}
          defaultValue={values.additionalOptions}>
             <label for="cars">Choose A Service:</label> <br/>
  <select name="services" id="services">
  <option value="none">Select A Service</option>
    <option value="general">General Question</option>
    <option value="ux-design">UX Design</option>
    <option value="web-development">Web Development</option>
    <option value="corportate-identity/logo">Corporate Identity/Logo</option>
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
          <textarea className="textarea" name="Message" onChange={handleChange('message')}
            defaultValue={values.message} placeHolder="Textarea"></textarea>
      </div>
  </div>




          </div>


  
  <div className="field is-grouped is-grouped-centered">
      <div className="control">
         <button className="button is-link"  color="primary"
                variant="contained"
                onClick={this.continue}
              >Continue</button>
      </div>
  </div>
  
  </div>
  </div>
  </section>

  
                
       
          
          </>
   
      );
    }
  }
  

export class FormPersonalDetails extends Component {
    continue = e => {
      e.preventDefault();
      this.props.nextStep();
    };
  
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };
  
    render() {
      const { values, handleChange } = this.props;
      return (
          <>

  
          <section className="section is-large">
          <div className="columns is-centered">
          <div className="column is-6 ">
          <input type="hidden" name="form-name" value="Initialize Contact Form" />    
          <input type="hidden" name="bot-field" />

              <div className="field">
              <label className="label">Budget</label>
              <div className="control">
              <input className="input" name="Budget" type="number" placeholder="Enter Your Budget Amount"
                  onChange={handleChange('budget')} defaultValue={values.budget} margin="normal" />
              </div>
          </div>
          
         
          <div className="field">
          <label className="label">Project Type</label>
      <div className="control">
          <div className="radio"
          onChange={handleChange('additionalOptions')}
          defaultValue={values.additionalOptions}>
             <label for="cars">Choose A Service:</label> <br/>
  <select name="services" id="services">
  <option value="none">Select A Service</option>
    <option value="ux-design">UX Design</option>
    <option value="web-development">Web Development</option>
    <option value="corportate-identity/logo">Corporate Identity/Logo</option>
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
          <textarea className="textarea" name="Message" onChange={handleChange('message')}
            defaultValue={values.message} placeHolder="Textarea"></textarea>
      </div>
  </div>

          
          <div className="field is-grouped is-grouped-centered">
          <div className="control">
                  <button className="button is-link is-light"  
                  color="secondary"
                  variant="contained"
                  onClick={this.back}
                  >Back</button>
              </div>
  
              <div className="control">
                 <button  
                 className="button is-link"  color="primary"
                        variant="contained"
                        onClick={this.continue}
                      >Continue</button>
              </div>
             
  
          </div>
          
          </div>
          </div>
          </section>
                                            
                  </>
      );
    }
  }
  



export class Confirm extends Component {
    continue = e => {
      e.preventDefault();
      // PROCESS FORM //
      this.props.nextStep();
    };
  
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };
  
    render() {

        
        
      const {
        values: { firstName, additionalOptions, message, email, budget, option, number }
      } = this.props;

 
      return (
  
          
    
          <>
    
<form name="Contact Form v1"
    method="post" 
    netlify-honeypot="bot-field" 
    data-netlify="true" 
    onSubmit="submit"
    >  
<input type="hidden" name="form-name" value="Contact Form v1" />    
<div className="d-none">
<div className="field">
 
      <label className="label">Name</label>
      <div className="control">        
    <input className="input" type="text" name="firstName" placeholder="Enter Your First Name" value={firstName} margin="normal" />       
      </div>
  </div>
   <input type="hidden" name="bot-field" />

  <div className="field">
      <label className="label">Email</label>
      <div className="control">
          <input className="input" type="email" 
            placeholder="Enter Your Email" name="Email" margin="normal" value={email}/>
              <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
              </span> 
      </div>
  </div>
  

  
  
  <div className="field">
      <label className="label">Message</label>
      <div className="control">
          <textarea className="textarea" name="Message" value={message} placeHolder="Textarea"></textarea>
      </div>
  </div>


  <input type="hidden" name="bot-field" />
              <div className="field">
              <label className="label">Budget</label>
              <div className="control">
              <input className="input" type="text" name="Budget" value={budget} placeholder="Enter Your Budget Amount" 
                  margin="normal" />
              </div>
          </div>
          
          <div className="field">
              <label className="label">Number</label>
              <div className="control">
                  <input className="input" name="Number" type="number" value={number} placeholder="Enter Your Email" 
                    margin="normal"/>
                      <span className="icon is-small is-left">
                          <i className="fas fa-envelope"></i>
                      </span> 
              </div>
          </div>
          
          <div className="field">
            <label className="label">Project Type</label>
                <div className="control">
                    <input className="input" type="text" name="Option" margin="normal" value={additionalOptions}/>              
                </div>
        </div>
          </div>
         
         
  

<section className="section">  
  <div className="columns is-centered">
  <div className="column is-6">
<div className="container">
     <label className="label has-text-centered py-5" name="Details">Please Confirm</label>

     <div class="field is-horizontal">
  <div class="field-label  ">
    <label class="label">Name</label>
  </div>
  <div class="field-body">
    <div class="field">
      {firstName}
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label  ">
    <label class="label">Email</label>
  </div>
  <div class="field-body">
    <div class="field">
      {email}
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label  ">
    <label class="label">Number</label>
  </div>
  <div class="field-body">
    <div class="field">
      {number}
    </div>
  </div>
</div>


<div class="field is-horizontal">
  <div class="field-label  ">
    <label class="label">Budget</label>
  </div>
  <div class="field-body">
    <div class="field">
      {budget}
    </div>
  </div>
</div>


<div class="field is-horizontal">
  <div class="field-label  ">
    <label class="label">Service</label>
  </div>
  <div class="field-body">
    <div class="field">
      {additionalOptions}
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label  ">
    <label class="label">Message</label>
  </div>
  <div class="field-body">
    <div class="field">
    {message}
    </div>
  </div>
</div>
    

              <div className="field is-grouped is-grouped-centered py-5">
          <div className="control">
                  <button className="button is-link is-light"  
                  color="secondary"
                  variant="contained"
                  onClick={this.back}
                  >Back</button>
              </div>
  
              <div className="control">
                 <button className="button is-link" 
                 type="submit"
                  color="primary"
                        variant="contained"
                        onSubmit="submit"
                      >Submit</button>
              </div>
          </div>
          </div>
          </div>
          </div>
          </section>

          </form>
          </>
  
      );
    }
  }
  

  export default UserForm;