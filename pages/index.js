import Choose from "@/components/Choose";
import ClientTestimony from "@/components/ClientTestimony";
import OurWork from "@/components/OurWork";
import Subscribe from "@/components/Subscribe";
import Todo from "@/components/Todo";
import HeroSection from "@/components/Herosection";
import Layout from "@/components/Layout";
import ContactSection from "@/components/ContactSection";

export default function NovasphereHome() {
  return (
    <div>
      <Layout>
        <div className="bg-image">
          <HeroSection />
        </div>
        <Todo />
        <OurWork />
        <Choose />
        <ClientTestimony />
        <ContactSection />
        <Subscribe />
      </Layout>
    </div>
  );
}
