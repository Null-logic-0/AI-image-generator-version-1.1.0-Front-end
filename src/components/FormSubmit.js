"use client";
import { useFormStatus } from "react-dom";
import Button from "./Button.js";
import SpinnerMini from "./SpinnerMini.js";

function FormSubmit({ children }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
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
