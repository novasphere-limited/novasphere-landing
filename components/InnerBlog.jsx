import { useState } from "react";
import SocialMedia from "./SocialPage";
import Image from "next/image";
import Link from "next/link";

export default function InnerBlog() {
  const [curIndex, setCurIndex] = useState(0);

  const options = [
    {
      id: 1,
      text: "Blog",
    },
    {
      id: 2,
      text: "Press releases",
    },
    {
      id: 3,
      text: "Newsroom",
    },
    {
      id: 4,
      text: "FAQ's",
    },
  ];
  const handleBtnChange = (i) => {
    setCurIndex(i);
  };

  return (
    <div className="mb-[120px] main-container">
      <div
        style={{ borderBottom: "2px solid #001F1F14" }}
        className="pb-1 flex justify-center lg:mx-[80px] mx-3 sm:mx-6 md:mx-9"
      >
        {options.map((option, index) => (
          <button
            key={option.id}
            className={`${
              index == curIndex ? "text-warning600 border-b-2-warning600" : ""
            } py-3 px-4 font-semibold text-sm`}
            onClick={() => handleBtnChange(index)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <h4 className="text-xs text-warning600 my-[37.7px] bg-[#D6E9FEE3] p-1">
          ANNOUNCEMENTS
        </h4>
      </div>
      <div className="flex justify-center text-center mb-4">
        <h1
          className="xl:text-[50px] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium"
          style={{ maxWidth: "900px" }}
        >
          An Update on Q1 2024 Organizational Changes
        </h1>
      </div>
      <h6 className="text-[#1F1F1F] text-center mb-[44px]">06 April, 2024</h6>
      <div className="xl:mx-[120px] lg:mx-[70px] md:mx-[35px] sm:mx-[20px] mx-3">
        <div className="flex justify-center mb-5 h-[565px]">
          <Image
            alt="Inner blog image"
            src="/asset/nova-innerblog-img.png"
            height={565}
            width={1032}
            className=" w-full"
            loading="lazy"
          />
        </div>
        <div className="grid-inner_blog gap-4">
          <div>
            <div className="flex items-center xl:gap-4 lg:gap-3 md:gap-2 gap-1 mb-[52px]">
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
                <h4 className="text-[#1F1F1F] font-semibold">ALTHEA STORM</h4>
                <p className="text-[#444444]">Wiza Team</p>
              </div>
            </div>
            <p className="text-base font-normal mb-3">Share this article</p>
            <SocialMedia />
          </div>
          <div>
            <h6 className="text-lg font-normal italic mb-8">
              Earlier today, Chief Executive Officer Ham Serunjogi shared the
              following note on the Company’s organizational changes with all
              employees.
            </h6>
            <p className="text-base font-normal mb-4">Hey everyone</p>
            <div className="text-[#696969] mb-[62px]">
              <p>
                In the fast-paced world of technology, staying abreast of the
                latest trends and developments is not just an option; it&apos;s
                a necessity. From ground-breaking innovations to transformative
                disruptions, the tech industry continues to reshape our lives,
                economies, and societies at an unprecedented pace. In this
                article, we&apos;ll delve into the dynamic realm of technology,
                exploring its current landscape and the key trends shaping its
                future trajectory.
              </p>
              <br />
              <p>
                In the fast-paced world of technology, staying abreast of the
                latest trends and developments is not just an option; it&apos;s
                a necessity. From ground-breaking innovations to transformative
                disruptions, the tech industry continues to reshape our lives,
                economies, and societies at an unprecedented pace. In this
                article, we&apos;ll delve into the dynamic realm of technology,
                exploring its current landscape and the key trends shaping its
                future trajectory.
              </p>
              <br />
              <p>
                In the fast-paced world of technology, staying abreast of the
                latest trends and developments is not just an option; it&apos;s
                a necessity. From ground-breaking innovations to transformative
                disruptions, the tech industry continues to reshape our lives,
                economies, and societies at an unprecedented pace. In this
                article, we&apos;ll delve into the dynamic realm of technology,
                exploring its current landscape and the key trends shaping its
                future trajectory.
              </p>
            </div>
            <div className="my-6 flex justify-center">
              <Image
                src="/asset/nova-innerblog-vid.png"
                alt="Inner blog video"
                height={329}
                width={336}
                loading="lazy"
              />
            </div>
            <p>
              In the fast-paced world of technology, staying abreast of the
              latest trends and developments is not just an option; it&apos;s a
              necessity. From ground-breaking innovations to transformative
              disruptions, the tech industry continues to reshape our lives,
              economies, and societies at an unprecedented pace. In this
              article, we&apos;ll delve into the dynamic realm of technology,
              exploring its current landscape and the key trends shaping its
              future trajectory.
            </p>

            <p className="text-base font-medium mb-8">Read more:</p>
            <ul>
              <Link href="#" className="underline text-warning600">
                <p>
                  In the fast-paced world of technology, staying abreast of the
                  latest trends and developments
                </p>
              </Link>
              <Link href="#" className="underline text-warning600">
                <p>
                  In the fast-paced world of technology, staying abreast of the
                  latest trends and developments
                </p>
              </Link>
              <Link href="#" className="underline text-warning600">
                <p>
                  In the fast-paced world of technology, staying abreast of the
                  latest trends and developments
                </p>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
