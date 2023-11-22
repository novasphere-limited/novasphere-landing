import ContactSection from "@/components/ContactSection";
import Layout from "@/components/Layout";
import ServiceHeroSection from "@/components/ServiceHeroSection";
import Subscribe from "@/components/Subscribe";

export default function Service() {
  return (
    <div>
      <Layout>
        <div className="main-container">
          <ServiceHeroSection />
          <ContactSection />
        </div>
        <Subscribe />
      </Layout>
    </div>
  );
}
