import Image from "next/image";
import Link from "next/link";
import SocialPage from "./SocialPage";
import SmoothScroll from "./Scroll";
import { ROUTES } from "@/contants/ROUTES";
import React, { useRef } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-container text-[#1F1F1F]">
      <div className="footer-grid justify-between gap-10">
        <div className="w-full footer-flex_1">
          <div className="mb-[18px]">
            {/* <Image
              src="/asset/nov-logo.png"
              width={136}
              height={81}
              alt="paymee logo"
            /> */}
            <img
              src="/asset/nov-logo-new.png"
              width={80}
              alt="Novasphere logo"
            />
          </div>
          <p className="text-base font-normal">(+234)80945678</p>
          <h6 className="text-base font-normal">
            4a Gbade Adeleke Street , Unity Estate , Lagos State
          </h6>
          <p className="text-base font-normal">hello@novasphereltd.com</p>
        </div>
        <div className="w-full footer-flex_2">
          <div>
            <h1 className="font-semibold text-[22px] mb-[18px] text-warning600">
              Company
            </h1>
            <Link href={ROUTES.ABOUT}>
              <p className="text-base font-normal mb-2">About us</p>
            </Link>
            <SmoothScroll targetId="ourWork">
              <p className="text-base font-normal mb-2">Our Work</p>
            </SmoothScroll>
            <Link href={ROUTES.BLOG}>
              <p className="text-base font-normal mb-2">Blog</p>
            </Link>
          </div>
          <div className="w-full">
            <h1 className="font-semibold text-[22px] mb-[18px] text-warning600">
              Services
            </h1>
            <ul>
              <li className="cursor-pointer">
                <SmoothScroll targetId="todo">
                  <p className="text-base font-normal mb-2">UI/UX Design</p>
                </SmoothScroll>
              </li>
              <li className="cursor-pointer">
                <SmoothScroll targetId="todo">
                  <p className="text-base font-normal mb-2">
                    Digital Marketing
                  </p>
                </SmoothScroll>
              </li>
              <li className="cursor-pointer">
                <SmoothScroll targetId="todo">
                  <p className="text-base font-normal mb-2">
                    Web Development and design
                  </p>{" "}
                </SmoothScroll>
              </li>
              <li className="cursor-pointer">
                <SmoothScroll targetId="todo">
                  <p className="text-base font-normal mb-2">
                    Mobile App development
                  </p>
                </SmoothScroll>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-[22px] mb-[18px] text-warning600">
              Legal
            </h1>
            <Link href="#">
              <p className="text-base font-normal mb-2">Terms of services</p>
            </Link>
            <Link href="#">
              <p className="text-base font-normal mb-2">Policy</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
        <SocialPage color="#000000" />
      </div>
      <p className="text-sm text-center xl:mt-[107px] mt-5 sm:mt-7 md:mt-10 lg:mt-[70px]">
        <span
          className="rounded-full px-1 text-center me-1"
          style={{ border: "1px solid" }}
        >
          c
        </span>
        {currentYear} Novasphere-All Right Reserved
      </p>
    </div>
  );
}
