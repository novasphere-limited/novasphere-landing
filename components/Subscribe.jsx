import Button from "./Button";

export default function Subscribe() {
  return (
    <div style={{ background: "#0304230F" }} className="subscribe-container">
      <div>
        <h2 className="header-2_bold mb-3 text-center">
          Don&rsquo;t want to miss out information
        </h2>
        <h6 className="label-2_regular mb-5 text-center">
          iincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud
        </h6>
        <form className=" lg:flex m-auto w-3/4 lg:border-2 rounded-md p-2">
          <input
            type="email"
            placeholder="Enter your email to subscribe to our daily news"
            className="p-3 w-full mb-3 lg:mb-0 border-2 rounded-md lg:border-0"
          />
          <Button btnText="Subscribe" type="submit" />
        </form>
      </div>
    </div>
  );
}
