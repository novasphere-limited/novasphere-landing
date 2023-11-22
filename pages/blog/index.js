import Blog from "@/components/Blog";
import BlogPost from "@/components/BlogPost";
import ContactSection from "@/components/ContactSection";
import LatestBlogPost from "@/components/LatestBlogPost";
import Layout from "@/components/Layout";
import Subscribe from "@/components/Subscribe";

export default function BlogPage() {
  return (
    <div>
      <Layout>
        <Blog />
        <BlogPost />
        <LatestBlogPost />
        <ContactSection />
        <Subscribe />
      </Layout>
    </div>
  );
}
