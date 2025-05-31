import SmoothScroll from "../../components/projects/smoothScroll";
import Projects from "../../components/projects/projects";
import EarthWrapper from "../../components/projects/earthWrapper";
import Layouts from "../../components/layouts";


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