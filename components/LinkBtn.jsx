import Link from "next/link";

export default function LinkBtn({ href, text }) {
  return (
    <>
      <Link href={href}>
        <button className="md:text-2xl text-xl font-medium md:px-[48px] md:py-[10px] sm:px-[30px] px-3 py-3 bg-warning600 hover:bg-[#1f76d3] hover:shadow-md transition-all duration-300 ease-in-out text-white rounded-md sm:w-[431px] w-full">
          {text}
        </button>
      </Link>
    </>
  );
}
