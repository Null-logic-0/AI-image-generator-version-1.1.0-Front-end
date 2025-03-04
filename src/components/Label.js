import { twMerge } from "tailwind-merge";

function Label({ children, className, ...props }) {
  return (
    <label
      {...props}
      className={twMerge(
        "text-stone-50 font-bold mb-1 text-left text-[10px] uppercase",
        className
      )}
    >
      {children}
    </label>
  );
}

export default Label;
