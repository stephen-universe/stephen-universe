import React from "react";
import Link from "next/link";
import appData from "../content/data/footer.json";

export default function Footer(props) {
  return (
    <>
      <div className="section-divider"></div> 
      <footer className="footer-bg" aria-label="Space"></footer>

      <div className="footer-bottom-color">
        <div className="footer-bottom-color container">
          <div className='react-made'>
            {appData.footerText[0].text1} 
            {appData.footerLinks.map((link, index) => (
              <React.Fragment key={index}>
                {' '}
                <Link href={link.url} className={link.className}>
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
  );
}