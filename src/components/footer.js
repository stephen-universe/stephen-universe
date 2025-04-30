import React from "react"
import "../styles/style.scss"
import { Link } from "gatsby"


export default function Footer(props) {
      return (

<>

<div className="section-divider"></div> 
<footer className="footer-bg" alt="Space">
</footer>

<div className="footer-bottom-color"> <div className="container">All Right Reserved. <span style={{ float: 'right'}}>Made with <i style={{color:'#E84834'}} className='fa-solid fa-heart'></i> Using <Link to='https://react.dev' className="text-link">React</Link></span> </div>
</div>
</>
      )
}