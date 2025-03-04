"use client";
import { useEffect, useState } from "react";

function ValidationError({ error }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  if (!isVisible) return null;
  return (
    <div className="fixed top-4 group p-4 text-white rounded-md  bg-red-500 shadow-lg w-full max-w-[300px] mx-4">
      <span>{error}</span>
    </div>
  );
}

export default ValidationError;
