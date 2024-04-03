import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function AboutHerosection() {
  return (
    <div className="main-container xxl:mx-[100px] lg:mx-[75px] md:mx-[50px] sm:mx-[25px] mx-3 bg-about-img lg:h-[calc(75vh)] sm:h-[calc(50vh)]">
      <div className="md:flex justify-between">
        <div className="xl:w-[422px] xl:mt-[50px] lg:mt-[35px] md:mt-[28px] sm:mt-[15px] mt-2 relative">
          <h6 className="font-bold text-3xl mb-3">
            Empower Your Digital Journey with{" "}
            <span className="text-warning700">Novasphere</span>
          </h6>
          <p className="text-base font-normal">
            Unlock the Potential of Seamless Digital Solutions, Where Innovation
            Meets Simplicity.
          </p>
          <div className="absolute bottom-[1.5rem] right-[2rem] hidden xl:block">
            <Image
              alt="Random icon"
              width={176}
              height={39}
              src="/asset/nova-about-arrow.png"
            />
          </div>
        </div>
        <div className="xl:w-[422px] xl-[120px] mt-5 sm:mt-[48px] md:mt-[60px] lg:mt-[90px] relative">
          <h6 className="font-bold text-3xl mb-3">
            <span className="text-warning700">Elevating</span> Client Experience
          </h6>
          <p className="text-base font-normal">
            At Novasphere, we're dedicated to putting our clients first. From
            the moment you reach out to us, your satisfaction becomes our top
            priority.
          </p>
          <div className="absolute bottom-[-6px] left-[11.5rem] hidden xl:block">
            <Image
              alt="Random icon"
              width={33}
              height={31}
              src="/asset/nova-arrow-brt.png"
            />
          </div>
        </div>
      </div>
      {/* <div
        className="absolute"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <Image
          src="/asset/nova-about-hero-img.png"
          alt="Novasphere hero picture"
          width={745}
          height={610}
        />
      </div> */}
    </div>
  );
}
