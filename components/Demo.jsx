import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function Demo() {
  return (
    <div className="demo-bg-img md:flex justify-center xl:px-[120px] lg:px-[70px] md:px-[35px] sm:px-[20px] px-3 py-[59px]">
      <div className="w-full">
        <h1 className="xl:text-[40px] lg:text-[34px] md:text-[30px] text-2xl font-medium">
          Invest in your people. Accelerate your business results.
        </h1>
        <LinkBtn href="#" text="Request a demo" />
      </div>
      <div className="flex justify-center w-full md:mt-0 mt-5">
        <Image
          alt="Demo image"
          width={515}
          height={289}
          src="/asset/nova-bg-demo-vid.png"
        />
      </div>
    </div>
  );
}
