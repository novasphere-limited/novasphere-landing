import Image from "next/image";
import Link from "next/link";
import SocialPage from "./SocialPage";
import { ROUTES } from "@/contants/ROUTES";

export default function Footer() {
  return (
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
          <p className="label-3_regular">support@payyME.com</p>
        </div>
        <div className="w-full footer-flex_2">
          <div>
            <h1 className="label-1_medium mb-4 text-warning600">Company</h1>

            <Link href={ROUTES.ABOUT}>
              <p className="label-3_regular mb-2">About us</p>
            </Link>
            <Link href={ROUTES.ABOUT}>
              <p className="label-3_regular mb-2">Our Work</p>
            </Link>
            <Link href="#">
              <p className="label-3_regular mb-2">Blog</p>
            </Link>
          </div>
          <div className="w-full">
            <h1 className="label-1_medium mb-4 text-warning600">Services</h1>
            <Link href="#">
              <p className="label-3_regular mb-2">UI/UX Design</p>
            </Link>
            <Link href="#">
              <p className="label-3_regular mb-2">Digital Marketing</p>
            </Link>
            <Link href="#">
              <p className="label-3_regular mb-2">Web Development and design</p>
            </Link>
            <Link href="#">
              <p className="label-3_regular mb-2">Mobile App development</p>
            </Link>
          </div>
          <div>
            <h1 className="label-1_medium mb-4 text-warning600">Legal</h1>
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
        2023 PayME-All Right Reserved
      </p>
    </div>
  );
}
