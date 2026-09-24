import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import ContactArea from "@/components/contact/ContactArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";

export default function Contact() {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <Breacrumb title="Contact Us" subtitle="Contact Us" />
        <ContactArea />        
      </main>
      <BackToTop />
      <FooterOne />
    </Wrapper>
  )
}
