import { TodoList } from "@/contants";
import Image from "next/image";

export default function Todo() {
  return (
    <div className="main-container">
      <h2 className="header-2_bold text-center mb-3">What do we do?</h2>
      <p className="text-2_regular mb-5 text-center">
        At Novasphere, we&apos;re dedicated to connecting you with possibilities
        to help reach your full potential. Our services include:
      </p>
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
    </div>
  );
}
