import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className="navbar">
        <Link href="/">
          <Image
            src="/asset/nova_logo.png"
            width={88}
            height={84}
            alt="paymee logo"
          />
        </Link>
        <ul>
          <Link href="/">
            <li className="label-3_medium text-warning500">Home</li>
          </Link>
          <Link href="/about">
            <li className="label-3_medium">About</li>
          </Link>
          <Link href="/service">
            <li className="label-3_medium">Services</li>
          </Link>
          <Link href="/blog">
            <li className="label-3_medium">Blog</li>
          </Link>
        </ul>
        <div>
          <Link href="/contact">
            <h1
              className="label-2_medium navbar_outline"
              style={{ backgroundColor: "#4158EF", color: "#ffffff" }}
            >
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
            <Link href="/">
              <li className="label-3_medium mb-2">Home</li>
            </Link>
            <Link href="/about">
              <li className="label-3_medium mb-2">About</li>
            </Link>
            <Link href="/service">
              <li className="label-3_medium mb-2">Services</li>
            </Link>
            <Link href="/blog">
              <li className="label-3_medium mb-2">Blog</li>
            </Link>
            <Link href="/contact">
              <li className="label-3_medium mb-2" style={{ color: "#075134" }}>
                Contact Us
              </li>
            </Link>
          </ul>
        )}
      </div>
    </>
  );
}
