import Image from "next/image";

export default function Ceo() {
  return (
    <div className="main-container margin-spec xl:mx-[120px] lg:mx-[70px] md:mx-[35px] sm:mx-[20px] mx-3">
      <div className="md:flex mt-5 gap-10 items-center relative">
        <div className="w-full">
          <Image
            src="https://res.cloudinary.com/dstqfrcxx/image/upload/v1712331990/92979534-4F9D-44C4-89A3-48DAE004875B_in5ija.png"
            alt="Info picture"
            width={453}
            height={455}
            className="rounded-lg"
          />
        </div>
        <div
          className="rounded-md shadow-lg p-5 w-full ceo-abs pb-10"
          style={{ background: "#fff" }}
        >
          <h2 className="text-3xl my-4">Meet the CEO</h2>
          <p className="text-base font-normal mb-1">
            Ahmed,serves as the Co-Founder & CEO of Novasphere Technology
            Solution Ltd. In his role, Ahmed not only leads the Executive
            Leadership Team but also spearheads the company's overarching
            direction and strategy.
            <br /> <br /> Driven by a deep-seated passion for leveraging
            technology to enhance customer experiences throughout Africa, Ahmed
            is committed to ensuring that Novasphere stands at the forefront of
            innovative solutions. With a keen focus on building impactful
            technology solutions, Ahmed's leadership ensures that Novasphere
            remains dedicated to its mission of positively transforming the
            African market landscape through cutting-edge advancements in
            customer service and technology.
          </p>
        </div>
      </div>
    </div>
  );
}
