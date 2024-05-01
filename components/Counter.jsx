import React from "react";
import CountUp from "react-countup";
import AnimatedInView from "./Animate";

const Counter = ({ endValue1, endValue2, endValue3 }) => {
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
      <div className="text-center">
        <h4 className="text-5xl font-semibold mb-[64px] margin-spec">
          Join our Community
        </h4>
        <div className="flex justify-center">
          <div className="flex bg-[#D6E9FE] justify-center w-[608px] py-[20px] lg:px-[50px] md:px-[34px] sm:px-[20px] px-[12px]">
            <div className="w-full border-e-4">
              <h1 className="font-semibold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-1">
                <CountUp end={endValue1} duration={5} />+
              </h1>
              <p className="font-normal md:text-lg text-sm">Projects</p>
            </div>
            <div className="w-full border-e-4">
              <h1 className="font-semibold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-1">
                <CountUp end={endValue2} duration={5} />
              </h1>
              <p className="font-normal md:text-lg text-sm">Average Clients</p>
            </div>
            <div className="w-full">
              <h1 className="font-semibold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-1">
                <CountUp end={endValue3} duration={5} />
              </h1>
              <p className="font-normal md:text-lg text-sm">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedInView>
  );
};

export default Counter;
