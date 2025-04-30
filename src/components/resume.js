import React from "react"
import Link  from "gatsby"



export default function Resume(props) {
      return (
        <>

<div className="container">
<h1>
<Link className="resume-link" style={{paddingLeft: 30 + "px", paddingRight: 30 + "px", float: "right"}} to={
    props.page === 'resume'
      ? "/"
      : "/resume"
    }
  activeClassName=""
>
  {props.page === 'resume'
    ? "close"
    : "resume"}
</Link>
</h1>
</div>

</>

      )
}