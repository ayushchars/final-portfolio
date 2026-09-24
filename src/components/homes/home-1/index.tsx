
import BannerAreaOne from "@/components/banner/BannerAreaOne";
import BlogAreaOne from "@/components/blog/BlogAreaOne";
import BackToTop from "@/components/common/BackToTop";
import CountDownAreaOne from "@/components/countdown/CountDownAreaOne";
import CtaAreaOne from "@/components/cta/CtaAreaOne";
import HeroAreaOne from "@/components/hero/HeroAreaOne";
import PortfolioAreaOne from "@/components/portfolio/PortfolioAreaOne";
import ServiceAreaOne from "@/components/service/ServiceAreaOne";
import TeamAreaOne from "@/components/team/TeamAreaOne";
import TestimonialAreaOne from "@/components/testimonial/TestimonialAreaOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";


export default function HomeOne() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <HeroAreaOne />
        <CountDownAreaOne />
        <PortfolioAreaOne />
        <BannerAreaOne />
        <ServiceAreaOne />
        <TeamAreaOne />
        <CtaAreaOne />
        <TestimonialAreaOne />
        <BlogAreaOne />
      </main>
      <BackToTop />
      <FooterOne />
    </Wrapper>
  )
}
