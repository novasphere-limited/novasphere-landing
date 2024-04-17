import { NewsList } from "@/contants";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  return (
    <div className="main-container xl:mx-[100px] lg:mx-[70px] md:mx-[35px] sm:mx-[20px] mx-3">
      <div className="relative">
        <h2 className="font-semibold text-3xl mb-[22px] z-50">
          News at Novasphere
        </h2>
        <div className="w-[124px] h-[12px] absolute bottom-[-3px] left-0 bg-[#BADAFD] "></div>
      </div>
      <div
        className="grid grid-cols-1 justify-between mb-4 sm:grid-cols-2 lg:grid-cols-3"
        style={{ rowGap: "2.5rem" }}
      >
        {NewsList.map((news) => (
          <>
            <div className="w-100 p-4">
              <div className="mb-2 flex justify-center">
                <Image
                  src={news.imgSrc}
                  width={333}
                  height={188}
                  alt={news.author}
                  className="rounded-[10px] w-full"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex">
                  <h4 className="text-xs text-warning600 mb-[22px] mt-[32px] bg-[#D6E9FEE3] p-1">
                    {news.title}
                  </h4>
                </div>
                <h6 className="font-semibold text-xl mb-4 text-[#444444]">
                  {news.header}
                </h6>
                <h6 className="font-normal text-sm mb-[22px] text-[#444444]">
                  {news.text}
                </h6>
                <Link
                  className="text-2_bold flex gap-2 items-center mt-auto"
                  href={`/blog/${news.id}`}
                >
                  <p className="text-warning500 font-medium text-base">
                    Read More
                  </p>
                  <Image
                    src="/favicon_io/arrow_up-purp.svg"
                    alt="Arrow icon"
                    width={12}
                    height={14}
                  />
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
