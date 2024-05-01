import Image from "next/image";
import TestimonySlider from "./ClientTestimonySlider";

export default function ClientTestimony() {
  const Arraylist = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="xl:px-[100px] sm:px-6 md:px-11 lg:px-[75px] px-3 margin-spec xl:mb-[180px] lg:mb-[130px]">
      <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold mb-3">
        Testimonials from our Clients
      </h2>
      <p
        className="text-base font-normal xl:mb-[66px] sm:mb-6 md:mb-10 mb-3"
        style={{ maxWidth: "550px" }}
      >
        Discover the Rich Tapestry of Shared Experiences from Our Community,
        Where Satisfaction Echoes in Every Voice
      </p>
      <div className="lg:grid grid-cols-3 gap-4 hidden mb-5">
        <div className="rounded-md md:py-6 py-3 md:px-4 px-2 bg-white text-[#444444]">
          <p className="md:text-base text-sm font-normal md:mb-4 mb-2">
            &apos;We love Novasphere! Our designers were using it for their
            projects, so we already knew what kind of design they want.&apos;
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
              <h4 className="text-[#1F1F1F] text-base font-semibold">
                Devon Lane
              </h4>
              <p className="text-[#444444] text-xs">Co-Founder, Design.co</p>
            </div>
          </div>
        </div>
        <div className="rounded-md md:py-6 py-3 md:px-4 px-2 bg-white text-[#444444]">
          <p className="md:text-base text-sm font-normal md:mb-4 mb-2">
            &apos;We love Novasphere! Our designers were using it for their
            projects, so we already knew what kind of design they want.&apos;
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
              <h4 className="text-[#1F1F1F] text-base font-semibold">
                Devon Lane
              </h4>
              <p className="text-[#444444] text-xs">Co-Founder, Design.co</p>
            </div>
          </div>
        </div>
        <div className="rounded-md md:py-6 py-3 md:px-4 px-2 bg-white text-[#444444]">
          <p className="md:text-base text-sm font-normal md:mb-4 mb-2">
            &apos;We love Novasphere! Our designers were using it for their
            projects, so we already knew what kind of design they want.&apos;
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
              <h4 className="text-[#1F1F1F] text-base font-semibold">
                Devon Lane
              </h4>
              <p className="text-[#444444] text-xs">Co-Founder, Design.co</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden sm:mb-9 lg:mb-12 mb-5">
        <TestimonySlider ArrayList={Arraylist} />
      </div>
    </div>
  );
}
