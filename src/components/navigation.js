import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"

export default function Navigation(props) {
  return (
    <header className="header" style={{paddingTop: 7.5 + "rem"}}>
        <div className="columns" >
              <div className="column " >
                <Link to="/"> <h1 className="has-text-centered white" style={{fontSize: 3 + "rem"}}>
                  <span>
                    <h5 className="has-text-centered white" style={{fontSize: 1.5 + "rem" , lineHeight: 0.1 + "rem"}}>Stephen</h5> 
                    </span>Universe</h1> 
                </Link>
              </div>

              <div className="column ">
                <Link to="/projects"> <h1 className="has-text-centered white" style={{fontSize: 3 + "rem"}}>
                  <span>
                    <h5 className="has-text-centered white is-12" style={{fontSize: 1.5 + "rem" , lineHeight: 0.1 + "rem"}}>Global</h5>
                    </span>Projects</h1>
                </Link>
              </div>

              <div className="column ">
                <Link to="/contact"> <h1 className="has-text-centered white" style={{fontSize: 3 + "rem"}}>
                  <span>
                    <h5 className="has-text-centered white" style={{fontSize: 1.5 + "rem" , lineHeight: 0.1 + "rem"}}>Initialize</h5>
                  </span>Contact</h1> 
                </Link>
              </div>
       </div>

    </header>
  )
}