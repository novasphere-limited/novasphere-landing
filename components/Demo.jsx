import Image from "next/image";
import { ROUTES } from "@/contants/ROUTES";
import Link from "next/link";

export default function Demo() {
  return (
    <div className="demo-bg-img md:flex justify-center items-center xl:px-[120px] lg:px-[70px] md:px-[35px] sm:px-[20px] px-3 xl:pt-[159px] py-6 sm:py-12 md:py-[78px] lg:py-[100px] xl:pb-[207px]">
      <div className="w-full">
        <h1 className="xl:text-[40px] lg:text-[34px] md:text-[30px] text-2xl font-medium md:mb-[44px] mb-6">
          Invest in your people. Accelerate your business results.
        </h1>
        <div className="w-[293px] rounded-[6px] bg-warning600">
          <Link href={ROUTES.CONTACT}>
            <h6 className="font-semibold text-sm text-[#FEFCFC]  text-center py-[13px]">
              Request a demo
            </h6>
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full md:mt-0 mt-5">
        <Image
          alt="Demo image"
          width={515}
          height={289}
          src="/asset/nova-bg-demo-vid.png"
          loading="lazy"
          className="w-full"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
