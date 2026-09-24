import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import ProcessAreaTwo from "@/components/process/ProcessAreaTwo";
import TestimonialAreaTwo from "@/components/testimonial/TestimonialAreaTwo";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";


export default function Testimonial() {
  return (
    <Wrapper>
      <HeaderThree />
      <main>
        <Breacrumb title="TESTIMONIAL" subtitle="CUSTOMER REVIEWS" />
        <TestimonialAreaTwo />
        <ProcessAreaTwo />
      </main>
      <BackToTop />
      <FooterOne />
    </Wrapper>
  )
}
