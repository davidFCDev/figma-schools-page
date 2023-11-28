import React from "react";

type ButtonProps = {
  text?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SpecialButton = ({ text }: ButtonProps) => {
  return (
    <button className="bg-yellow font-averia inline-flex px-[32px] py-[14px] justify-center items-center border-4 border-black rounded-full text-black font-bold shadow-[-4px_5px_0_0_black] active:shadow-none transition-all active:-translate-x-1 active:translate-y-1">
      {text}
    </button>
  );
};

export default SpecialButton;
