
import BackToTop from "@/components/common/BackToTop";
import BreacrumbThree from "@/components/common/BreacrumbThree";
import ProjectDetailsArea from "@/components/project/ProjectDetailsArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";


export default function ProjectDetails() {
  return (
     <Wrapper>
      <HeaderThree />
      <main>
        <BreacrumbThree />        
        <ProjectDetailsArea />
      </main>
      <BackToTop />
      <FooterOne />
    </Wrapper>
  )
}
