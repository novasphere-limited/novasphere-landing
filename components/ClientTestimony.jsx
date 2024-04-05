import Image from "next/image";
import TestimonySlider from "./ClientTestimonySlider";

export default function ClientTestimony() {
  const Arraylist = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="main-container bg-[#5758EF08] margin-spec lg:mt-0">
      <h2 className="text-3xl font-semibold mb-3">
        Testimonials from our Clients
      </h2>
      <p className="text-2_regular mb-[66px]" style={{ maxWidth: "550px" }}>
        Discover the Rich Tapestry of Shared Experiences from Our Community,
        Where Satisfaction Echoes in Every Voice
      </p>
      <div className="lg:grid grid-cols-3 gap-4 hidden mb-5">
        <div className="rounded-lg p-5 bg-white">
          <p className="text-2_regular mb-5 pb-2">
            "We love Novasphere! Our designers were using it for their projects,
            so we already knew what kind of design they want."
          </p>
          <div className="flex items-center gap-4">
            <div
              style={{ height: "44px", width: "44px" }}
              className="rounded-full bg-[#D9D9D9]"
            >
              <Image
                src="/asset/nova-client-img.png"
                alt="Testimonial person profile"
                width={44}
                height={44}
              />
            </div>
            <div>
              <h4 className="text-[#1F1F1F] font-semibold">Devon Lane</h4>
              <p className="text-[#444444]">Co-Founder, Design.co</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-5 bg-white">
          <p className="text-2_regular mb-5 pb-2">
            "We love Novasphere! Our designers were using it for their projects,
            so we already knew what kind of design they want."
          </p>
          <div className="flex items-center gap-4">
            <div
              style={{ height: "44px", width: "44px" }}
              className="rounded-full bg-[#D9D9D9]"
            >
              <Image
                src="/asset/nova-client-img.png"
                alt="Testimonial person profile"
                width={44}
                height={44}
              />
            </div>
            <div>
              <h4 className="text-[#1F1F1F] mb-2 font-semibold">Devon Lane</h4>
              <p className="text-[#444444]">Co-Founder, Design.co</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg p-5 bg-white">
          <p className="text-2_regular mb-5 pb-2">
            "We love Novasphere! Our designers were using it for their projects,
            so we already knew what kind of design they want."
          </p>
          <div className="flex items-center gap-4">
            <div
              style={{ height: "44px", width: "44px" }}
              className="rounded-full bg-[#D9D9D9]"
            >
              <Image
                src="/asset/nova-client-img.png"
                alt="Testimonial person profile"
                width={44}
                height={44}
              />
            </div>
            <div>
              <h4 className="text-[#1F1F1F] mb-2 font-semibold">Devon Lane</h4>
              <p className="text-[#444444]">Co-Founder, Design.co</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden mb-5">
        <TestimonySlider ArrayList={Arraylist} />
      </div>
    </div>
  );
}
