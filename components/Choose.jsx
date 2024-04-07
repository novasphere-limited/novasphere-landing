import Image from "next/image";
import AnimatedInView from "./Animate";

export default function Choose() {
  return (
    <div className="main-container margin-spec xl:mx-[120px] lg:mx-[70px] md:mx-[35px] sm:mx-[20px] mx-3">
      <h2 className="font-semibold text-3xl text-center mb-4">Why Choose Us</h2>
      <div className="flex justify-center">
        <h6 className="text-base font-normal mb-5 text-center md:w-[600px]">
          We take pride in being your trusted partner. Our commitment to
          excellence and innovation makes us pacesetters
        </h6>
      </div>

      <div className="grid-2_diff1 items-center mb-[100px]">
        <div className="w-full">
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1712330379/8647F695-09BF-4D97-9E74-979B9DEFC6D7_zdv7qh.png"
            alt="Choose image"
            width={541}
            height={330}
            className="rounded-md w-full"
          />
        </div>
        <div className="w-full relative">
          <div className="abs-spec lg:w-[604px] bg-[#FFFFFF4D] w-full rounded-[10px] backdrop-blur-md xl:py-[39px] lg:py-[29px] md:py-[19px] sm:py-3 py-2 xl:pe-[97px] lg:pe-[67px] md:pe-[37px] sm:pe-[20px] pe-3 ps-[24px]">
            <h6 className="label-2_bold mb-3 text-[#2060A5]">
              Proven Expertise
            </h6>
            <h6 className="font-normal text-base mb-3 text-[#333232]">
              We boast of a diverse ever-evolving brilliant team that brings a
              wealth of knowledge and expertise to the table. We stay ahead of
              the market and ensure that you get the best of the latest
              strategies.
            </h6>
          </div>
        </div>
      </div>

      <div className="grid-2_diff2 items-center mb-[100px]">
        <div className="w-full relative">
          <div className="abs-spec-1 abs-spec-2 lg:w-[604px] bg-[#FFFFFF4D] w-full rounded-[10px] backdrop-blur-md xl:py-[39px] lg:py-[29px] md:py-[19px] sm:py-3 py-2 xl:pe-[97px] lg:pe-[67px] md:pe-[37px] sm:pe-[20px] pe-3 ps-[24px]">
            <h6 className="label-2_bold mb-3 text-[#2060A5]">Client Centric</h6>
            <h6 className="font-normal text-base mb-3 text-[#333232]">
              We’re more than problem-solvers, we’re solutions architects. We
              put innovation forward and push the boundaries to create
              forward-thinking solutions.
            </h6>
          </div>
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1712330367/3D25A4FF-19F4-4CE8-A532-4CC534F8CFC6_cqhzwa.png"
            alt="Choose image"
            width={541}
            height={330}
            className="rounded-md w-full"
          />
        </div>
      </div>

      <div className="grid-2_diff1 items-center">
        <div>
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1712331658/D0B104C7-ABA1-49FF-8FF1-706020FB6D50_c0fdfc.png"
            alt="Choose image"
            width={541}
            height={330}
            className="rounded-md w-full"
          />
        </div>
        <div className="w-full relative">
          <div className="abs-spec lg:w-[604px] bg-[#FFFFFF4D] w-full rounded-[10px] backdrop-blur-md xl:py-[39px] lg:py-[29px] md:py-[19px] sm:py-3 py-2 xl:pe-[97px] lg:pe-[67px] md:pe-[37px] sm:pe-[20px] pe-3 ps-[24px]">
            <h6 className="label-2_bold mb-3 text-[#2060A5]">
              Innovation at its Core
            </h6>
            <h6 className="font-normal text-base mb-3 text-[#333232]">
              We’re more than problem-solvers, we’re solutions architects. We
              put innovation forward and push the boundaries to create
              forward-thinking solutions.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
