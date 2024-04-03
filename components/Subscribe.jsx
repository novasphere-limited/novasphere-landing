import Button from "./Button";

export default function Subscribe() {
  return (
    <div style={{ background: "#030423" }} className="subscribe-container">
      <div>
        <h2 className="font-medium text-3xl mb-3 text-[#FEFCFC]">NEWSLETTER</h2>
        <h6 className="text-normal text-base text-white mb-5">
          Subscribe to all our news letter
        </h6>
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
