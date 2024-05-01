import Link from "next/link";
import Button from "./Button";
import LinkBtn from "./LinkBtn";
import { ROUTES } from "@/contants/ROUTES";
import AnimatedInView from "./Animate";

export default function StartProject() {
  return (
    <AnimatedInView
      threshold={0.5}
      overflowHidden
      variants={{
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
      }}
    >
      <div className="text-center bg-[#DAEBFD6E] xl:py-[49px] py-[44px] md:py-9 lg:py-11 px-3">
        <h2 className="font-semibold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-[27px]">
          Let&rsquo;s get your project started
        </h2>
        <div className="md:mb-8 sm:mb-5 mb-3">
          <LinkBtn href={ROUTES.CONTACT} text="Contact Us" />
        </div>
      </div>
    </AnimatedInView>
  );
}
