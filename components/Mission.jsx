import { MissionList } from "@/contants";

export default function Mission() {
  return (
    <div>
      <div className="flex justify-center text-center main-container mt-[100px]">
        <div
          className="grid-2 rounded-[12px]"
          style={{ border: "2px solid #D3D3D3" }}
        >
          {MissionList.map((todo, index) => (
            <div
              className={`${
                index === 0 ? "bg-[#D9D9D9]" : "bg-[#0EC9FC05]"
              } px-[84px] py-[54px] flex flex-col`}
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
              <p className="text-2_regular mb-5">{todo.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
