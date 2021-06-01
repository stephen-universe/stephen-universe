import React from "react"
import "../styles/style.scss"

export default function Form () {

    return(
<>
<form name="contact v3"
method="post" 
netlify-honeypot="bot-field" 
data-netlify="true" 
onSubmit="submit">

<section className="section is-large">
<div className="columns is-centered">
    <div className="column is-6 ">
<div className="field">
    <label className="label">Name</label>
    <div className="control">
    <input type="hidden" name="form-name" value="contact v3" />
    <input type="hidden" name="bot-field" />

        <input className="input" type="text" name="Name/Business" placeHolder="Text input" />
    </div>
</div>

<div className="field">
    <label className="label">Email</label>
    <div className="control">
        <input className="input" type="email" placeHolder="Email input" name="Email" />
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
        <textarea className="textarea" name="Message" placeHolder="Textarea"></textarea>
    </div>
</div>

<div className="field is-grouped is-grouped-centered">
    <div className="control">
       <button className="button is-link">Submit</button>
    </div>
    <div className="control">
       <button className="button is-link is-light">Cancel</button>
    </div>
</div>
</div>
</div>
</section>
</form>
</>
    )
}
