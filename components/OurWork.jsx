import Image from "next/image";
import Counter from "./Counter";

export default function OurWork() {
  return (
    <>
      <div className="main-container">
        <h2 className="header-2_bold mb-3 text-center">Our Works</h2>
        <p className="text-2_regular mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <div className="grid-2 items-center">
          <div className="w-full">
            <Image
              src="/asset/nova-work_img.png"
              alt="Work image"
              width={646}
              height={511}
              className="rounded-md"
            />
          </div>
          <div className="w-full">
            <h6 className="label-2_bold mb-4">Afrigold</h6>
            <h6 className="label-2_regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </h6>
          </div>
        </div>
      </div>
      <Counter endValue1={100} endValue2={150} endValue3={30} />
    </>
  );
}
