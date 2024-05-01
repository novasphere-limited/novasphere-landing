import Blog from "@/components/Blog";
import BlogSlide from "@/components/BlogSlider";
import Demo from "@/components/Demo";
import Layout from "@/components/Layout";
import News from "@/components/News";
import Subscribe from "@/components/Subscribe";

export default function BlogPage() {
  return (
    <Layout>
      <div className="bg-[#e2e2e2] spec-pt">
        <Blog />
        <BlogSlide />
        <News />
        <Demo />
        <Subscribe />
      </div>
    </Layout>
  );
}
