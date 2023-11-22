import Image from "next/image";

export default function Ceo() {
  return (
    <div className="main-container grid-2 items-center gap-5">
      <div className="w-full">
        <Image
          src="/asset/nova-about-hero.png"
          alt="Novasphere hero picture"
          width={704}
          height={630}
          className="rounded-md w-full"
        />
      </div>
      <div className="w-full">
        <h6 className="label-2_bold mb-2 text-center">Meet the CEO</h6>
        <p className="text-2_regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud
        </p>
      </div>
    </div>
  );
}
