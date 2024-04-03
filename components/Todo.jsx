import { TodoList } from "@/contants";
import Image from "next/image";

export default function Todo() {
  return (
    <div className="main-container">
      <div className="lg:ms-[2rem] md:ms-[1.5rem] sm:ms-[1rem] ms-2">
        <div className="relative">
          <h2 className="text-3xl font-semibold mb-3">What we do?</h2>
          <div className="absolute top-[-1rem] left-[-1.5rem]">
            <Image
              alt="Circle icon"
              height={68}
              width={101}
              src="/asset/nova-circ.png"
            />
          </div>
        </div>

        <p className="text-2_regular mb-[66px]" style={{ maxWidth: "550px" }}>
          At Novasphere, we&apos;re committed to igniting your potential by
          connecting you with boundless opportunities in the ever-evolving
          digital landscape:
        </p>
      </div>
      <div
        className="grid-2 rounded-[12px] gap-y-2 sm:gap-y-3 md:gap-y-0"
        style={{ border: "2px solid #D3D3D3" }}
      >
        {TodoList.map((todo, index) => (
          <div
            className={`${
              index === 0 || index === 3 ? "bg-[#D9D9D9]" : "bg-[#0EC9FC05]"
            }  lg:p-10 md:p-6 sm:p-4 p-2 flex flex-col`}
            key={todo.id}
          >
            <div className="mb-[32px]">
              <Image
                src={todo.icon}
                alt="Flight icon"
                width={
                  todo.icon !== "/favicon_io/nova-browser-1.svg" ? 56 : 106
                }
                height={
                  todo.icon !== "/favicon_io/nova-browser-1.svg" ? 56 : 106
                }
              />
            </div>
            <div className="flex pe-[3px]">
              <h6 className="text-lg mb-4 font-semibold">{todo.header}</h6>
            </div>
            <p className="text-2_regular mb-5">{todo.content}</p>

            <button className="text-2_bold flex gap-2 items-center mt-auto">
              <p className="text-warning500 font-medium text-base">Read More</p>
              <Image
                src="/favicon_io/arrow_up-purp.svg"
                alt="Arrow icon"
                width={12}
                height={14}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
