import BlogStandardArea from "@/components/blog/BlogStandardArea";
import BackToTop from "@/components/common/BackToTop";
import Breacrumb from "@/components/common/Breacrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";


export default function BlogStandard() {
  return (
      <Wrapper>
      <HeaderThree />
      <main>
        <Breacrumb title="Blog List" subtitle="Latest News" />
        <BlogStandardArea />
      </main>
      <BackToTop />
      <FooterOne />
    </Wrapper>
  )
}
