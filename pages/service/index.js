import Layout from "@/components/Layout";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import StartProject from "@/components/StartProject";
import Subscribe from "@/components/Subscribe";

export default function Service() {
  return (
    <div className="bg-[#e2e2e2]">
      <Layout>
        <ServiceHeroSection />
        <StartProject />
        <Subscribe />
      </Layout>
    </div>
  );
}
