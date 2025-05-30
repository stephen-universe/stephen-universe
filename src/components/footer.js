import React from "react"
import "../styles/style.scss"
import { Link } from "gatsby"
import appData from "../../content/data/footer.json"

export default function Footer(props) {
  return (
    <>
      <div className="section-divider"></div> 
      <footer className="footer-bg" alt="Space"></footer>

      <div className="footer-bottom-color">
        <div className="footer-bottom-color container">
          <div className='react-made'>
            {appData.footerText[0].text1} 
            <i style={{color:'#E84834'}} className='fa-solid fa-heart'></i> 
            {appData.footerLinks.map((link, index) => (
              <React.Fragment key={index}>
                {' '}
                <Link to={link.url} className={link.className}>
                  {link.text}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="footer-bottom-color">
          <div className='footer-bottom-color reserved-rights'>
            {appData.footerText[0].text2}
          </div>
        </div>
      </div>
    </>
  )
}