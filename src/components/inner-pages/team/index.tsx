import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import TeamArea from "@/components/team/TeamArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";


export default function Team() {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <Breacrumb title="TEAM MEMBER" subtitle="TEAM MEMBERS" />
        <TeamArea />
      </main>
      <BackToTop />
      <FooterOne />
    </Wrapper>
  )
}
