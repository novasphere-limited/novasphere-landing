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
      <div className="navbar bg-[#ECF3F54D]">
        <Link href="/">
          <Image
            src="/asset/nova_logo.png"
            width={88}
            height={84}
            alt="paymee logo"
          />
        </Link>
        <ul>
          {NavList.map((nav) => (
            <Link key={nav.id} href={nav.route} className="relative">
              <li
                className={`label-3_medium ${
                  router.pathname === nav.route ? "active-link" : ""
                }`}
              >
                {nav.name}
              </li>
              <div
                className={`${
                  router.pathname === nav.route ? "active-link_1" : ""
                }`}
              ></div>
            </Link>
          ))}
        </ul>
        <div>
          <Link href={ROUTES.CONTACT}>
            <h1 className="label-2_medium navbar_outline bg-warning600 text-white">
              Contact Us
            </h1>
          </Link>
        </div>
      </div>
      <div className="navbar-mobile">
        <div className="flex justify-between items-center">
          <Link href="/" className="mb-2">
            <Image
              src="/asset/nova_logo.png"
              width={100}
              height={43}
              alt="paymee logo"
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
                <li
                  className={`label-3_medium mb-2 ${
                    router.pathname === nav.route ? "active-link" : ""
                  }`}
                >
                  {nav.name}
                </li>
              </Link>
            ))}
            <Link href={ROUTES.CONTACT}>
              <h1 className="label-3_medium navbar_outline bg-warning600 text-white w-1/2">
                Contact Us
              </h1>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
}
