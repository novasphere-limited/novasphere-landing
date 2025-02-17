import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="main-container sm:flex justify-between items-center md:mt-[59px] mt-[45px] contact-gap xl:mb-[26.5rem] mb-[100px] md:mb-[180px] lg:mb-[250px]">
      <div className="w-full">
        <h1 className="font-normal text-[32px]">Hello,</h1>
        <p className="font-base mb-5">
          Send a message, Let&rsquo;s talk about your project
        </p>
        <form className="">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-b mb-[34px] bg-transparent border-[#D2D2D2] pb-2 input-contact"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b border-[#D2D2D2] mb-[34px] bg-transparent pb-2 input-contact"
          />
          <input
            type="text"
            placeholder="Your Message"
            className="w-full border-b border-[#D2D2D2] mb-[34px] bg-transparent pb-2 input-contact"
          />
          <div className=" lg:mt-[59px] mt-7">
            <button className="hover:bg-[#1f76d3] rounded-[4px] md:w-[300px] w-full text-white bg-[#3090F8] text-sm font-semibold py-[10px] rounded-sm">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="w-full flex md:justify-end justify-center mt-6 sm:mt-0">
        <Image
          src="/asset/abt-6.png"
          alt="Novasphere contact picture"
          width={593}
          height={632}
          className="rounded-[20px] w-full h-auto"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
