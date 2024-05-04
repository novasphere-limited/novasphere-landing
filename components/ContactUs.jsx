import Image from "next/image";
import Button from "./Button";
import AnimatedInView from "./Animate";

export default function ContactUs() {
  return (
    <AnimatedInView
      threshold={0.5}
      overflowHidden
      variants={{
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
      }}
    >
      <div className="main-container sm:flex justify-between items-center md:my-[59px] my-[45px] contact-gap">
        <div className="w-full">
          <h1 className="font-normal text-[32px]">Hello,</h1>
          <p className="font-base mb-5">
            Send a message, Let&rsquo;s talk about your project
          </p>
          <form className="">
            <label className="text-sm text-[#8E8E8E]">Full Name</label>
            <input
              type="text"
              placeholder=""
              className="w-full border-b-2 mb-3 bg-[#e2e2e2] border-[#D2D2D2]"
            />
            <label className="text-sm text-[#8E8E8E]">Email Address</label>
            <input
              type="email"
              placeholder=""
              className="w-full border-b-2 border-[#D2D2D2] mb-3 bg-[#e2e2e2]"
            />
            <label className="text-sm text-[#8E8E8E] mb-2">Subject</label>
            <textarea
              placeholder="Your message"
              className="p-3 w-full mb-2 border-2 bg-[#e2e2e2] border-b-2 border-[#D2D2D2] lg:h-[200px] h-[100px]"
              style={{ maxHeight: "200px" }}
            ></textarea>

            <div className=" lg:mt-[59px] mt-7">
              <button className="md:w-[300px] w-full text-white bg-[#3090F8] text-sm font-semibold py-[10px] rounded-sm">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-full flex md:justify-end justify-center mt-6 sm:mt-0">
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1712341553/F690BF8D-E4DF-4E59-BDA1-2D89003BC9D6_nj0qr1.png"
            alt="Novasphere contact picture"
            width={593}
            height={632}
            className="rounded-[20px] w-full h-auto"
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </AnimatedInView>
  );
}
