import React, { Component } from 'react';


export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
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
    const { firstName, lastName, email, message, option, additionalOptions, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, message, option, additionalOptions, occupation, city, bio };

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
          placeholder="Enter Your First Name"
          name="firstName"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          margin="normal" />
      </div>
  </div>
  
  <input type="hidden" name="bot-field" />
  
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
  
  <div className="field">
      <label className="label">Please select your gender:</label>
      <div className="control">
          <div className="radio"
          onChange={handleChange('option')}
          defaultValue={values.option}>
                <input type="radio" id="male" name="gender" value="male" />
                Male <br />
                <input type="radio" id="female" name="gender" value="female" />
                Female<br />
                <input type="radio" id="other" name="gender" value="other" />
                Other
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
              <label className="label">Occupation</label>
              <div className="control">
              <input className="input" name="Occupation" type="text" placeholder="Enter Your Occupation"
                  onChange={handleChange('occupation')} defaultValue={values.occupation} margin="normal" />
              </div>
          </div>
          
          <div className="field">
              <label className="label">Bio</label>
              <div className="control">
                  <input className="input" type="bio" placeholder="Enter Your Email" name="Bio"
                    onChange={handleChange('bio')} defaultValue={values.bio} margin="normal"/>
                          
      <input type="hidden" name="bot-field" />
                      <span className="icon is-small is-left">
                          <i className="fas fa-envelope"></i>
                      </span> 
              </div>
          </div>
          
          <div className="field">
              <label className="label">Subject</label>
              <div className="control">
                  <div className="radio" 
                    onChange={handleChange('additionalOptions')}
                    defaultValue={values.additionaloptions}>
                    <p>Please select your age:</p>
                    <input type="radio" id="age1" name="age" value="30" />
                    <label for="age1">0 - 30</label><br/>
                    <input type="radio" id="age2" name="age" value="60" />
                    <label for="age2">31 - 60</label><br />  
                    <input type="radio" id="age3" name="age" value="100" />
                    <label for="age3">61 - 100</label><br/>
                  </div>
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
        values: { firstName, additionalOptions, message, email, occupation, option, bio }
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
      <label className="label">Subject</label>
      <div className="control">
      <input className="input" type="text" margin="normal" value={option}/>              
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
              <label className="label">Occupation</label>
              <div className="control">
              <input className="input" type="text" name="Occupation" value={occupation} placeholder="Enter Your Occupation" 
                  margin="normal" />
              </div>
          </div>
          
          <div className="field">
              <label className="label">Bio</label>
              <div className="control">
                  <input className="input" name="Bio" type="bio" value={bio} placeholder="Enter Your Email" 
                    margin="normal"/>
                      <span className="icon is-small is-left">
                          <i className="fas fa-envelope"></i>
                      </span> 
              </div>
          </div>
          
          <div className="field">
            <label className="label">Subject</label>
                <div className="control">
                    <input className="input" type="text" name="Option" margin="normal" value={additionalOptions}/>              
                </div>
        </div>
          </div>
         
         
  


  
              <label className="label" name="Details">Confirm User Data</label>
        
              <li type="text"  name="Name"
          placeholder="Enter Your First Name"
          name="First Name">{firstName} </li>
          <li>{message}</li>
          <li>{option}</li>
          <li>{email}</li>
          <li>{additionalOptions}</li>
          <li>{bio}</li>
  
              <div className="field is-grouped is-grouped-centered">
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
          </form>
          </>
  
      );
    }
  }
  

  export default UserForm;