import { TodoList } from "@/contants";
import Image from "next/image";

export default function ServiceHeroSection() {
  return (
    <>
      <div className="text-center">
        <div className="flex justify-center">
          <h1 className="text-[3rem] mb-3 w-[555px] font-semibold">
            We give the perfect
            <span className="text-warning500 ps-2">Solution</span> to your
            Business.
          </h1>
        </div>
        <div className="flex justify-center">
          <h6 className="label-2_regular mb-3" style={{ maxWidth: "848px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h6>
        </div>
      </div>
      <div className="grid-2">
        {TodoList.map((todo, index) => (
          <div
            className={`${
              index === "0" ? "bg-gray100" : "bg-[#0EC9FC05]"
            }  lg:p-10 sm:p-5 p-2 rounded-md`}
            key={todo.id}
          >
            <div className="mb-3">
              <Image
                src="/favicon_io/flight.svg"
                alt="Flight icon"
                width={12}
                height={14}
              />
            </div>
            <h6 className="label-2_medium mb-4">{todo.header}</h6>
            <p className="text-2_regular mb-5">{todo.content}</p>
            <button className="text-2_bold flex gap-2 mb-10 items-center">
              <p className="text-warning500">Read More</p>
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
    </>
  );
}
