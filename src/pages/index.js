
import React from "react";
import Helmet from "react-helmet";
import About from "../components/home/about";
import Layout from "../components/Layout";
import InitializeContact from "../components/home/contact";
import FooterScroll from "../components/home/footerScroll";


export default function ProjectPage() {
  // Little helpers ...
 

  return (
   <Layout>
      <> 
        
          <div className="background">
            <div className="section-divider"></div>
            <div className="container">
              <Helmet>
                <html lang="en" />
                <title>Stephen-Universe</title>
                <meta name="description" content="Portfolio" />
              </Helmet>

             
            </div>
          </div>
          
    
     
        
     
        
        <div className="body-bg">
         <About />
         <InitializeContact/> 
         <FooterScroll/>
         </div>  
         
         </>
 </Layout>
  );
}