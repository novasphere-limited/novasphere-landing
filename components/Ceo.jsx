import Image from "next/image";
import AnimatedInView from "./Animate";

export default function Ceo() {
  return (
    <AnimatedInView
      threshold={0.5}
      overflowHidden
      variants={{
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 },
      }}
    >
      <div className="ceo-spc xl:mb-[184px] lg:mb-[134px] md:mb-[72px] mb-4 sm:mb-10">
        <div className="md:flex sm:mt-5 mt-1 items-center justify-center relative">
          <div className="ceo-img flex md:block justify-center md:h-[455px] h-auto ">
            <Image
              src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1712331990/92979534-4F9D-44C4-89A3-48DAE004875B_in5ija.png"
              alt="Info picture"
              width={453}
              height={455}
              className="rounded-lg w-auto lg:w-[453px]"
              loading="lazy"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            className="rounded-md shadow-lg py-8 px-6 w-full ceo-abs"
            style={{ background: "#fff" }}
          >
            <h2 className="text-[34px] font-semibold mv-2 text-[#1F1F1F]">
              Meet the CEO
            </h2>
            <p className="text-base font-normal mb-1">
              Ahmed,serves as the Co-Founder & CEO of Novasphere Technology
              Solution Ltd. In his role, Ahmed not only leads the Executive
              Leadership Team but also spearheads the company&apos;s overarching
              direction and strategy.
              <br /> <br /> Driven by a deep-seated passion for leveraging
              technology to enhance customer experiences throughout Africa,
              Ahmed is committed to ensuring that Novasphere stands at the
              forefront of innovative solutions. With a keen focus on building
              impactful technology solutions, Ahmed&apos;s leadership ensures
              that Novasphere remains dedicated to its mission of positively
              transforming the African market landscape through cutting-edge
              advancements in customer service and technology.
            </p>
          </div>

          <div
            className="rounded-md shadow-lg p-5 ceo-abs-1 pb-10"
            style={{ background: "#fff" }}
          >
            <h2 className="text-3xl lg:my-4 my-1 sm:my-2 md:my-3">
              Meet the CEO
            </h2>
            <p className="text-base font-normal mb-1">
              Ahmed,serves as the Co-Founder & CEO of Novasphere Technology
              Solution Ltd. In his role, Ahmed not only leads the Executive
              Leadership Team but also spearheads the company&apos;s overarching
              direction and strategy.
              <br /> <br /> Driven by a deep-seated passion for leveraging
              technology to enhance customer experiences throughout Africa,
              Ahmed is committed to ensuring that Novasphere stands at the
              forefront of innovative solutions. With a keen focus on building
              impactful technology solutions, Ahmed&apos;s leadership ensures
              that Novasphere remains dedicated to its mission of positively
              transforming the African market landscape through cutting-edge
              advancements in customer service and technology.
            </p>
          </div>

          <div className="ceo-abs-1_1">
            <div
              className="rounded-md shadow-lg p-3 pb-10"
              style={{ background: "#fff" }}
            >
              <h2 className="text-3xl  my-1">Meet the CEO</h2>
              <p className="text-base font-normal mb-1">
                Ahmed,serves as the Co-Founder & CEO of Novasphere Technology
                Solution Ltd. In his role, Ahmed not only leads the Executive
                Leadership Team but also spearheads the company&apos;s
                overarching direction and strategy.
                <br /> <br /> Driven by a deep-seated passion for leveraging
                technology to enhance customer experiences throughout Africa,
                Ahmed is committed to ensuring that Novasphere stands at the
                forefront of innovative solutions. With a keen focus on building
                impactful technology solutions, Ahmed&apos;s leadership ensures
                that Novasphere remains dedicated to its mission of positively
                transforming the African market landscape through cutting-edge
                advancements in customer service and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedInView>
  );
}
