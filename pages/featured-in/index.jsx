import Blog from "@/components/Blog";
import Subscribe from "@/components/Subscribe";
import { useEffect, useState } from "react";
import { useGetFeaturedIn } from "@/service/featured-in";
import FeaturedSlide from "@/components/featuredSlide";
import FeaturedNews from "@/components/featuredNews";
import Demo from "@/components/Demo";
import Layout from "@/components/Layout";

export default function FeaturedInPage() {
  const [fetchData, setFetchData] = useState(false);
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

    setFeaturedContentsFilter({ ...data });
    setFetchData(true);
  }, []);

  return (
    <Layout>
      <div className="bg-[#e2e2e2] spec-pt">
        <Blog />
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
        <Demo />
        <Subscribe />
      </div>
    </Layout>
  );
}
