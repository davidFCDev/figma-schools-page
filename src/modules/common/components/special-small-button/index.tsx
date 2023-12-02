import React from "react";

type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SpecialSmallButton = ({ icon, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-yellow gap-1 text-black font-averia inline-flex p-2 justify-center items-center border-[3px] border-black rounded-full shadow-[-3px_3px_0_0_black] active:shadow-none transition-all active:-translate-x-1 active:translate-y-1"
      {...props}
    >
      {icon && <span className="text-3xl">{icon}</span>}
    </button>
  );
};

export default SpecialSmallButton;
