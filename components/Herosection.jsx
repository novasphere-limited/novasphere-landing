import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import LinkBtn from "./LinkBtn";
import AnimatedInView from "./Animate";

export default function HeroSection() {
  return (
    <AnimatedInView
      threshold={0.5}
      variants={{
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      }}
    >
      <div className="text-center bg-image mb-[134px]">
        <div>
          <div className="flex justify-center">
            <h1 className="header-1_bold mb-3" style={{ maxWidth: "1038px" }}>
              Empowering Your
              <span className="text-warning500"> Digital Vision</span> with
              Innovative Solutions
            </h1>
          </div>
          <div className="flex justify-center">
            <h6
              className="lg:text-xl sm:text-base text-sm font-normal m-2 sm:m-4"
              style={{ maxWidth: "639px" }}
            >
              Discover the power of innovation with Novasphere where
              cutting-edge technology meets tailored software solutions.
            </h6>
          </div>
        </div>
        <LinkBtn href="/contact" text="Get Started" />
        <div className="relative">
          <div className="flex justify-center my-4 lg:h-[683px] overflow-hidden h-[283px]">
            <Image
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1712331407/6E11328D-8F76-48CF-AA46-AD9C6A58F002_airfcu.png"
              alt="Novasphere hero picture"
              width={1223}
              height={684}
              className="rounded-lg"
              loading="lazy"
              style={{ objectFit: "contain" }}
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
    </AnimatedInView>
  );
}
