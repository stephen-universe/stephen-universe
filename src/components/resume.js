import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"


export default function Resume(props) {
      return (

<footer className="footer">
<h1>
<Link to={
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
</footer>

      )
}