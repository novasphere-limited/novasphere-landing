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
    <Layout>
      <div className="bg-[#FAF8FE] spec-pt">
        <div className="bg-image">
          <AboutHerosection />
        </div>
        <Mission />
        <AboutUs />
        <Ceo />
        <Team />
        <ClientTestimony />
        <StartProject />
        <Subscribe />
      </div>
    </Layout>
  );
}
