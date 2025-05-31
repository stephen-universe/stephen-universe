
import About from "../../components/home/about";
import InitializeContact from "../../components/home/pastWorks";
import FooterScroll from "../../components/home/footerScroll";
import ThreeShape from "../../components/home/floatingShapes";
import Layout from "../../components/layout";


export default function ProjectPage() {
  // Little helpers ...
 

  return (
 <Layout>
      <> 
        
          <div className="background section-divider">
           
             <ThreeShape />
         
          
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