import { TeamList } from "@/contants";
import Image from "next/image";
import Counter from "./Counter";

export default function Team() {
  return (
    <div className="main-container text-center xl:mx-[100px] lg:mx-[75px] md:mx-[50px] sm:mx-[25px] mx-3">
      <h1 className="text-2xl font-bold mb-4 text-center margin-extra text-warning700">
        Meet the Team
      </h1>
      <div className="flex justify-center">
        <h3
          className="text-4xl mb-[73px] text-center"
          style={{ maxWidth: "500px" }}
        >
          Bringing Passion and Expertise together
        </h3>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 grid-cols-1">
        {TeamList.map((team, index) => (
          <div
            className={`${
              index === 0 || index === 2
                ? "sm:mt-[40px] mt-[15px]"
                : "sm:mb-[40px] mb-0"
            } flex items-center flex-col relative`}
            key={team.id}
          >
            <div className="flex items-center mb-4">
              <Image
                alt={team.name}
                src={team.imgSrc}
                width={364}
                height={364}
              />
            </div>
            <div className="absolute bottom-4 text-white backdrop-blur-[2px] w-full">
              <h4 className="font-normal text-[28px] mb-2">{team.name}</h4>
              <p className="font-normal text-base mb-2">{team.department}</p>
            </div>
          </div>
        ))}
      </div>
      <Counter endValue1={100} endValue2={150} endValue3={30} />
    </div>
  );
}
