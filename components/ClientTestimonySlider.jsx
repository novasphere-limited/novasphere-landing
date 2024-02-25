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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum
                    dolor sitLorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                  <div
                    style={{ height: "38px", width: "38px" }}
                    className="rounded-full bg-[#D9D9D9]"
                  ></div>
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
