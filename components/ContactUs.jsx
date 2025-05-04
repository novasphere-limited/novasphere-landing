import { useContactForm } from "@/service/forms";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    message: "",
  });
  const { contactData, contactDataIsLoading, contactDataPayload } =
    useContactForm((res) => {
      toast.success("Form submitted successfully!");
      setFormData({
        fullName: "",
        emailAddress: "",
        message: "",
      });
    });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    contactDataPayload(formData);
  };

  return (
    <div className="main-container sm:flex justify-between items-center md:mt-[59px] mt-[45px] contact-gap xl:mb-[26.5rem] mb-[100px] md:mb-[180px] lg:mb-[250px]">
      <div className="w-full">
        <h1 className="font-normal text-[32px]">Hello,</h1>
        <p className="font-base mb-6">
          Send a message, Let&rsquo;s talk about your project
        </p>
        <form
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-b mb-[34px] bg-transparent border-[#D2D2D2] py-2 input-contact"
            value={formData?.fullName}
            onChange={(e) => handleChange(e)}
            name="fullName"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b border-[#D2D2D2] mb-[34px] bg-transparent py-2 input-contact"
            value={formData?.emailAddress}
            onChange={(e) => handleChange(e)}
            name="emailAddress"
            required
          />
          <input
            type="text"
            placeholder="Your Message"
            className="w-full border-b border-[#D2D2D2] mb-[34px] bg-transparent py-2 !px-2 input-contact"
            value={formData?.message}
            onChange={(e) => handleChange(e)}
            name="message"
            required
          />
          <div className=" lg:mt-[59px] mt-7">
            <button
              className="hover:bg-[#1f76d3] md:w-[300px] w-full text-white bg-[#3090F8] text-sm font-semibold py-[10px] rounded-lg"
              type={"submit"}
              disabled={contactDataIsLoading}
            >
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
