import Image from "next/image";

export default function Choose() {
  return (
    <div className="main-container">
      <h2 className="header-2_bold text-center mb-4">Why Choose Us</h2>
      <h6 className="text-2_regular mb-5 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </h6>
      <div className="grid-2_diff1 items-center">
        <div>
          <Image
            src="/asset/nova-choose_img.png"
            alt="Choose image"
            width={541}
            height={330}
            className="rounded-md w-full"
          />
        </div>
        <div>
          <h6 className="label-2_bold mb-3">Result Oriented</h6>
          <h6 className="label-2_regular mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </h6>
        </div>
      </div>
      <div className="grid-2_diff2 items-center">
        <div className="col-1">
          <h6 className="label-2_bold mb-3">Result Oriented</h6>
          <h6 className="label-2_regular mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </h6>
        </div>
        <div>
          <Image
            src="/asset/nova-choose_img.png"
            alt="Choose image"
            width={541}
            height={330}
            className="rounded-md w-full"
          />
        </div>
      </div>
      <div className="grid-2_diff1 items-center">
        <div>
          <Image
            src="/asset/nova-choose_img.png"
            alt="Choose image"
            width={541}
            height={330}
            className="rounded-md w-full"
          />
        </div>
        <div>
          <h6 className="label-2_bold mb-3">Result Oriented</h6>
          <h6 className="label-2_regular mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </h6>
        </div>
      </div>
    </div>
  );
}
