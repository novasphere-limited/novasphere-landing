import Link from "next/link";
import Button from "./Button";

export default function StartProject() {
  return (
    <div className="main-container text-center">
      <h2 className="header-2_bold mb-2 main-container">
        Let&rsquo;s get your project started
      </h2>
      <h6 className="label-2_regular mb-10">
        iincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud
      </h6>
      <Link href="/">
        <Button btnText="Get started" />
      </Link>
    </div>
  );
}
