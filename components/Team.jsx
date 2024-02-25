// import Image from "next/image";
// import Counter from "./Counter";

// export default function Team() {
//   return (
//     <>
//       <div className="main-container text-center">
//         <h2 className="header-2_bold mb-2 text-center">Meet the Team</h2>
//         <p className="text-2_regular text-center mb-4"></p>
//         <div className="grid-3">
//           <div>
//             <div>
//               <Image
//                 src="/asset/nova-about-hero.png"
//                 alt="Novasphere hero picture"
//                 width={364}
//                 height={364}
//                 className="rounded-full"
//               />
//             </div>
//             <h5 className="header-4_bold mt-3 mb-2">Jay Aiden</h5>
//             <p className="text-2_regular">Account</p>
//           </div>
//           <div>
//             <div>
//               <Image
//                 src="/asset/nova-about-hero.png"
//                 alt="Novasphere hero picture"
//                 width={364}
//                 height={364}
//                 className="rounded-full"
//               />
//             </div>
//             <h5 className="header-4_bold mt-3 mb-2">Jay Aiden</h5>
//             <p className="text-2_regular">Account</p>
//           </div>
//           <div>
//             <div>
//               <Image
//                 src="/asset/nova-about-hero.png"
//                 alt="Novasphere hero picture"
//                 width={364}
//                 height={364}
//                 className="rounded-full"
//               />
//             </div>
//             <h5 className="header-4_bold mt-3 mb-2">Jay Aiden</h5>
//             <p className="text-2_regular">Account</p>
//           </div>
//           <div>
//             <div>
//               <Image
//                 src="/asset/nova-about-hero.png"
//                 alt="Novasphere hero picture"
//                 width={364}
//                 height={364}
//                 className="rounded-full"
//               />
//             </div>
//             <h5 className="header-4_bold mt-3 mb-2">Jay Aiden</h5>
//             <p className="text-2_regular">Account</p>
//           </div>
//           <div>
//             <div>
//               <Image
//                 src="/asset/nova-about-hero.png"
//                 alt="Novasphere hero picture"
//                 width={364}
//                 height={364}
//                 className="rounded-full"
//               />
//             </div>
//             <h5 className="header-4_bold mt-3 mb-2">Jay Aiden</h5>
//             <p className="text-2_regular">Account</p>
//           </div>
//           <div>
//             <div>
//               <Image
//                 src="/asset/nova-about-hero.png"
//                 alt="Novasphere hero picture"
//                 width={364}
//                 height={364}
//                 className="rounded-full"
//               />
//             </div>
//             <h5 className="header-4_bold mt-3 mb-2">Jay Aiden</h5>
//             <p className="text-2_regular">Account</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { TeamList } from "@/contants";
import Image from "next/image";
import Counter from "./Counter";

export default function Team() {
  return (
    <div className="main-container text-center">
      <h1 className="header-2_bold mb-4 text-center margin-extra">
        Meet the Team
      </h1>
      <div className="flex justify-center">
        <h3 className="text-2_regular mb-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </h3>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 grid-cols-1">
        {TeamList.map((team) => (
          <div className="flex items-center flex-col" key={team.id}>
            <div className="flex items-center mb-4">
              <Image
                alt={team.name}
                src={team.imgSrc}
                width={364}
                height={364}
              />
            </div>
            <h4 className="header-4_bold mb-2">{team.name}</h4>
            <p className="text-2_regular">{team.department}</p>
          </div>
        ))}
      </div>
      <Counter endValue1={100} endValue2={150} endValue3={30} />
    </div>
  );
}
