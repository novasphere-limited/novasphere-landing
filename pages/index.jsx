import Choose from "@/components/Choose";
import ClientTestimony from "@/components/ClientTestimony";
import OurWork from "@/components/OurWork";
import Subscribe from "@/components/Subscribe";
import Todo from "@/components/Todo";
import HeroSection from "@/components/Herosection";
import Layout from "@/components/Layout";
import Counter from "@/components/Counter";
import StartProject from "@/components/StartProject";

export default function NovasphereHome() {
  return (
    <Layout>
      <div className="bg-[#e2e2e2] spec-pt">
        <div className="bg-image">
          <HeroSection />
        </div>
        <Todo />
        <OurWork />
        <Counter endValue1={100} endValue2={150} endValue3={30} />

        <Choose />
        <ClientTestimony />
        <StartProject />
        <Subscribe />
      </div>
    </Layout>
  );
}
