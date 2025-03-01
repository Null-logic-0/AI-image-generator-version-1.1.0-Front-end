import { twMerge } from "tailwind-merge";

function Container({ title, text, icon, className }) {
  return (
    <div
      className="bg-[#0D0D16] shadow-md shadow-[#CAFF00] 
        border-2 border-[#20221C] max-w-[400px] w-full p-4 flex flex-col gap-4 justify-center rounded-md h-[200px] "
    >
      <p
        className={twMerge(
          "border-2 border-[#20221C] p-2 w-full  rounded-md flex items-center justify-center text-[#CAFF00]",
          className
        )}
      >
        {icon}
      </p>
      <h3>{title}</h3>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
}

export default Container;
