import { MissionList } from "@/contants";
import AnimatedInView from "./Animate";

export default function Mission() {
  return (
    <div className="flex justify-center text-center xl:my-[164px] my-7 sm:my-10 md:my-65px] lg:my-[100px] xl:mx-[74px] md:mx-11 lg:mx-[60px] mx-3">
      <div
        className="grid-2 rounded-[12px]"
        style={{ border: "2px solid #D3D3D3" }}
      >
        {MissionList.map((todo, index) => (
          <div
            className={`${
              index === 0 ? "bg-[#D9D9D9]" : "bg-[#0EC9FC05]"
            } xl:px-[84px] px-3 sm:px-6 md:px-10 lg:px-[62px] py-3 sm:py-5 md:py-[28px] lg:py-[40px] xl:py-[54px] flex flex-col`}
            key={todo.id}
          >
            <div className="flex pe-[3px] relative justify-center">
              <h6 className="text-lg mb-4 font-semibold">{todo.header}</h6>
              <div
                style={{
                  height: "2px",
                  width: "38px",
                  background: "#3090F8",
                }}
                className="absolute top-7"
              ></div>
            </div>
            <p className="md:text-xl text-sm mb-5">{todo.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
