import React, { useRef, Component } from "react";
import Helmet from "react-helmet";
import useResumeData from "../static_queries/useResumeData";


import FooterQuote from "../components/home/footerQuote";

import Layout from "../components/Layout";
import Cards from "../components/cards";

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
              <Quote />
            </div>
          </div>
          
     <ScrollApp/>
     
        
        <InitializeContact />
        </div>
         </>
 </Layout>
  );
}