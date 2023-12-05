import { style } from "@/style";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const StepThreeForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  // TODO: User and value context
  // TODO: Handle submit and errors

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/register/step-four");
  };

  return (
    <div className="flex flex-col gap-5 w-full small:w-4/6 items-start">
      <h2 className={`${style.title}`}>Tell us a bit about you</h2>
      <p className={`${style.subtitle}`}>Just the absolute minimal</p>

      <form className="flex flex-col gap-6 w-full items-start">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col small:flex-row w-full gap-2">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="name" className="font-semibold">
                First name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="rounded-lg px-4 py-3 active:outline-none outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="name" className="font-semibold">
                Last name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your last name"
                className="rounded-lg px-4 py-3 active:outline-none outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name" className="font-semibold">
              School email
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your school email"
              className="rounded-lg px-4 py-3 active:outline-none outline-none"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Your password"
                className="rounded-lg px-4 py-3 pr-10 active:outline-none outline-none w-full"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green text-white px-12 py-3 rounded-full font-semibold mt-4 hover:bg-green2"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepThreeForm;
