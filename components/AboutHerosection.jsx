import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function AboutHerosection() {
  return (
    <div className="main-container mx-[100px] bg-about-img h-screen">
      <div className="flex justify-between">
        <div className="w-[422px] mt-[50px] relative">
          <h6 className="font-bold text-3xl mb-3">
            Empower Your Digital Journey with{" "}
            <span className="text-warning700">Novasphere</span>
          </h6>
          <p className="text-base font-normal">
            Unlock the Potential of Seamless Digital Solutions, Where Innovation
            Meets Simplicity.
          </p>
          <div className="absolute bottom-[1.5rem] right-[2rem]">
            <Image
              alt="Random icon"
              width={176}
              height={39}
              src="/asset/nova-about-arrow.png"
            />
          </div>
        </div>
        <div className="w-[422px] mt-[120px] relative">
          <h6 className="font-bold text-3xl mb-3">
            <span className="text-warning700">Elevating</span> Client Experience
          </h6>
          <p className="text-base font-normal">
            At Novasphere, we're dedicated to putting our clients first. From
            the moment you reach out to us, your satisfaction becomes our top
            priority.
          </p>
          <div className="absolute bottom-[-6px] left-[11.5rem]">
            <Image
              alt="Random icon"
              width={33}
              height={31}
              src="/asset/nova-arrow-brt.png"
            />
          </div>
        </div>
      </div>
      {/* <div
        className="absolute"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <Image
          src="/asset/nova-about-hero-img.png"
          alt="Novasphere hero picture"
          width={745}
          height={610}
        />
      </div> */}
    </div>
  );
}
