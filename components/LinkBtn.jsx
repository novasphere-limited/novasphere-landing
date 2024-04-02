import Link from "next/link";

export default function LinkBtn({ href, text }) {
  return (
    <>
      <Link href={href}>
        <button className="label-2_medium my-5 md:px-[48px] md:py-[10px] px-5 py-3 bg-warning600 text-white rounded-md">
          {text}
        </button>
      </Link>
    </>
  );
}
