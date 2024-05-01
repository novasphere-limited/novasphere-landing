import Image from "next/image";
import { useState } from "react";

// export default function BlogSlide() {
//   const [curIndex, setCurIndex] = useState(0);

//   const options = [
//     {
//       id: 1,
//       text: "Blog",
//     },
//     {
//       id: 2,
//       text: "Press releases",
//     },
//     {
//       id: 3,
//       text: "Newsroom",
//     },
//   ];
//   const handleBtnChange = (i) => {
//     setCurIndex(i);
//   };
//   return (
//     <div className="mb-[120px]">
//       <div
//         style={{ borderBottom: "2px solid #001F1F14" }}
//         className="pb-1 flex justify-center mx-[80px] mt-[20px] mb-[68px]"
//       >
//         {options.map((option, index) => (
//           <button
//             key={option.id}
//             className={`${
//               index == curIndex ? "text-warning600 border-b-2-warning600" : ""
//             } py-3 px-4 font-semibold text-sm`}
//             onClick={() => handleBtnChange(index)}
//           >
//             {option.text}
//           </button>
//         ))}
//       </div>
//       <div className="xl:mx-[100px] lg:mx-[70px] md:mx-[35px] sm:mx-[20px] mx-3">
//         <h3 className="text-3xl font-semibold mb-[42px]">
//           Recent news at Novasphere
//         </h3>
//         <div className="md:flex bg-white rounded-lg justify-center">
//           <div className="flex justify-center">
//             <Image
//               alt="Nova slider image"
//               src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356910/PayyMe/Article_Figure_Link_linkedin-sales-solutions-wS73LE0GnKs-unsplash.jpg_zrubau.png"
//               width={473}
//               height={332}
//               className="w-full h-[332px]"
//               loading="lazy"
//             />
//           </div>
//           <div className="rounded-lg p-5 w-full py-6">
//             <h6 className="text-xs mb-4"> Linkedin — 6 min read</h6>
//             <h2 className="xl:text-3xl lg:text-2xl  font-semibold mb-4">
//               How to Find Email Addresses on LinkedIn in 2024
//             </h2>
//             <p className="text-2_regular mb-5 pb-2">
//               As a content writer who mostly works for B2B companies, LinkedIn
//               is my go-to platform for finding potential clients because…
//             </p>
//             <div className="flex items-center gap-4">
//               <div
//                 style={{ height: "44px", width: "44px" }}
//                 className="rounded-full bg-[#D9D9D9]"
//               >
//                 <Image
//                   src="/asset/nova-slider-avatar.png"
//                   alt="Testimonial person profile"
//                   width={44}
//                   height={44}
//                 />
//               </div>
//               <div>
//                 <h4 className="text-[#1F1F1F] font-semibold">ALTHEA STORM</h4>
//                 <p className="text-[#444444]">Wiza Team</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function BlogSlide() {
  const [curIndex, setCurIndex] = useState(0);

  const options = [
    {
      id: 1,
      text: "Blog",
    },
    {
      id: 2,
      text: "Press releases",
    },
    {
      id: 3,
      text: "Newsroom",
    },
  ];
  const handleBtnChange = (i) => {
    setCurIndex(i);
  };

  return (
    <div className="xl:mb-[120px] md:mb-[50px] mb-8">
      <div className="xl:mx-[100px] lg:mx-[70px] md:mx-[35px] sm:mx-[20px] mx-3">
        <div
          style={{ borderBottom: "2px solid #001F1F14" }}
          className="pb-1 flex justify-center mt-[20px] md:mb-[68px] mb-[34px]"
        >
          {options.map((option, index) => (
            <button
              key={option.id}
              className={`${
                index == curIndex ? "text-warning600 border-b-2-warning600" : ""
              } py-3 px-4 font-semibold text-sm`}
              onClick={() => handleBtnChange(index)}
            >
              {option.text}
            </button>
          ))}
        </div>
        <h3 className="flex items-center gap-2 xl:text-5xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold xl:mb-[42px] md:mb-[32px] mb-[20px]">
          Recent news at Novasphere
        </h3>
        <div className="md:flex bg-white rounded-lg justify-center items-center">
          <div className="w-full md:h-[332px] overflow-hidden rounded-lg h-[214px]">
            <Image
              alt="Nova slider image"
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356910/PayyMe/Article_Figure_Link_linkedin-sales-solutions-wS73LE0GnKs-unsplash.jpg_zrubau.png"
              width={473}
              height={332}
              className="rounded-lg w-full"
              loading="lazy"
              objectFit="contain"
            />
          </div>
          <div className="rounded-lg p-5 w-full py-6">
            <h6 className="text-xs font-normal md:mb-4 mb-2">
              {" "}
              Linkedin — 6 min read
            </h6>
            <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-base font-semibold md:mb-4 mb-2">
              How to Find Email Addresses on LinkedIn in 2024
            </h2>
            <p className="sm:text-base text-sm md:mb-6 mb-4 font-normal">
              As a content writer who mostly works for B2B companies, LinkedIn
              is my go-to platform for finding potential clients because…
            </p>
            <div className="flex items-center gap-4">
              <div
                style={{ height: "44px", width: "44px" }}
                className="rounded-full bg-[#D9D9D9]"
              >
                <Image
                  src="/asset/nova-slider-avatar.png"
                  alt="Testimonial person profile"
                  width={44}
                  height={44}
                />
              </div>
              <div>
                <h4 className="text-[#1F1F1F] font-semibold text-xs">
                  ALTHEA STORM
                </h4>
                <p className="text-[#444444] text-sm">Wiza Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
