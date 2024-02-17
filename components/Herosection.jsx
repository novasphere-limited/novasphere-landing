import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import LinkBtn from "./LinkBtn";

export default function HeroSection() {
  return (
    <div className="text-center main-container">
      <div>
        <h1 className="header-1_bold mb-3">
          Connecting
          <span className="text-warning500"> Possibilities</span> online
        </h1>
        <div className="flex justify-center">
          <h6 className="header-4_regular " style={{ maxWidth: "491px" }}>
            Unlocking Digital Horizons, Connecting Your Future
          </h6>
        </div>
      </div>
      <LinkBtn href="#" text="Get Started" />
      <div className="flex justify-center my-4 landing-img_bg">
        <Image
          src="/asset/nove-home_img.png"
          alt="Novasphere hero picture"
          width={871}
          height={611}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
