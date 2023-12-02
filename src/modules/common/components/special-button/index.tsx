import React from "react";

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SpecialButton = ({ text, icon, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-yellow gap-1 text-black font-averia inline-flex px-[32px] py-[7px] justify-center items-center border-[3px] border-black rounded-full shadow-[-3px_3px_0_0_black] active:shadow-none transition-all active:-translate-x-1 active:translate-y-1"
      {...props}
    >
      <span className="text-lg font-bold">{text}</span>
      {icon && <span className="text-3xl">{icon}</span>}
    </button>
  );
};

export default SpecialButton;
