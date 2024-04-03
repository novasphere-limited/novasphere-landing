import ContactUs from "@/components/ContactUs";
import Layout from "@/components/Layout";
import Subscribe from "@/components/Subscribe";

export default function Contact() {
  return (
    <div className="bg-[#e2e2e2]">
      <Layout>
        <ContactUs />
        <Subscribe />
      </Layout>
    </div>
  );
}
