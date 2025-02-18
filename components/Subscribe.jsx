import Button from "./Button";

export default function Subscribe() {
  return (
    <div style={{ background: "#030423" }} className="subscribe-container">
      <div>
        <h2 className="font-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-1 text-[#FEFCFC]">
          NEWSLETTER
        </h2>
        <p className="text-normal md:text-base text-sm text-white md:mb-8 mb-4">
          Subscribe to all our news letter
        </p>
        <div style={{ maxWidth: "662px" }}>
          <form className=" lg:flex lg:border-2 rounded-md p-2 lg:bg-white">
            <input
              type="email"
              placeholder="Enter address"
              className="p-3 mb-3 lg:mb-0 border-2 rounded-md lg:border-0 w-full"
            />
            <Button btnText="Subscribe" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
