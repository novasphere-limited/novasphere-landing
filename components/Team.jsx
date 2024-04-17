import { TeamList } from "@/contants";
import Image from "next/image";
import Counter from "./Counter";
import AnimatedInView from "./Animate";

export default function Team() {
  return (
    <div className="main-container text-center">
      <h1 className="text-2xl font-bold mb-4 text-center  text-warning700">
        Meet the Team
      </h1>
      <div className="flex justify-center">
        <h3
          className="xl:text-4xl text-2xl md:text-3xl xl:mb-[73px] mb-4 md:mb-9 sm:mb-6 lg:md-[60px] text-center"
          style={{ maxWidth: "500px" }}
        >
          Bringing Passion and Expertise together
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1 justify-between team-margin">
        {TeamList.map((team, index) => (
          <div
            className={`${
              index === 0 || index === 2
                ? "sm:mt-[40px] mt-[15px]"
                : "sm:mb-[40px] mb-0"
            } flex items-center flex-col relative ${
              index === 2 ? "sm:mx-auto left-0 right-0" : ""
            }`}
            key={team.id}
          >
            <div className="flex items-center mb-4 justify-center">
              <Image
                alt={team.name}
                src={team.imgSrc}
                width={300}
                height={540}
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-4 text-white bg-black bg-opacity-20 backdrop-blur-[4px] px-auto w-[300px]">
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
