function Select({ children, name, defaultValue }) {
  return (
    <select
      id={name}
      name={name}
      defaultValue={defaultValue}
      className="p-2 rounded-md w-[5rem] bg-[#060610] border-2 border-[#25232C] text-white focus:border-[#CAFF00] focus:ring-2 focus:ring-[#CAFF00] focus:outline-none hover:border-[#CAFF00]"
    >
      {children}
    </select>
  );
}

export default Select;
