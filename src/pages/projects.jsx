import SmoothScroll from "../../components/projects/smoothScroll";
import Projects from "../../components/projects/projects";
import EarthWrapper from "../../components/projects/EarthWrapper";
import Layouts from "../../components/Layouts";


const ProjectsPage = () => {

  return (
    <>

<Layouts>

  

    <SmoothScroll>
      <EarthWrapper /> {/* ✅ safe for client-side only */}
      <Projects />
    </SmoothScroll>


</Layouts>

    </>
  )  
};

export default ProjectsPage;