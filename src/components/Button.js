import { twMerge } from "tailwind-merge";

function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-[#CAFF00] text-[#161615] text-sm font-semibold hover:bg-[#DFFF64] py-2 w-full rounded-full disabled:cursor-not-allowed cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
