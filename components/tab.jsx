import Link from "next/link";
import { useRouter } from "next/router";

export default function Tab() {
  const router = useRouter();

  const options = [
    {
      id: 1,
      text: "Blog",
      href: "/blog",
    },
    {
      id: 2,
      text: "Featured-In",
      href: "/featured-in",
    },
  ];
  return (
    <div
      style={{ borderBottom: "2px solid #001F1F14" }}
      className="pb flex justify-center xl:mx-[80px] sm:mx-[32px] md:mx-[42px] lg:mx-[54px] mx-[23px] mt-8 lg:mb-[68px] sm:mb-[40px] mb-6"
    >
      {options.map((option, index) => (
        <Link
          key={option.id}
          href={option.href}
          className={`${
            router.pathname.includes(option.href)
              ? "text-warning600 border-b-2-warning600"
              : ""
          } py-3 px-4 font-semibold text-sm`}
        >
          {option.text}
        </Link>
      ))}
    </div>
  );
}
