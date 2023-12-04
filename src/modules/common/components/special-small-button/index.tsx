import React from "react";

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  css?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SpecialSmallButton = ({ text, icon, css, ...props }: ButtonProps) => {
  return (
    <button
      className={`${css} bg-yellow gap-1 text-black font-averia inline-flex justify-center items-center border-[3px] border-black rounded-full shadow-[-3px_3px_0_0_black] active:shadow-none transition-all active:-translate-x-1 active:translate-y-1`}
      {...props}
    >
      {text && <span className="font-semibold">{text}</span>}
      {icon && <span className="text-2xl font-semibold">{icon}</span>}
    </button>
  );
};

export default SpecialSmallButton;
