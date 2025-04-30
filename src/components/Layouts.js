import  React from "react";

import { Helmet } from "react-helmet"
import useResumeData from "../static_queries/useResumeData";
import Footer from "./footer";



const Layouts = ({
  children,
  header,
  footer,
  noHeader,
  noFooter,
  contactButton,
  cartButton
}) => {


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



  
           {children}
       
        
       <Footer />

    
      
     

 
    </>
  );
};
export default Layouts;
