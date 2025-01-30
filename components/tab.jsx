export default function Tab({ setTab, tab }) {
  const options = [
    {
      id: 1,
      text: "Blog",
      value: "blog",
    },
    {
      id: 2,
      text: "Featured-In",
      value: "featured-in",
    },
  ];
  return (
    <div
      style={{ borderBottom: "2px solid #001F1F14" }}
      className="pb flex justify-center xl:mx-[80px] sm:mx-[32px] md:mx-[42px] lg:mx-[54px] mx-[23px] mt-8 lg:mb-[68px] sm:mb-[40px] mb-6"
    >
      {options.map((option, index) => (
        <div
          key={option.id}
          className={`${
            tab === option.value ? "text-warning600 border-b-2-warning600" : ""
          } py-3 px-4 font-semibold text-sm cursor-pointer`}
          onClick={() => setTab(option.value)}
        >
          {option.text}
        </div>
      ))}
    </div>
  );
}
