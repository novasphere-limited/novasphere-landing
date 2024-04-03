import Image from "next/image";
import { useState } from "react";

export default function TestimonySlider({ ArrayList }) {
  const [currentSlide, SetCurrentSlide] = useState(0);

  const instantSlide = (i) => {
    SetCurrentSlide(i);
  };
  return (
    <>
      <div>
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{ transform: `translate(-${currentSlide * 100}%)` }}
          >
            {ArrayList.map((feature) => (
              <div
                className="w-full flex gap-5 items-center justify-center"
                style={{ flex: "0 0 auto" }}
                key={feature.id}
              >
                <div className="rounded-lg p-5 bg-white w-full">
                  <p className="text-2_regular mb-5  border-b-2 pb-2">
                    "We love Novasphere! Our designers were using it for their
                    projects, so we already knew what kind of design they want."
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
                      <h4 className="text-[#1F1F1F] mb-2 font-semibold">
                        Devon Lane
                      </h4>
                      <p className="text-[#444444]">Co-Founder, Design.co</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 justify-center items-center mt-3 cursor-pointer">
            {ArrayList.map((ray, index) => (
              <div
                className="bg-[#D9D9D9]"
                style={{
                  height: "6px",
                  width: `${index === currentSlide ? "45px" : "22px"}`,
                  backgroundColor: `${
                    index === currentSlide ? "#3090F8" : "#D3D0D0"
                  }`,
                  borderRadius: "8px",
                }}
                key={index}
                onClick={() => instantSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
