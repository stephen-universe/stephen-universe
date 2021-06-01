import React, { Component } from 'react';


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
            <div className="field">
            <label className="label">Occupation</label>
            <div className="control">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact v4" />
                <input 
                className="input" 
                type="text" 
                name="Occupation" 
                placeholder="Enter Your Occupation"
                label="Occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
                margin="normal"
                fullWidth />
            </div>
        </div>
        
        <div className="field">
            <label className="label">Bio</label>
            <div className="control">
                <input className="input" 
                name="Bio"
                type="bio" 
                  placeholder="Enter Your Email"
                  label="Bio"
                  onChange={handleChange('bio')}
                  defaultValue={values.bio}
                  margin="normal"
                  fullWidth
                   />
                        
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
                    <select name="option">
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
                      onSubmit={this.continue}
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

export default FormPersonalDetails;