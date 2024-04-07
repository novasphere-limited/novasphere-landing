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
      <div className="main-container text-center bg-[#DAEBFD6E]">
        <h2 className="font-semibold text-3xl mb-2 md:mt-8 sm:mt-5">
          Let&rsquo;s get your project started
        </h2>
        <div className="md:mb-8 sm:mb-5 mb-3">
          <LinkBtn href={ROUTES.CONTACT} text="Contact Us" />
        </div>
      </div>
    </AnimatedInView>
  );
}
