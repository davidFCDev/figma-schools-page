import React from "react";

type ButtonProps = {
  text?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SpecialButton = ({ text }: ButtonProps) => {
  return (
    <button className="bg-yellow text-black font-averia inline-flex px-[30px] py-[6px] justify-center items-center border-4 border-black rounded-full shadow-[-4px_5px_0_0_black] active:shadow-none transition-all active:-translate-x-1 active:translate-y-1">
      <span className="text-lg font-bold">{text}</span>
    </button>
  );
};

export default SpecialButton;
