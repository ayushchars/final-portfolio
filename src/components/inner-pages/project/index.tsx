import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import ProjectArea from "@/components/project/ProjectArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";


export default function Project() {
  return (
     <Wrapper>
      <HeaderThree />
      <main>
        <Breacrumb title="Portfolio" subtitle="Latest News" />
        <ProjectArea />
      </main>
      <BackToTop />
      <FooterOne />
    </Wrapper>
  )
}
