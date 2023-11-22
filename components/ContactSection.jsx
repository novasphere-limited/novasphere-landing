import Link from "next/link";
import Button from "./Button";

export default function ContactSection() {
  return (
    <div className="main-container">
      <h2 className="header-2_bold mb-3 text-center">
        Let&rsquo;t get your project started
      </h2>
      <h6 className="label-2_regular mb-5 text-center">
        iincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud
      </h6>
      <Link href="/contact" className="flex justify-center">
        <Button btnText="Contact Us" type="submit" />
      </Link>
    </div>
  );
}
