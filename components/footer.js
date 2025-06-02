import React from "react";
import Link from "next/link";
import appData from "../content/data/navigation.json";

export default function Footer() {
  const { footerLinks, footerText } = appData;

  return (
    <>
      <div className="section-divider"></div> 
      <footer className="footer-bg" aria-label="Space"></footer>

      <div className="footer-bottom-color">
          <div className="react-made">
            {footerText[0].text1}
            {' '}
            <Link data-label="clicked on link to React" href={footerLinks.react.url} className={footerLinks.react.className}>
              {footerLinks.react.text}
            </Link>
            {'|'}
            <Link data-label="clicked on link to Next.js" href={footerLinks.nextjs.url} className={footerLinks.nextjs.className}>
              {footerLinks.nextjs.text}
            </Link>
            {'|'}
            <Link data-label="clicked on link to Framer Motion" href={footerLinks.framer.url} className={footerLinks.framer.className}>
              {footerLinks.framer.text}
            </Link>
            {'|'}
            <Link data-label="clicked on link to TinaCMS" href={footerLinks.tina.url} className={footerLinks.tina.className}>
              {footerLinks.tina.text}
            </Link>
          </div>
          <div className="reserved-rights">
            {footerText[0].text2}
          </div>
        </div>
    </>
  );
}