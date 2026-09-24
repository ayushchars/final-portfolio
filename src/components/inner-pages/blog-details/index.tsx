import BlogDetailsArea from "@/components/blog/BlogDetailsArea";
import BackToTop from "@/components/common/BackToTop";
import BreacrumbTwo from "@/components/common/BreacrumbTwo";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";


export default function BlogDetails() {
  return (
      <Wrapper>
      <HeaderThree />
      <main>
        <BreacrumbTwo  />
        <BlogDetailsArea />
      </main>
      <BackToTop />
      <FooterOne />
    </Wrapper>
  )
}
