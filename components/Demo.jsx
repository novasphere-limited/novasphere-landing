import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function Demo() {
  return (
    <div className="demo-bg-img flex px-[138px] py-[59px]">
      <div>
        <h1 className="text-[40px] font-medium">
          Invest in your people. Accelerate your business results.
        </h1>
        <LinkBtn href="#" text="Request a demo" />
      </div>
      <div>
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
