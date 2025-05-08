import { TeamList } from "@/contants";
import Counter from "./Counter";
import Image from "next/image";

export default function Team() {
  return (
    <div className="main-container text-center">
      <h1 className="md:text-2xl text-xl font-bold md:mb-4 mb-2 text-center mt-5 text-warning700">
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

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 grid-cols-1 justify-center team-margin">
        {TeamList.map((team, index) => (
          <div
            className={`${
              index === 0 || index === 2
                ? "sm:mt-[40px] mt-[15px]"
                : "sm:mb-[40px] mb-0"
            } relative overflow-hidden rounded-lg`}
            key={team.id}
          >
            <Image
              src={team.imgSrc}
              alt={team.name}
              width={300}
              height={540}
              className="object-cover"
              sizes="(max-width: 768px)"
              priority={index < 3}
            />

            <div
              className="w-full max-w-[300px] absolute bottom-0 text-white px-auto py-6 rounded-b-lg"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.86) 70.58%, rgba(115, 115, 115, 0.01) 98.01%)",
              }}
            >
              <h4 className="font-normal text-[28px] mb-2">{team.name}</h4>
              <p className="font-normal text-base">{team.department}</p>
            </div>
          </div>
        ))}
      </div>

      <Counter endValue1={100} endValue2={150} endValue3={30} />
    </div>
  );
}
