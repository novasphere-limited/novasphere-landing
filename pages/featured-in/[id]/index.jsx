import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Subscribe from "@/components/Subscribe";
import StartProject from "@/components/StartProject";
import InnerFeatured from "@/components/innerFeatured";

export default function InnerFeaturedPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="spec-pt">
        <InnerFeatured id={id} />
        <StartProject />
        <Subscribe />
      </div>
    </Layout>
  );
}
