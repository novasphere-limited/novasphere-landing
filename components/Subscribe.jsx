import { useState } from "react";
import Button from "./Button";
import { toast } from "sonner";
import { useSubscribe } from "@/service/forms";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const { subscribeData, subscribeDataIsLoading, subscribeDataPayload } =
    useSubscribe((res) => {
      setEmail("");
      toast.success("Subscribed successfully!");
    });

  const handleSubmit = () => {
    const payload = {
      subscriberEmail: email,
      IsPayyme: false,
    };
    subscribeDataPayload(payload);
  };
  return (
    <div style={{ background: "#030423" }} className="subscribe-container">
      <div>
        <h2 className="font-medium xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl mb-1 text-[#FEFCFC]">
          NEWSLETTER
        </h2>
        <p className="text-normal md:text-base text-sm text-white md:mb-10 mb-4">
          Subscribe to all our news letter
        </p>
        <div style={{ maxWidth: "662px" }}>
          <form
            className=" lg:flex lg:border-2 rounded-md p-2 lg:bg-white"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              type="email"
              placeholder="Enter address"
              className="p-3 mb-3 lg:mb-0 border-2 rounded-md lg:border-0 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              btnText="Subscribe"
              type="submit"
              disabled={subscribeDataIsLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
