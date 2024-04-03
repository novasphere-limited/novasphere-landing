import AboutHerosection from "@/components/AboutHerosection";
import AboutUs from "@/components/AboutUs";
import Ceo from "@/components/Ceo";
import ClientTestimony from "@/components/ClientTestimony";
import Layout from "@/components/Layout";
import Mission from "@/components/Mission";
import StartProject from "@/components/StartProject";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";

export default function About() {
  return (
    <div className="bg-[#e2e2e2]">
      <Layout>
        <div className="bg-image abs-margin">
          <AboutHerosection />
        </div>
        <Mission />
        <AboutUs />
        <Ceo />
        <Team />
        <ClientTestimony />
        <StartProject />
        <Subscribe />
      </Layout>
    </div>
  );
}
