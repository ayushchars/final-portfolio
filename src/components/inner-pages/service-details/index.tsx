
import BackToTop from "@/components/common/BackToTop";
import BreacrumbFour from "@/components/common/BreacrumbFour";
import ServiceDetailsArea from "@/components/service/ServiceDetailsArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";


export default function ServiceDetails() {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <BreacrumbFour />
        <ServiceDetailsArea />
      </main>
      <BackToTop />
      <FooterOne />
    </Wrapper>
  )
}
