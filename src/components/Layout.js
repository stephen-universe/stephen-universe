import  React from "react";

import { Helmet } from "react-helmet"
import useResumeData from "../static_queries/useResumeData";



const Layout = ({
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
           
        


    
      
     

 
    </>
  );
};
export default Layout;
