import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="main-container margin-spec">
      <div className="relative">
        <div className="my-4 flex justify-end">
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1712331997/5964BA6D-861F-4229-A4AE-E06EA4226436_lvdony.png"
            alt="Novasphere hero picture"
            width={781}
            height={590}
            className="rounded-lg"
          />
        </div>
        <div
          className="rounded-md shadow-lg p-5 about-abs pb-10"
          style={{ background: "#fff" }}
        >
          <h5 className="text-3xl font-semibold mb-3 text-warning600">
            About Us
          </h5>
          <p className="text-base">
            At Novasphere, we are passionate about harnessing the power of
            technology to propel businesses forward. As a company we specialize
            in software development, mobile app development, UI/UX design, and
            digital marketing strategies, we pride ourselves on delivering
            innovative solutions that helps visionary entrepreneurs launch their
            ground-breaking ideas.
          </p>
        </div>
      </div>
    </div>
  );
}
