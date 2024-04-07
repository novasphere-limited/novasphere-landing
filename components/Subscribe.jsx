import AnimatedInView from "./Animate";
import Button from "./Button";

export default function Subscribe() {
  return (
    <AnimatedInView
      threshold={0.5}
      variants={{
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.7 },
      }}
    >
      <div style={{ background: "#030423" }} className="subscribe-container">
        <div>
          <h2 className="font-medium text-3xl mb-3 text-[#FEFCFC]">
            NEWSLETTER
          </h2>
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
    </AnimatedInView>
  );
}
