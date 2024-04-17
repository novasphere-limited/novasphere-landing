import Image from "next/image";
import AnimatedInView from "./Animate";

export default function AboutUs() {
  return (
    <AnimatedInView
      threshold={0.5}
      overflowHidden
      variants={{
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 },
      }}
    >
      <div className="main-container">
        <div className="relative">
          <div className="my-4 flex justify-end">
            <Image
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1712331997/5964BA6D-861F-4229-A4AE-E06EA4226436_lvdony.png"
              alt="Novasphere hero picture"
              width={781}
              height={590}
              className="rounded-lg w-full md:w-[781px]"
              loading="lazy"
            />
          </div>
          <div
            className="rounded-md shadow-lg md:p-5 p-2 about-abs sm:pb-10 sm:block hidden"
            style={{ background: "#fff" }}
          >
            <h5 className="md:text-3xl text-xl font-semibold lg:mb-3 mb-1 text-warning600">
              About Us
            </h5>
            <p className="text-base">
              At Novasphere, we are passionate about harnessing the power of
              technology to propel businesses forward. As a company we
              specialize in software development, mobile app development, UI/UX
              design, and digital marketing strategies, we pride ourselves on
              delivering innovative solutions that helps visionary entrepreneurs
              launch their ground-breaking ideas.
            </p>
          </div>
          <div
            className="rounded-md shadow-lg md:p-5 p-2 sm:pb-10 block sm:hidden"
            style={{ background: "#fff" }}
          >
            <h5 className="md:text-3xl text-xl font-semibold lg:mb-3 mb-1 text-warning600">
              About Us
            </h5>
            <p className="text-base">
              At Novasphere, we are passionate about harnessing the power of
              technology to propel businesses forward. As a company we
              specialize in software development, mobile app development, UI/UX
              design, and digital marketing strategies, we pride ourselves on
              delivering innovative solutions that helps visionary entrepreneurs
              launch their ground-breaking ideas.
            </p>
          </div>
        </div>
      </div>
    </AnimatedInView>
  );
}
