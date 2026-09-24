import BannerAreaOne from "@/components/banner/BannerAreaOne";
import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import ServiceAreaThree from "@/components/service/ServiceAreaThree";
import TestimonialAreaTwo from "@/components/testimonial/TestimonialAreaTwo";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";


export default function Service() {
  return (
     <Wrapper>
      <HeaderThree />
      <main>
        <Breacrumb title="Services" subtitle="What We Offer" />
        <ServiceAreaThree style_2={true} />
        <BannerAreaOne />
        <TestimonialAreaTwo />        
      </main>
      <BackToTop />
      <FooterOne />
    </Wrapper>
  )
}
