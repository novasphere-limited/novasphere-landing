import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="xl:me-[67px] mx-3 sm:mx-7 md:mx-10 lg:mx-[52px] xl:mb-[187px] lg:mb-[130px] md:mb-[80px] mb-4 sm:mb-10">
      <div className="relative">
        <div className="my-4 flex justify-end">
          <Image
            src="/asset/about-us-new-1.png"
            alt="Novasphere hero picture"
            width={781}
            height={590}
            className="rounded-lg w-full md:w-[781px] md:h-[590px] h-auto"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className="rounded-md xl:px-8 lg:px-5 sm:px-4 shadow-lg xl:py-[52px] lg:mb-[40px] md:mb-[32px] py-4 about-abs sm:pb-10 md:block hidden"
          style={{ background: "#fff" }}
        >
          <h5 className="md:text-[34px] text-4xl font-semibold lg:mb-2 mb-1 text-warning600">
            About Us
          </h5>
          <p className="text-base text-[#333232]">
            At Novasphere, we are passionate about harnessing the power of
            technology to propel businesses forward. As a company we specialize
            in software development, mobile app development, UI/UX design, and
            digital marketing strategies, we pride ourselves on delivering
            innovative solutions that helps visionary entrepreneurs launch their
            ground-breaking ideas.
          </p>
        </div>
        <div
          className="rounded-md shadow-lg p-3 sm:pb-10 block md:hidden px-3"
          style={{ background: "#fff" }}
        >
          <h5 className="text-4xl font-semibold lg:mb-3 mb-1 text-warning600">
            About Us
          </h5>
          <p className="text-base text-[#333232]">
            At Novasphere, we are passionate about harnessing the power of
            technology to propel businesses forward. As a company we specialize
            in software development, mobile app development, UI/UX design, and
            digital marketing strategies, we pride ourselves on delivering
            innovative solutions that helps visionary entrepreneurs launch their
            ground-breaking ideas.
          </p>
        </div>
      </div>
    </div>
  );
}
