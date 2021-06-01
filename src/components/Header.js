import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"

export default function Header(props) {
  return (
    <header className="">
      <div className="container">
      <figure className="image is-128x128" style={{margin: '0 auto'}}>
      <Link to="/"><img src="/avx-studio-black.png" /></Link>
      </figure>
      </div>

  <div className="navbar-divider" />

        <div className="columns" >
              <div className="column " >
                <Link to="/"> <h1 className="has-text-centered" style={{fontSize: 2 + "rem"}}>
                  <span>
                    <h5 className="has-text-centered" style={{fontSize: 1 + "rem" , lineHeight: 0.1 + "rem"}}>Stephen</h5> 
                    </span>{props.title}</h1> 
                </Link>
              </div>

              <div className="column ">
                <Link to="/projects"> <h1 className="has-text-centered" style={{fontSize: 2 + "rem"}}>
                  <span>
                    <h5 className="has-text-centered is-12" style={{fontSize: 1 + "rem" , lineHeight: 0.1 + "rem"}}>Global</h5>
                    </span>Projects</h1>
                </Link>
              </div>

              <div className="column ">
                <Link to="/contact"> <h1 className="has-text-centered" style={{fontSize: 2 + "rem"}}>
                  <span>
                    <h5 className="has-text-centered" style={{fontSize: 1 + "rem" , lineHeight: 0.1 + "rem"}}>Initialize</h5>
                  </span>Contact</h1> 
                </Link>
              </div>
       </div>

      <div className="navbar-divider" />
    </header>
  )
}