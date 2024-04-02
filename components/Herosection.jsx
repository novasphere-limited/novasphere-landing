import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import LinkBtn from "./LinkBtn";

export default function HeroSection() {
  return (
    <div className="text-center bg-image">
      <div>
        <div className="flex justify-center">
          <h1 className="header-1_bold mb-3" style={{ maxWidth: "1038px" }}>
            Empowering Your
            <span className="text-warning500"> Digital Vision</span> with
            Innovative Solutions
          </h1>
        </div>
        <div className="flex justify-center">
          <h6 className="text-xl font-normal" style={{ maxWidth: "639px" }}>
            Discover the power of innovation with Novasphere where cutting-edge
            technology meets tailored software solutions.
          </h6>
        </div>
      </div>
      <LinkBtn href="#" text="Get Started" />
      <div className="relative">
        <div className="flex justify-center my-4 landing-img_bg">
          <Image
            src="/asset/nova-hero-img.png"
            alt="Novasphere hero picture"
            width={1223}
            height={684}
            className="rounded-lg"
          />
        </div>
        <div className="absolute top-[4rem] left-0">
          <Image
            src="/asset/nova-hero-card_1.png"
            alt="Novasphere hero picture"
            width={336}
            height={245}
            className="rounded-lg"
          />
        </div>
        <div className="absolute bottom-[-6rem] right-0">
          <Image
            src="/asset/nova-hero-card_2.png"
            alt="Novasphere hero picture"
            width={260}
            height={299}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
