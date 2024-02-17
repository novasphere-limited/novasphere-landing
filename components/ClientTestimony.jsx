import TestimonySlider from "./ClientTestimonySlider";

export default function ClientTestimony() {
  const Arraylist = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <div className="main-container bg-[#5758EF08]">
      <h2 className="header-2_bold mb-4 text-center">
        What do our clients say about Us
      </h2>
      <div className="flex justify-center">
        <h6
          className="label-2_regular mb-4 text-center"
          style={{ maxWidth: "914px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </h6>
      </div>
      <div className="md:grid grid-cols-3 gap-4 hidden mb-5">
        <div className="rounded-lg p-5 bg-white">
          <p className="text-2_regular mb-5 border-b-2 pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud Lorem ipsum dolor sitLorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud
          </p>
          <div
            style={{ height: "38px", width: "38px" }}
            className="rounded-full bg-[#D9D9D9]"
          ></div>
        </div>
        <div className="rounded-lg p-5 bg-white">
          <p className="text-2_regular mb-5  border-b-2 pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud Lorem ipsum dolor sitLorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud
          </p>
          <div
            style={{ height: "38px", width: "38px" }}
            className="rounded-full bg-[#D9D9D9]"
          ></div>
        </div>
        <div className="rounded-lg p-5 bg-white">
          <p className="text-2_regular mb-5 border-b-2 pb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud Lorem ipsum dolor sitLorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud
          </p>
          <div
            style={{ height: "38px", width: "38px" }}
            className="rounded-full bg-[#D9D9D9]"
          ></div>
        </div>
      </div>
      <div className="block md:hidden mb-5">
        <TestimonySlider ArrayList={Arraylist} />
      </div>
    </div>
  );
}
