export default function Button({ btnText, type }) {
  return (
    <div className="flex justify-center">
      <button type={type} className="btn-nova_bg label-2_medium">
        {btnText}
      </button>
    </div>
  );
}
