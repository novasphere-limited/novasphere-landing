import Image from "next/image";
import Button from "./Button";
import LinkBtn from "./LinkBtn";

export default function ModalContent({ modalObj }) {
  return (
    <div className="xl:ps-[78px] ps-2 sm:ps-5 md:ps-[38px] lg:ps-[52px] xl:pb-[105px] pb-3 sm:pb-6 md:pb-[38px] lg:pb-[70px] xl:pt-[111px] pt-4 sm:pt-7 md:pt-10 lg-pt-[70px] xl:pe-[103px] pe-2 sm:pe-5 md:pe-[45px] lg:pe-[80px]">
      <div className="xl:mb-[43px] mb-3 sm:mb-6 md:mb-8 lg:mb-9">
        <Image src={modalObj.icon} height={56} width={56} alt="To do icons" />
      </div>
      <h2 className="font-semibold text-lg xl:mb-[29px] mb-2 sm:mb-4 md:mb-5 lg:mb-6 text-start">
        {modalObj.header}
      </h2>
      <p className="text-xl text-[#444444] font-normal xl:mb-[29px] mb-2 sm:mb-4 md:mb-5 lg:mb-6 text-start">
        {modalObj.content}
      </p>
      <div className="flex justify-start">
        <LinkBtn href="/contact" text="Contact Us" />
      </div>
    </div>
  );
}
