import Image from "next/image";

export default function Choose() {
  return (
    <div className="main-container mt-[100px] mx-[150px]">
      <h2 className="font-semibold text-3xl text- text-center mb-4">
        Why Choose Us
      </h2>
      <div className="flex justify-center">
        <h6 className="text-base font-normal mb-5 text-center w-[600px]">
          We take pride in being your trusted partner. Our commitment to
          excellence and innovation makes us pacesetters
        </h6>
      </div>
      <div className="grid-2_diff1 items-center mb-[100px]">
        <div className="w-full">
          <Image
            src="/asset/nova-choose-1.png"
            alt="Choose image"
            width={541}
            height={330}
            className="rounded-md w-full"
          />
        </div>
        <div className="w-full relative">
          <div className="abs-spec w-[604px] rounded-[10px] backdrop-blur-md py-[39px] pe-[97px] ps-[24px]">
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
        <div className="w-full relative bg-white">
          <div className="abs-spec-1 w-[604px] rounded-[10px] backdrop-blur-md py-[39px] pe-[97px] ps-[24px]">
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
            src="/asset/nova-choose-2.png"
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
            src="/asset/nova-choose-3.png"
            alt="Choose image"
            width={541}
            height={330}
            className="rounded-md w-full"
          />
        </div>
        <div className="w-full relative">
          <div className="abs-spec w-[604px] rounded-[10px] backdrop-blur-md py-[39px] pe-[97px] ps-[24px]">
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
