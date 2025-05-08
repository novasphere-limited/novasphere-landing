import Image from "next/image";
import Link from "next/link";
export default function BlogSlide({ data }) {
  const formatDate = (isoString) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(new Date(isoString));
  };
  const truncateHTML = (html, maxLength) => {
    const text = html.replace(/<[^>]*>/g, "");
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <div className="xl:mb-[120px] md:mb-[50px] mb-8">
      <div className="xl:mx-[100px] lg:mx-[70px] md:mx-[35px] sm:mx-[20px] mx-3">
        <h3 className="flex items-center gap-2 xl:text-5xl text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold xl:mb-[42px] md:mb-[32px] mb-[20px]">
          Recent news at Novasphere
        </h3>
        <div className="md:flex bg-white rounded-lg justify-center items-center">
          <div className="w-full md:h-[332px] overflow-hidden rounded-lg h-[214px]">
            <Image
              alt="Nova slider image"
              src={
                data?.fileUrl ||
                "https://res.cloudinary.com/dstqfrcxx/image/upload/v1713356910/PayyMe/Article_Figure_Link_linkedin-sales-solutions-wS73LE0GnKs-unsplash.jpg_zrubau.png"
              }
              width={473}
              height={332}
              className="rounded-lg w-full"
              loading="lazy"
              objectFit="contain"
            />
          </div>
          <div className="rounded-lg p-5 w-full py-6">
            <h6 className="text-xs font-normal md:mb-4 mb-2">{data?.tag}</h6>
            <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-base font-semibold md:mb-4 mb-2">
              {data?.title}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: truncateHTML(data?.content || "", 100),
              }}
              className="sm:text-base text-sm md:mb-6 mb-4 font-normal"
            />
            <div className="flex items-center gap-4">
              <div
                style={{ height: "44px", width: "44px" }}
                className="rounded-full bg-[#D9D9D9]"
              >
                <Image
                  src="/asset/nova-slider-avatar.png"
                  alt="Testimonial person profile"
                  width={44}
                  height={44}
                />
              </div>
              <div>
                <h4 className="text-[#1F1F1F] font-medium text-xs">
                  {data?.user || "ALTHEA STORM"}
                </h4>
                <p className="text-[#444444] text-sm mb-2">
                  {formatDate(data?.created_date || "2025-01-12T10:15:13.194Z")}
                </p>
              </div>
            </div>
            <Link
              className="text-2_bold flex gap-2 items-center mt-auto"
              href={`/blog/${data?.id}`}
            >
              <p className="text-warning600 font-medium text-base font-rope">
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
      </div>
    </div>
  );
}
