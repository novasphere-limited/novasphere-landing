import Layout from "@/components/Layout";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import StartProject from "@/components/StartProject";
import Subscribe from "@/components/Subscribe";

export default function Service() {
  return (
    <div>
      <Layout>
        <div className="main-container">
          <ServiceHeroSection />
          <StartProject />
        </div>
        <Subscribe />
      </Layout>
    </div>
  );
}
