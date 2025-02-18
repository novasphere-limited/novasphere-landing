import { NavList } from "@/contants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { ROUTES } from "@/contants/ROUTES";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();

  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div
        className={`navbar hidden lg:flex items-center justify-between ${
          router.pathname === "/"
            ? "bg-image"
            : router.pathname === "/about"
            ? "bg-[#EEF8FF] backdrop-blur-md"
            : "bg-[#ECF3F54D]"
        } xl:px-[100px] py-[18px] lg:px-[75px] md:px-[50px] text-[#545353] backdrop-blur-md`}
        style={{ position: "fixed", top: "0", width: "100%", zIndex: "1000" }}
      >
        <Link href="/">
          <Image
            src="/asset/nov-logo.png"
            width={190}
            height={150}
            alt="paymee logo"
          />
        </Link>
        <ul>
          {NavList.map((nav) => (
            <Link key={nav.id} href={nav.route} className="relative">
              <h6
                className={`text-base hover:font-semibold transition-all duration-800 ease-in-out ${
                  router.pathname === nav.route
                    ? "active-link font-semibold"
                    : "font-normal"
                }`}
              >
                {nav.name}
              </h6>
              <div
                className={`${
                  router.pathname === nav.route ? "active-link_1" : ""
                }`}
              ></div>
            </Link>
          ))}
        </ul>
        <div className="bg-warning600 w-[187px] rounded-[4px]">
          <Link href={ROUTES.CONTACT}>
            <h1 className="text-xl font-medium navbar_outline bg-warning600 text-white hover:bg-[#1f76d3] transition-all duration-300 ease-in-out">
              Contact Us
            </h1>
          </Link>
        </div>
      </div>
      <div
        className={`navbar-mobile block lg:hidden backdrop-blur-md ${
          router.pathname === "/"
            ? "bg-image"
            : router.pathname === "/about"
            ? "bg-[#EEF8FF]"
            : "bg-[#ECF3F54D]"
        }`}
        style={{ position: "fixed", top: "0", width: "100%", zIndex: "1000" }}
      >
        <div className="flex justify-between items-center h-[73px]">
          <Link href="/" className="">
            <Image
              src="/asset/nov-logo.png"
              width={100}
              height={63}
              alt="paymee logo"
              style={{ height: "63px !important", objectFit: "cover" }}
            />
          </Link>
          <button onClick={handleNavbar}>
            <Image
              src="/favicon_io/hamburger.svg"
              width={28}
              height={20}
              alt="Menu logo"
            />
          </button>
        </div>
        {showNavbar && (
          <ul>
            {NavList.map((nav) => (
              <Link key={nav.id} href={nav.route} className="relative">
                <h6
                  className={`label-3_medium mb-2 hover:font-semibold ${
                    router.pathname === nav.route ? "active-link" : ""
                  }`}
                >
                  {nav.name}
                </h6>
              </Link>
            ))}
            <Link href={ROUTES.CONTACT}>
              <h1 className="label-3_medium navbar_outline bg-warning600 text-white w-1/2 transition-all duration-300 ease-in-out bg-[#1f76d3]">
                Contact Us
              </h1>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
}
