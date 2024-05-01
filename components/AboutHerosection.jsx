import Image from "next/image";

export default function AboutHerosection() {
  return (
    <div className="bg-[#EEF8FF]">
      <div className="relative bg-about-img xl:h-[calc(75vh)] md:h-[calc(50vh)] h-auto">
        <div className="md:flex justify-between gap-3 xl:mx-[100px] lg:mx-[75px] md:mx-[50px] sm:mx-[25px] mx-3 py-5">
          <div className=" xl:mt-[78px] lg:mt-[35px] md:mt-[28px] sm:mt-[15px] mt-2 relative w-full md:w-[422px]">
            <h6 className="font-bold md:text-[34px] text-4xl md:mb-4 mb-2">
              Empower Your Digital Journey with
              <span className="text-warning700"> Novasphere</span>
            </h6>
            <p className="text-base font-normal">
              Unlock the Potential of Seamless Digital Solutions, Where
              Innovation Meets Simplicity.
            </p>
            <div className="absolute bottom-[2.rem] right-[1.1rem] hidden xl:block">
              <Image
                alt="Random icon"
                width={176}
                height={39}
                src="/asset/nova-about-arrow.png"
                loading="lazy"
              />
            </div>
          </div>
          <div className=" mt-5 sm:mt-[48px] md:mt-[60px] xl:mt-[159px] relative w-full md:w-[425px]">
            <h6 className="font-medium md:text-[34px] text-4xl md:mb-4 mb-2">
              <span className="text-warning700">Elevating</span> Client
              Experience
            </h6>
            <p className="text-base font-normal">
              At Novasphere, we&apos;re dedicated to putting our clients first.
              From the moment you reach out to us, your satisfaction becomes our
              top priority.
            </p>
            <div className="absolute bottom-[-6px] left-[5.5rem] hidden xl:block">
              <Image
                alt="Random icon"
                width={33}
                height={31}
                src="/asset/nova-arrow-brt.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[62px] w-full hidden xl:block">
          <Image
            layout="fill"
            alt="About background bottom icon"
            src="/asset/about-mini-bg.png"
            className="w-full"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
