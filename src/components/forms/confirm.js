import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, p } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

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
    <input type="hidden" name="bot-field" />

            <label className="label" name="Details">Confirm User Data</label>
            <ul name="Details">
              <li name="Details">
                <p name="Name"> {firstName} </p>
              </li>
              <li name="message">
                <p name="Message">{message}</p>
              </li>
              <li name="email">
                <p name="Email">{email}</p>
              </li>
              <li>
                <p name="Occupation">{occupation}</p>
              </li>
              <li>
                <p name="Bio">{bio}</p>
              </li>
            </ul>


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

export default Confirm;