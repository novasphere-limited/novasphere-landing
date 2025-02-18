import LinkBtn from "./LinkBtn";
import { ROUTES } from "@/contants/ROUTES";

export default function StartProject() {
  return (
    <div className="text-center bg-[#DAEBFD6E] xl:py-[49px] py-[44px] md:py-9 lg:py-11 px-3 xl:mb-[164px] lg:mb-[130px] sm:mb-[80px] mb-50px]">
      <h2 className="font-semibold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-[27px]">
        Let&rsquo;s get your project started
      </h2>
      <div className="md:mb-8 sm:mb-5 mb-3">
        <LinkBtn href={ROUTES.CONTACT} text="Contact Us" />
      </div>
    </div>
  );
}
