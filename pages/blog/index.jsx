import Blog from "@/components/Blog";
import BlogSlide from "@/components/BlogSlider";
import Demo from "@/components/Demo";
import Layout from "@/components/Layout";
import News from "@/components/News";
import Subscribe from "@/components/Subscribe";
import { useGetBlogPosts } from "@/service/blog";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [fetchData, setFetchData] = useState(false);
  const {
    blogsContentData,
    blogsContentIsLoading,
    setBlogContentFilter,
    refetchBlogContent,
  } = useGetBlogPosts({ enabled: fetchData });
  useEffect(() => {
    const data = {
      limit: 100,
      page: 1,
      isPayme: false,
    };

    setFetchData(true);
    setBlogContentFilter({ ...data });
  }, []);
  return (
    <Layout>
      <div className="bg-[#e2e2e2] spec-pt">
        <Blog />
        {blogsContentData?.items && (
          <>
            {blogsContentData?.items?.length < 1 ? (
              <p className="font-bold text-center pt-6 text-4xl text-black">
                Oopz! No content...
              </p>
            ) : (
              <div>
                <BlogSlide data={blogsContentData?.items[0]} />
                <News data={blogsContentData?.items.slice(1)} />
              </div>
            )}
          </>
        )}
        <Demo />
        <Subscribe />
      </div>
    </Layout>
  );
}
