import React from "react"
import { Link } from "gatsby"



export default function AdditionalWork(props) {
      return (
        <>

<div className="container">
<h1>
<Link className="resume-link" style={{ float: "right"}} to={
    props.page === 'additional Work'
      ? "/"
      : "/additional-work"
    }
  activeClassName=""
>
  {props.page === 'additional Work'
    ? "close"
    : "additional Work"}
</Link>
</h1>
</div>

</>

      )
}