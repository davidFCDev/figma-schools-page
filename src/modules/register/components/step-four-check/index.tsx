/* eslint-disable @next/next/no-img-element */
import React from "react";
import { style } from "@/style";
import { useRouter } from "next/navigation";

const StepFourCheck = () => {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    // TODO: Send value to the next route
    e.preventDefault();
    router.push("/dashboard/home");
  };

  return (
    <div className="flex flex-col gap-5 w-full small:w-4/6 items-start">
      <h2 className={`${style.title}`}>Check your email</h2>
      <p className={`${style.subtitle}`}>
        We’ve sent an email to johndoe@harvard.edu with a link to activate your
        account
      </p>

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

      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-green text-white px-12 py-3 rounded-full font-semibold mt-4 hover:bg-green2"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default StepFourCheck;
