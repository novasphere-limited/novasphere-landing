import Image from "next/image";
import Link from "next/link";
import AnimatedInView from "./Animate";

export default function OurWork() {
  return (
    <div id="ourWork">
      <div className="main-container margin-spec xl:mx-[68px] lg:mx-[48px] md:mx-[36px] sm:mx-[18px] mx-2">
        <div className="flex justify-center">
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold mb-[64px] text-center relative">
            Our Work
            <div className="absolute right-[-0.8rem] top-[-0.1rem]">
              <Image
                alt="Love emoji"
                height={13}
                width={18}
                src="/asset/nova-love.png"
              />
            </div>
          </h2>
        </div>

        <div className="grid-2_diff2 items-center bg-white rounded-[20px] xl:ps-[54px] gap-[87px] xl:pe-[32px] py-[36px] lg:ps-[40px] lg:pe-[24px] md:ps-[28px] md:pe-[14px] sm:ps-[14px] sm:pe-[8px] px-[8px]">
          <div className="w-full">
            <div className="mb-[55px]">
              <Image
                src="/asset/nova-paymee.png"
                alt="Nav arrow"
                height={39}
                width={93}
                loading="lazy"
              />
            </div>
            <h6 className="md:text-2xl text-xl font-semibold mb-4 text-[#2878CF]">
              PayyMe
            </h6>
            <h6 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base mb-[32px]">
              Revolutionising payment through inclusion and innovation - one SMS
              at a time. Without worrying about connectivity, PayyME helps small
              businesses and  individuals pay and get paid
            </h6>
            <Link
              href="https://www.payymenow.com"
              className="flex items-center gap-2"
            >
              <p className="text-warning500 font-medium text-base">
                Go to PayMe
              </p>
              <div>
                <Image
                  src="/favicon_io/arrow_up-purp.svg"
                  alt="Nav arrow"
                  height={12}
                  width={12}
                />
              </div>
            </Link>
          </div>
          <div className="w-full flex lg:justify-end justify-center  h-auto overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356965/PayyMe/Frame_1321315220_bxbqby.png"
              alt="Work image"
              width={416}
              height={550}
              className="rounded-md w-full"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
