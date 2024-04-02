import Image from "next/image";
import Link from "next/link";

export default function OurWork() {
  return (
    <>
      <div className="main-container mt-[100px] mx-[68px]">
        <div className="flex justify-center">
          <h2 className="text-3xl font-semibold mb-[64px] text-center relative">
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

        <div className="grid-2_diff2 items-center bg-white rounded-[20px] ps-[54px] gap-[87px] pe-[32px] py-[36px]">
          <div className="w-full">
            <div className="mb-[55px]">
              <Image
                src="/asset/nova-paymee.png"
                alt="Nav arrow"
                height={39}
                width={93}
              />
            </div>
            <h6 className="text-2xl font-semibold mb-4 text-[#2878CF]">
              PayyMe
            </h6>
            <h6 className="label-2_regular mb-[32px]">
              Revolutionising payment through inclusion and innovation - one SMS
              at a time. Without worrying about connectivity, PayyME helps small
              businesses and  individuals pay and get paid
            </h6>
            <Link href="#" className="flex items-center gap-2">
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
          <div className="w-full flex justify-end">
            <Image
              src="/asset/nova-agric.png"
              alt="Work image"
              width={416}
              height={550}
              className="rounded-md "
            />
          </div>
        </div>
      </div>
    </>
  );
}
