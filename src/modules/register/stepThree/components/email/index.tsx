/* eslint-disable @next/next/no-img-element */
import React from "react";

const Email = () => {
  return (
    <div className="flex flex-col gap-32 pt-4">
      <div className="flex gap-10">
        <a href="#" className="flex items-center gap-2">
          <img src="/gmail.png" alt="gmail" />
          <span className="text-blue underline">Open Gmail</span>
        </a>
        <a href="#" className="flex items-center gap-2">
          <img src="/outlook.png" alt="gmail" />
          <span className="text-blue underline">Open Outlook</span>
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">
          Didn’t get an email? Check your spam folder!
        </h2>
        <a href="#" className="text-green2 underline">
          Re-enter your email and try again
        </a>
      </div>
    </div>
  );
};

export default Email;
