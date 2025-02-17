import Image from "next/image";
import Link from "next/link";

export default function News({ data }) {
  const truncateHTML = (html, maxLength) => {
    const text = html.replace(/<[^>]*>/g, "");
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <div className="xl:mx-[143px] lg:mx-[90px] md:mx-10 sm:mx-7 mx-3">
      <div className="relative">
        <h2 className="flex items-center gap-1 font-semibold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-[22px] z-50">
          News at Novasphere
        </h2>
        <div className="w-[124px] h-[12px] absolute bottom-[-3px] left-0 bg-[#BADAFD] "></div>
      </div>
      <div
        className="grid grid-cols-1 justify-between mb-4 sm:grid-cols-2 lg:grid-cols-3"
        style={{ rowGap: "2.5rem" }}
      >
        {data?.map((news) => (
          <>
            <div className="w-100 p-4">
              <div className="mb-2 flex justify-center">
                <Image
                  src={
                    news?.fileUrl ||
                    "https://res.cloudinary.com/dstqfrcxx/image/upload/v1712336242/69167AEF-7DBD-4C08-8D0F-E18C31D87AE1_odut8b.png"
                  }
                  width={333}
                  height={188}
                  alt={news?.title}
                  className="rounded-[10px] w-full"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex">
                  <h4 className="text-xs text-warning600 font-medium mb-[22px] mt-[32px] bg-[#D6E9FEE3] p-1">
                    ANNOUNCEMENTS
                  </h4>
                </div>
                <h6 className="font-semibold text-xl mb-4 text-[#444444]">
                  {news?.title}
                </h6>
                <div
                  className="font-normal text-sm mb-[22px] text-[#444444]"
                  dangerouslySetInnerHTML={{
                    __html: truncateHTML(news?.content || "", 100),
                  }}
                />
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
