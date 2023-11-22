import AboutHerosection from "@/components/AboutHerosection";
import Ceo from "@/components/Ceo";
import ClientTestimony from "@/components/ClientTestimony";
import ContactSection from "@/components/ContactSection";
import Layout from "@/components/Layout";
import Mission from "@/components/Mission";
import OurWork from "@/components/OurWork";
import StartProject from "@/components/StartProject";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";

export default function About() {
  return (
    <div>
      <Layout>
        <div className="bg-image abs-margin">
          <AboutHerosection />
        </div>
        <OurWork />
        <Mission />
        <Ceo />
        <Team />
        <ClientTestimony />
        <ContactSection />
        <StartProject />
        <Subscribe />
      </Layout>
    </div>
  );
}
