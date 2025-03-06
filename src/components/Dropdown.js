"use client";

import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block w-30" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg p-2 text-center shadow-sm focus:outline-none  cursor-pointer"
      >
        <BsThreeDots className="text-2xl text-white" />
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-[#0D0D16] border-2 left-1  border-[#25232C] rounded-lg mt-1 shadow-lg max-h-40 overflow-auto">
          {options.map((option) => (
            <li
              key={option}
              className="p-2 hover:bg-[#CAFF00]/50  cursor-pointer hover:text-[#CAFF00]"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
