import Image from "next/image";
import Link from "next/link";

export default function ModalContent({ modalObj }) {
  return (
    <div className="xl:ps-[78px] ps-2 sm:ps-5 md:ps-[38px] lg:ps-[52px] xl:pb-[111px] pb-3 sm:pb-6 md:pb-[38px] lg:pb-[70px] xl:pt-[111px] pt-4 sm:pt-7 md:pt-10 lg-pt-[70px] xl:pe-[103px] pe-2 sm:pe-5 md:pe-[45px] lg:pe-[80px]">
      <div className="xl:mb-8 mb-3 sm:mb-4 md:mb-5 lg:mb-7">
        <Image src={modalObj.icon} height={56} width={56} alt="To do icons" />
      </div>
      <h2 className="font-semibold text-lg xl:mb-6 mb-2 sm:mb-4 md:mb-5 lg:mb-6 text-start">
        {modalObj.header}
      </h2>
      <p className="text-xl text-[#444444] font-normal xl:mb-[154px] lg:mb-[124px] mb-5 sm:mb-10 md:mb-[84px] text-start">
        {modalObj.content}
      </p>
      <Link href="/contact">
        <button className="md:text-2xl text-xl font-medium md:px-[48px] md:py-[10px] sm:px-[30px] px-3 py-3 bg-warning600 text-white rounded-md sm:w-auto w-full md:flex justify-start">
          Contact Us
        </button>
      </Link>
    </div>
  );
}
