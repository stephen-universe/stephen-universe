import  React, { useEffect } from "react";
import { scrollAnimation } from "../common/scrollAnims";
import { Helmet } from "react-helmet"
import Footer from "./footer";
import ScrollApp from "./buttons";
import DigitalMenu from "./layouts/headers/digitalMenu";
import Preloader from "./Preloader";
import CookieBanner from "./cookie-banner";

const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  contactButton,
  cartButton
}) => {
  useEffect(() => {
    scrollAnimation();

    // preloader
    if (typeof window !== 'undefined') {
      const loader = document.getElementsByClassName('preloader');
      if (loader[0]) loader[0].classList.add('loaded');
    }
  }, []);


  return (
    <>
   <section className="" >
            <div className="container">
             <Helmet>
                            <html lang="en" />
                            <title>Stephen-Universe</title>
                            <meta name="description" content="Portfolio" />
                          </Helmet>
            
            </div>
          </section> 

<Preloader/>
      {!noHeader && (
        <DigitalMenu
        />
      )}

  
           {children}
           <ScrollApp/>  
           <CookieBanner/> 
        
       <Footer />

    
      
     

 
    </>
  );
};
export default Layouts;
