import  React, { useEffect } from "react";
import { scrollAnimation } from "../common/scrollAnims";
import { Helmet } from "react-helmet"
import useResumeData from "../static_queries/useResumeData";
import Footer from "./footer";
import ScrollApp from "./buttons";
import DigitalMenu from "./layouts/headers/digitalMenu";
import Preloader from "./Preloader";

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

    const { title, description } = useResumeData();
  return (
    <>
   <section className="" >
            <div className="container">
            <Helmet>
              <html lang="en" />
              <title>{title}</title>
              <meta name="description" content={description} />
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
        
       <Footer />

    
      
     

 
    </>
  );
};
export default Layouts;
