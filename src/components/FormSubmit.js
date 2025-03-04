"use client";
import { useFormStatus } from "react-dom";
import Button from "./Button.js";
import SpinnerMini from "./SpinnerMini.js";
import { twMerge } from "tailwind-merge";

function FormSubmit({ children, className }) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={twMerge("px-2", className)}
    >
      {pending ? (
        <span className="flex justify-center items-center gap-2">
          {children}
          <SpinnerMini />
        </span>
      ) : (
        children
      )}
    </Button>
  );
}

export default FormSubmit;
