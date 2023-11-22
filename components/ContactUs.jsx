import Image from "next/image";
import Button from "./Button";

export default function ContactUs() {
  return (
    <div className="main-container flex gap-10">
      <div className="w-full">
        <h1 className="header-1_medium">Hello,</h1>
        <h5 className="label-2_regular mb-5">
          Send a message, Let&rsquo;s talk about your project
        </h5>
        <form className="">
          <label className="text-2_regular">Full Name</label>
          <input
            type="text"
            placeholder=""
            className="p-2 w-full border-b-2 mb-10"
          />
          <label className="text-2_regular">Email Address</label>
          <input
            type="email"
            placeholder=""
            className="p-2 w-full border-b-2 mb-10"
          />
          <label className="text-2_regular">Your message</label>
          <input
            type="text"
            placeholder=""
            className="p-2 w-full border-b-2 mb-10"
          />
          <div className="flex justify-center mt-5">
            <Button btnText="Submit" type="submit" />
          </div>
        </form>
      </div>
      <div className="w-full">
        <Image
          src="/asset/nova-contact_img.png"
          alt="Novasphere contact picture"
          width={593}
          height={752}
        />
      </div>
    </div>
  );
}
