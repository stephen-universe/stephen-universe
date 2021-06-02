import React, { Component } from 'react';


export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
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
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

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
      <div className="field">
      <label className="label">Name</label>
      <div className="control">
          
      <input type="hidden" name="form-name" value="contact v4" />
      <input type="hidden" name="bot-field" />
  
          <input 
          className="input" 
          type="text" 
          placeholder="Enter Your First Name"
          name="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          margin="normal"
          fullWidth />
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
  
  <div className="field">
      <label className="label">Subject</label>
      <div className="control">
          <div className="select">
              <select >
                  <option>Option #1</option>
                  <option>Option #2</option>
              </select>
          </div>
      </div>
  </div>
  
  
  <div className="field">
      <label className="label">Message</label>
      <div className="control">
          <textarea className="textarea"  onChange={handleChange('message')}
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
          <input type="hidden" name="bot-field" />
              <div className="field">
              <label className="label">Occupation</label>
              <div className="control">
              <input type="hidden" name="form-name" value="contact v4" />
              <input className="input" type="text" placeholder="Enter Your Occupation" name="Occupation"
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
                  <div className="select">
                      <select>
                          <option>Option #1</option>
                          <option>Option #2</option>
                      </select>
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
        values: { firstName, lastName, message, email, occupation, city, bio }
      } = this.props;
      return (
  
          
    
          <>
      <form name="contact v4"
  method="post" 
  netlify-honeypot="bot-field" 
  data-netlify="true" 
  onSubmit="submit">
  
          <input type="hidden" name="form-name" value="contact v4" />
  
              <label className="label" name="Details">Confirm User Data</label>
        
              <li type="text"  name="firstName"
          placeholder="Enter Your First Name"
          name="First Name">{firstName} </li>
  
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