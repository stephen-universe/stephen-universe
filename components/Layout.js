import { useEffect } from "react";
import { scrollAnimation } from "../common/scrollAnims";
import ScrollApp from "./buttons";
import DigitalMenu from "./layouts/headers/digitalMenu";
import Preloader from "./Preloader";
import CookieBanner from "./cookie-banner";

const Layout = ({
  children,
  noHeader,
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
   
<Preloader/>
      {!noHeader && (
        <DigitalMenu
        />
      )}

  
           {children}
           <ScrollApp/>  
           <CookieBanner/> 

    
      
     

 
    </>
  );
};
export default Layout;