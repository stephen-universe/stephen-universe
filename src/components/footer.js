import React from "react"
import "../styles/style.scss"
import { Link } from "gatsby"


export default function Footer(props) {
      return (

<>

<div className="section-divider"></div> 
<footer className="footer-bg" alt="Space">
</footer>

<div className="footer-bottom-color"> <div className="footer-bottom-color container"> <div className='react-made'>Made with <i style={{color:'#E84834'}} className='fa-solid fa-heart'></i> Using <Link to='https://react.dev' className="text-link">React</Link></div> </div>
<div className="footer-bottom-color"> <div className='footer-bottom-color reserved-rights'>All Right Reserved.</div> </div>
</div>
</>
      )
}