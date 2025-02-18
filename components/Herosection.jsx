import Image from "next/image";
import LinkBtn from "./LinkBtn";

export default function HeroSection() {
  return (
    <div className="text-center xl:pb-[134px] pb-[44px] sm:pb-[64px] md:pb-[84px] lg:pb-[104px] xl:pt-[120px] pt-[44px] sm:pt-[64px] md:pt-[84px] lg:pt-[104px] text-[#1F1F1F] px-3">
      <div className="">
        <div className="flex justify-center">
          <h1
            className="font-bold xl:text-[45px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl  md:mb-4 mb-2"
            style={{ maxWidth: "1038px" }}
          >
            Empowering Your
            <span className="text-warning500"> Digital Vision</span> with
            Innovative Solutions
          </h1>
        </div>
        <div className="flex justify-center">
          <h6
            className="lg:text-xl sm:text-base text-sm font-normal mb-4 xl:mb-[52px] lg:mb-[42px] md:mb-[36px] sm:mb-[26px]"
            style={{ maxWidth: "639px" }}
          >
            Discover the power of innovation with Novasphere where cutting-edge
            technology meets tailored software solutions.
          </h6>
        </div>
        <LinkBtn href="/contact" text="Get Started" />
      </div>
      <div className="relative xl:mt-[100px] mt-4 sm:mt-8 md:mt-12 lg:mt-[75px]">
        <div className="flex justify-center my-4 lg:h-[683px] overflow-hidden h-auto xl:px-[100px] lg:px-[75px] md:px-[35px]">
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1712331407/6E11328D-8F76-48CF-AA46-AD9C6A58F002_airfcu.png"
            alt="Novasphere hero picture"
            width={1223}
            height={684}
            className="rounded-lg w-full"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute top-[4rem] left-0 hidden md:block">
          <Image
            src="/asset/nova-hero-card_1.png"
            alt="Novasphere hero picture"
            width={336}
            height={245}
            className="rounded-lg"
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="absolute bottom-[-6rem] right-0 hidden md:block">
          <Image
            src="/asset/nova-hero-card_2.png"
            alt="Novasphere hero picture"
            width={260}
            height={299}
            className="rounded-lg"
            loading="lazy"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
