export default function Input({ label, placeholder, type = "text", value, onChange, className = "" }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="text-sm mb-1 text-gray-600">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}