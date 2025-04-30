import React from "react";
import Helmet from "react-helmet";


import Layout from "../components/Layout";


export default function ProjectPage() {
  // Little helpers ...
 

  return (
   <Layout>
      <> 
        <div className="body-bg">
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
          
    
     
        
     
        </div>
         </>
 </Layout>
  );
}