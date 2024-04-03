import Link from "next/link";

export default function LinkBtn({ href, text }) {
  return (
    <>
      <Link href={href}>
        <button className="md:text-2xl text-xl font-medium my-5 md:px-[48px] md:py-[10px] sm:px-[30px] px-3 py-3 bg-warning600 text-white rounded-md">
          {text}
        </button>
      </Link>
    </>
  );
}
