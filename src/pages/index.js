
import React from "react";
import Helmet from "react-helmet";
import About from "../components/home/about";
import Layouts from "../components/Layouts";


export default function ProjectPage() {
  // Little helpers ...
 

  return (
   <Layouts>
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
         </div>   
         </>
 </Layouts>
  );
}