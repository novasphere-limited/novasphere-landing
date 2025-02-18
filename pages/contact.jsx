import ContactUs from "@/components/ContactUs";
import Layout from "@/components/Layout";
import Subscribe from "@/components/Subscribe";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-[#FAF8FE] spec-pt">
        <ContactUs />
        <Subscribe />
      </div>
    </Layout>
  );
}
