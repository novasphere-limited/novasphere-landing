import Image from "next/image";

export default function Choose() {
  return (
    <div className="main-container margin-spec xl:mx-[120px] lg:mx-[70px] md:mx-[35px] sm:mx-[20px] mx-3">
      <h2 className="font-semibold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center md:mb-4 mb-2">
        Why Choose Us
      </h2>
      <div className="flex justify-center">
        <h6 className="text-base font-normal mb-5 text-center md:w-[600px] font-[#545353]">
          We take pride in being your trusted partner. Our commitment to
          excellence and innovation makes us pacesetters
        </h6>
      </div>

      <div className="grid-2_diff1 items-center sm:mb-[100px] mb-3">
        <div className="w-full">
          <Image
            src="/asset/chus-3.png"
            alt="Choose image"
            width={541}
            height={330}
            className="rounded-md w-full"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full relative sm:block hidden">
          <div className="abs-spec lg:w-[604px] bg-[#FFFFFF4D] w-full rounded-[10px] backdrop-blur-md xl:py-[39px] lg:py-[29px] md:py-[19px] sm:py-3 py-2 xl:pe-[97px] lg:pe-[67px] md:pe-[37px] sm:pe-[20px] pe-3 ps-[24px]">
            <h6 className="md:text-2xl text-xl md:mb-4 mb-2 text-[#2060A5]">
              Proven Expertise
            </h6>
            <p className="font-normal text-base mb-3 text-[#333232]">
              We boast of a diverse ever-evolving brilliant team that brings a
              wealth of knowledge and expertise to the table. We stay ahead of
              the market and ensure that you get the best of the latest
              strategies.
            </p>
          </div>
        </div>
        <div className="block sm:hidden">
          <div className="bg-[#FFFFFF4D] w-full rounded-[10px] backdrop-blur-md xl:py-[39px] lg:py-[29px] md:py-[19px] sm:py-3 py-2 xl:pe-[97px] lg:pe-[67px] md:pe-[37px] sm:pe-[20px] pe-3 ps-[24px]">
            <h6 className="label-2_bold mb-3 text-[#2060A5]">
              Proven Expertise
            </h6>
            <p className="font-normal text-sm text-[#333232]">
              We boast of a diverse ever-evolving brilliant team that brings a
              wealth of knowledge and expertise to the table. We stay ahead of
              the market and ensure that you get the best of the latest
              strategies.
            </p>
          </div>
        </div>
      </div>
      <div className="grid-2_diff2 items-center sm:mb-[100px] mb-3">
        <div className="w-full relative sm:block hidden">
          <div className="abs-spec-1 abs-spec-2 lg:w-[604px] bg-[#FFFFFF4D] w-full rounded-[10px] backdrop-blur-md xl:py-[39px] lg:py-[29px] md:py-[19px] sm:py-3 py-2 xl:pe-[97px] lg:pe-[67px] md:pe-[37px] sm:pe-[20px] pe-3 ps-[24px]">
            <h6 className="md:text-2xl text-xl md:mb-4 mb-2 text-[#2060A5]">
              Client Centric
            </h6>
            <p className="font-normal md:text-base text-sm mb-3 text-[#333232]">
              We’re more than problem-solvers, we’re solutions architects. We
              put innovation forward and push the boundaries to create
              forward-thinking solutions.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/asset/chus-2.png"
            alt="Choose image"
            width={541}
            height={330}
            className="rounded-md w-full"
            loading="lazy"
          />
        </div>
        <div className="sm:hidden block">
          <div className="bg-[#FFFFFF4D] w-full rounded-[10px] backdrop-blur-md xl:py-[39px] lg:py-[29px] md:py-[19px] sm:py-3 py-2 xl:pe-[97px] lg:pe-[67px] md:pe-[37px] sm:pe-[20px] pe-3 ps-[24px]">
            <h6 className="md:text-2xl text-xl md:mb-4 mb-2 text-[#2060A5]">
              Client Centric
            </h6>
            <p className="font-normal text-base text-[#333232]">
              We’re more than problem-solvers, we’re solutions architects. We
              put innovation forward and push the boundaries to create
              forward-thinking solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="grid-2_diff1 items-center">
        <div>
          <Image
            src="/asset/chus-1.png"
            alt="Choose image"
            width={541}
            height={330}
            className="rounded-md w-full"
            loading="lazy"
          />
        </div>
        <div className="w-full relative sm:block hidden">
          <div className="abs-spec lg:w-[604px] bg-[#FFFFFF4D] w-full rounded-[10px] backdrop-blur-md xl:py-[39px] lg:py-[29px] md:py-[19px] sm:py-3 py-2 xl:pe-[97px] lg:pe-[67px] md:pe-[37px] sm:pe-[20px] pe-3 ps-[24px]">
            <h6 className="md:text-2xl text-xl md:mb-4 mb-2 text-[#2060A5]">
              Innovation at its Core
            </h6>
            <p className="font-normal text-base mb-3 text-[#333232]">
              We’re more than problem-solvers, we’re solutions architects. We
              put innovation forward and push the boundaries to create
              forward-thinking solutions.
            </p>
          </div>
        </div>
        <div className="sm:hidden block">
          <div className="bg-[#FFFFFF4D] w-full rounded-[10px] backdrop-blur-md xl:py-[39px] lg:py-[29px] md:py-[19px] sm:py-3 py-2 xl:pe-[97px] lg:pe-[67px] md:pe-[37px] sm:pe-[20px] pe-3 ps-[24px]">
            <h6 className="text-xl md:mb-4 mb-2 text-[#2060A5]">
              Innovation at its Core
            </h6>
            <p className="font-normal text-sm mb-3 text-[#333232]">
              We’re more than problem-solvers, we’re solutions architects. We
              put innovation forward and push the boundaries to create
              forward-thinking solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
