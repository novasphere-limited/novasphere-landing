import Image from "next/image";
import Link from "next/link";
import SocialPage from "./SocialPage";
import SmoothScroll from "./Scroll";
import { ROUTES } from "@/contants/ROUTES";
import React, { useRef } from "react";
import AnimatedInView from "./Animate";

export default function Footer() {
  return (
    <AnimatedInView
      threshold={0.5}
      overflowHidden
      variants={{
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      }}
    >
      <div className="footer-container">
        <div className="footer-grid justify-between pb-8 footer-container_inner gap-10">
          <div className="w-full footer-flex_1">
            <div>
              <Image
                src="/asset/nova_logo.png"
                width={88}
                height={84}
                alt="Novasphere logo"
              />
            </div>
            <p className="label-3_regular">(+234)80945678</p>
            <h6 className="label-3_regular">
              4a Gbade Adeleke Street , Unity Estate , Lagos State
            </h6>
            <p className="label-3_regular">hello@novasphereltd.com</p>
          </div>
          <div className="w-full footer-flex_2">
            <div>
              <h1 className="text-semibold text-[22px] mb-4 text-warning600">
                Company
              </h1>
              <Link href={ROUTES.ABOUT}>
                <p className="label-3_regular mb-2">About us</p>
              </Link>
              <SmoothScroll targetId="ourWork">
                <p className="label-3_regular mb-2">Our Work</p>
              </SmoothScroll>
              <Link href={ROUTES.BLOG}>
                <p className="label-3_regular mb-2">Blog</p>
              </Link>
            </div>
            <div className="w-full">
              <h1 className="text-semibold text-[22px] mb-4 text-warning600">
                Services
              </h1>
              <ul>
                <li className="cursor-pointer">
                  <SmoothScroll targetId="todo">
                    <p className="label-3_regular mb-2">UI/UX Design</p>
                  </SmoothScroll>
                </li>
                <li className="cursor-pointer">
                  <SmoothScroll targetId="todo">
                    <p className="label-3_regular mb-2">Digital Marketing</p>
                  </SmoothScroll>
                </li>
                <li className="cursor-pointer">
                  <SmoothScroll targetId="todo">
                    <p className="label-3_regular mb-2">
                      Web Development and design
                    </p>{" "}
                  </SmoothScroll>
                </li>
                <li className="cursor-pointer">
                  <SmoothScroll targetId="todo">
                    <p className="label-3_regular mb-2">
                      Mobile App development
                    </p>
                  </SmoothScroll>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-semibold text-[22px] mb-4 text-warning600">
                Legal
              </h1>
              <Link href="#">
                <p className="label-3_regular mb-2">Terms of services</p>
              </Link>
              <Link href="#">
                <p className="label-3_regular mb-2">Policy</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-container_inner">
          <SocialPage color="#000000" />
        </div>
        <p className="text-2_regular text-center mt-[90px]">
          <span
            className="rounded-full px-1 py-0 text-center me-1"
            style={{ border: "1px solid" }}
          >
            c
          </span>
          2023 PayyMe-All Right Reserved
        </p>
      </div>
    </AnimatedInView>
  );
}
