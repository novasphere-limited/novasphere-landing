import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Subscribe from "@/components/Subscribe";
import StartProject from "@/components/StartProject";
import InnerBlog from "@/components/InnerBlog";

export default function InnerBlogPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="spec-pt">
        <InnerBlog id={id} />
        <StartProject />
        <Subscribe />
      </div>
    </Layout>
  );
}
