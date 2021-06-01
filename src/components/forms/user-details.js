import React, { Component } from 'react';


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
    <input type="hidden" name="bot-field" />

        <input 
        className="input" 
        type="text" 
        name="Name/Business" 
        placeholder="Enter Your First Name"
        label="First Name"
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
          label="Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
          margin="normal"
          fullWidth
          name="Email" />
            <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
            </span> 
    </div>
</div>

<div className="field">
    <label className="label">Subject</label>
    <div className="control">
        <div className="select">
            <select name="option">
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
          defaultValue={values.message} name="Message" placeHolder="Textarea"></textarea>
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

export default FormUserDetails;