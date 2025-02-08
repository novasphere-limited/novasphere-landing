export default function Button({ btnText, type }) {
  return (
    <div className="flex justify-center">
      <button
        type={type}
        className="btn-nova_bg transition-all hover:bg-[#1f76d3] duration-300 ease-in-out hover:shadow-md label-2_medium"
      >
        {btnText}
      </button>
    </div>
  );
}
