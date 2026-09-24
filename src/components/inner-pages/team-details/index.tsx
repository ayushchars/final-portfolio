import Breacrumb from "@/components/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import TeamDetailsArea from "../../service/TeamDetailsArea";
import BackToTop from "@/components/common/BackToTop";


export default function TeamDetails() {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <Breacrumb title="TEAM MEMBER" subtitle="TEAM MEMBERS" />
        <TeamDetailsArea />
      </main>
      <BackToTop />
      <FooterOne />
    </Wrapper>
  )
}
