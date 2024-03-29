import Link from "next/link";
import Button from "./Button";
import LinkBtn from "./LinkBtn";
import { ROUTES } from "@/contants/ROUTES";

export default function StartProject() {
  return (
    <div className="main-container text-center">
      <h2 className="header-2_bold mb-2 md:mt-8 sm:mt-5">
        Let&rsquo;s get your project started
      </h2>
      <div className="md:mb-8 sm:mb-5 mb-3">
        <LinkBtn href={ROUTES.CONTACT} text="Contact Us" />
      </div>
    </div>
  );
}
