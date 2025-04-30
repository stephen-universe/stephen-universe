import React from "react";
import Helmet from "react-helmet";
import useResumeData from "../static_queries/useResumeData";

import Layout from "../components/Layout";


export default function ProjectPage(props) {
  // Little helpers ...
  const url = (name: string, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;

  const { title, description } = useResumeData();


  return (
   <Layout>
      <> 
        <div className="body-bg">
          <div className="background">
            <div className="section-divider"></div>
            <div className="container">
              <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
              </Helmet>
            
            </div>
          </div>
          
    
     
        
     
        </div>
         </>
 </Layout>
  );
}