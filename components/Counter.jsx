import React from "react";
import CountUp from "react-countup";

const Counter = ({ endValue1, endValue2, endValue3 }) => {
  return (
    <div className="text-center">
      <h4 className="text-3xl font-semibold mb-[64px] mt-[100px]">
        Join our Community
      </h4>
      <div className="flex justify-center">
        <div className="flex bg-[#D6E9FE] justify-center w-[608px] py-[20px] lg:px-[50px] md:px-[34px] sm:px-[20px] px-[12px]">
          <div className="w-full border-e-4">
            <h1 className="font-semibold text-3xl mb-3">
              <CountUp end={endValue1} duration={5} />+
            </h1>
            <h5 className="text-1_regular">Projects</h5>
          </div>
          <div className="w-full border-e-4">
            <h1 className="font-semibold text-3xl mb-3">
              <CountUp end={endValue2} duration={5} />
            </h1>
            <h5 className="text-1_regular">Average Clients</h5>
          </div>
          <div className="w-full">
            <h1 className="font-semibold text-3xl mb-3">
              <CountUp end={endValue3} duration={5} />
            </h1>
            <h5 className="text-1_regular">Team Members</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

// import React, { useEffect, useRef } from "react";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// const Counter = ({ endValue1, endValue2, endValue3 }) => {
//   const [ref, inView] = useInView();
//   const counterRef = useRef(null);

//   useEffect(() => {
//     if (inView) {
//       const counters = counterRef.current.querySelectorAll(".counter");
//       counters.forEach((counter, index) => {
//         const endValue = parseFloat(counter.dataset.endValue);
//         const duration = 5; // Duration in seconds

//         const options = {
//           start: 0,
//           end: endValue,
//           duration: duration,
//           separator: ",",
//         };

//         const countUp = new CountUp(counter, endValue, options);
//         if (!countUp.error) {
//           countUp.start();
//         } else {
//           console.error(countUp.error);
//         }
//       });
//     }
//   }, [inView]);

//   return (
//     <div
//       ref={ref}
//       className="flex bg-warning100 items-center"
//       style={{ padding: "3rem" }}
//     >
//       <div className="w-full text-center border-e-4">
//         <h1 className="header-1_black mb-3">
//           <span
//             ref={counterRef}
//             className="counter"
//             data-end-value={endValue1}
//           />
//           +
//         </h1>
//         <h5 className="text-1_regular">Projects</h5>
//       </div>
//       <div className="w-full text-center border-e-4">
//         <h1 className="header-1_black mb-3">
//           <span
//             ref={counterRef}
//             className="counter"
//             data-end-value={endValue2}
//           />
//         </h1>
//         <h5 className="text-1_regular">Average Clients</h5>
//       </div>
//       <div className="w-full text-center">
//         <h1 className="header-1_black mb-3">
//           <span
//             ref={counterRef}
//             className="counter"
//             data-end-value={endValue3}
//           />
//         </h1>
//         <h5 className="text-1_regular">Team Members</h5>
//       </div>
//     </div>
//   );
// };

// export default Counter;
