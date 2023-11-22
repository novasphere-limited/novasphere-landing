import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function HeroSection() {
  return (
    <div className="text-center">
      <div className="main-container">
        <h1 className="header-1_bold mb-3">
          Experience the power to enjoy seemless
          <span className="text-warning500">Digital</span> solutions
        </h1>
        <h6 className="header-4_regular mb-3">
          Transforming Your Online Presence for Success Transforming Your Online
          Presence.
        </h6>
      </div>
      <Link href="/">
        <Button btnText="Get started" />
      </Link>
      <div className="flex justify-center my-4 landing-img_bg">
        <Image
          src="/asset/nova_bg.png"
          alt="Novasphere hero picture"
          width={871}
          height={611}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
