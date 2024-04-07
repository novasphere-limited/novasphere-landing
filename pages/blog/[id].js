import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { dummyBlogPostData } from "@/contants";
import Layout from "@/components/Layout";
import Subscribe from "@/components/Subscribe";
import StartProject from "@/components/StartProject";
import InnerBlog from "@/components/InnerBlog";

export default function InnerBlogPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Layout>
        <InnerBlog />
        <StartProject />
        <Subscribe />
      </Layout>
    </div>
  );
}
