import Image from "next/image";

export default function Blog() {
  return (
    <div>
      <div className="blog-bg_image">
        <div className="pt-[44px] xl:pb-[92px] md:pb-[52px] pb-6">
          <h1 className="font-semibold xl:text-[48px] lg:text-[44px] text-[36px] mb-4 text-center">
            <span className="text-warning600">Novasphere</span> Newsroom
          </h1>
          <div className="flex justify-center">
            <p className="text-normal text-[22px] text-center w-[400px] mb-[42px]">
              The latest news, announcements from Novasphere
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="px-2 py-1 flex items-center rounded-sm "
              style={{ border: "1px solid #B4B4B4", maxWidth: "322px" }}
            >
              <div>
                <Image
                  height={20}
                  width={20}
                  alt="Search icon"
                  src="/favicon_io/nova-search-normal.svg"
                  className="me-2"
                />
              </div>
              <form className="w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border-none w-full bg-transparent"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
