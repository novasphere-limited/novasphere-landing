import Blog from "@/components/Blog";
import BlogSlide from "@/components/BlogSlider";
import Demo from "@/components/Demo";
import Layout from "@/components/Layout";
import News from "@/components/News";
import Subscribe from "@/components/Subscribe";
import FeaturedNews from "@/components/featuredNews";
import FeaturedSlide from "@/components/featuredSlide";
import Tab from "@/components/tab";
import { useGetBlogPosts } from "@/service/blog";
import { useGetFeaturedIn } from "@/service/featured-in";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [fetchData, setFetchData] = useState(false);
  const [tab, setTab] = useState("blog");
  const {
    blogsContentData,
    blogsContentIsLoading,
    setBlogContentFilter,
    refetchBlogContent,
  } = useGetBlogPosts({ enabled: fetchData });
  const {
    featuredContentsData,
    featuredContentsIsLoading,
    refetchFeaturedContents,
    setFeaturedContentsFilter,
  } = useGetFeaturedIn({ enabled: fetchData });
  useEffect(() => {
    const data = {
      limit: 100,
      page: 1,
      isPayme: false,
    };

    setFetchData(true);
    setFeaturedContentsFilter({ ...data });
    setBlogContentFilter({ ...data });
  }, []);
  return (
    <Layout>
      <div className="bg-[#FAF8FE] spec-pt">
        <Blog />
        <Tab setTab={setTab} tab={tab} />
        {tab === "blog" ? (
          <div>
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
          </div>
        ) : (
          <div>
            {featuredContentsData?.items && (
              <>
                {featuredContentsData?.items?.length < 1 ? (
                  <p className="font-bold text-center pt-6 text-4xl text-black">
                    Oopz! No content...
                  </p>
                ) : (
                  <div>
                    <FeaturedSlide data={featuredContentsData?.items[0]} />
                    <FeaturedNews data={featuredContentsData?.items.slice(1)} />
                  </div>
                )}
              </>
            )}
          </div>
        )}
        <Demo />
        <Subscribe />
      </div>
    </Layout>
  );
}
