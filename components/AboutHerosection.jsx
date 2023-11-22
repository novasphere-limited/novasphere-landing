import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function AboutHerosection() {
  return (
    <div className="main-container">
      <h1 className="header-1_bold mb-3 text-center">
        Experience the power to enjoy seemless
        <span className="text-warning500 ps-1">Digital</span> solutions
      </h1>
      <h6 className="header-4_regular mb-3 text-center">
        Transforming Your Online Presence for Success Transforming Your Online
        Presence
      </h6>
      <div className="relative">
        <div className="my-4">
          <Image
            src="/asset/nova-about-hero.png"
            alt="Novasphere hero picture"
            width={704}
            height={630}
            className="rounded-lg"
          />
        </div>
        <div
          className="rounded-md shadow-lg p-5 testimony-abs pb-10"
          style={{ background: "#fff" }}
        >
          <hc className="header-3_bold mb-3">
            We make clients satisfaction our top priority
          </hc>
          <p className="text-1_regular mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href="/">
            <Button btnText="Get started" />
          </Link>
        </div>
      </div>
    </div>
  );
}
