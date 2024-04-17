import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function AboutHerosection() {
  return (
    <div className="main-container xl:mx-[100px] lg:mx-[75px] md:mx-[50px] sm:mx-[25px] mx-3 bg-about-img xl:h-[calc(75vh)] md:h-[calc(50vh)] h-[300px]]">
      <div className="md:flex justify-between gap-3">
        <div className=" xl:mt-[50px] lg:mt-[35px] md:mt-[28px] sm:mt-[15px] mt-2 relative w-full md:w-[422px]">
          <h6 className="font-bold text-3xl mb-3">
            Empower Your Digital Journey with
            <span className="text-warning700"> Novasphere</span>
          </h6>
          <p className="text-base font-normal">
            Unlock the Potential of Seamless Digital Solutions, Where Innovation
            Meets Simplicity.
          </p>
          <div className="absolute bottom-[0.1rem] right-[2rem] hidden xl:block">
            <Image
              alt="Random icon"
              width={176}
              height={39}
              src="/asset/nova-about-arrow.png"
              loading="lazy"
            />
          </div>
        </div>
        <div className=" mt-5 sm:mt-[48px] md:mt-[60px] lg:mt-[90px] relative w-full md:w-[422px]">
          <h6 className="font-bold text-3xl mb-3">
            <span className="text-warning700">Elevating</span> Client Experience
          </h6>
          <p className="text-base font-normal">
            At Novasphere, we&apos;re dedicated to putting our clients first.
            From the moment you reach out to us, your satisfaction becomes our
            top priority.
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
    </div>
  );
}
