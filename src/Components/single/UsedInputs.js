export const Message = ({ label, placeholder }) => {
  return (
    <div className="text-sm w-full">
      <label className="text-border font-semibold">{label}</label>
      <textarea
        className="w-full h-40 mt-2 p-6 border bg-main border-border rounded-lg"
        placeholder={placeholder}></textarea>
    </div>
  );
};

export const Select = ({ label, options, onChange }) => {
  return (
    <>
      <label className="text-border font-semibold">{label}</label>
      <select
        className="w-full mt-2 px-6 py-4 text-text bg-main border  border-border rounded-lg "
        onChange={onChange}>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.title}
          </option>
        ))}
      </select>
    </>
  );
};
export const Input = ({ label, placeholder, type, bg }) => {
  return (
    <div className="text-sm w-full">
      <label className="text-border font-semibold">{label}</label>
      <input
        className={`w-full text-sm mt-2  p-4 border  border-border rounded text-white ${
           bg ?  "bg-main" : "bg-white"
        }`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
