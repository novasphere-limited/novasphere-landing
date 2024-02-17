import Blog from "@/components/Blog";
import BlogPost from "@/components/BlogPost";
import LatestBlogPost from "@/components/LatestBlogPost";
import Layout from "@/components/Layout";
import StartProject from "@/components/StartProject";
import Subscribe from "@/components/Subscribe";

export default function BlogPage() {
  return (
    <div>
      <Layout>
        <Blog />
        <BlogPost />
        <LatestBlogPost />
        <StartProject />
        <Subscribe />
      </Layout>
    </div>
  );
}
