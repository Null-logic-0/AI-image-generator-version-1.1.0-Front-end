import { twMerge } from "tailwind-merge";

function Container({ children, className }) {
  return (
    <div
      className={twMerge(
        "bg-[#0D0D16] shadow-md shadow-[#CAFF00] border-2 border-[#20221C]  w-full p-4 flex flex-col gap-4 justify-center rounded-md ",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
