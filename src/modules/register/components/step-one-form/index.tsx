import { style } from "@/style";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const StepOneForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!selectedOption) {
      setError("Please, select one option first.");
      return;
    }

    // TODO: Send the value to the next route
    router.push("/register/step-two");
  };
  return (
    <div className="flex flex-col gap-5 w-full small:w-4/6 items-start">
      <h2 className={`${style.title}`}>
        What is the primary purpose of using Edufy?
      </h2>
      <p className={`${style.subtitle}`}>
        We’ll get you started with personalized recommendations based on your
        focus.
      </p>
      <form className="flex flex-col gap-4 w-full items-start">
        <label
          className={`w-full border-[2px] rounded-lg py-6 small:py-8 px-4 flex gap-2 hover:cursor-pointer ${
            selectedOption === "option1"
              ? "border-green text-green bg-greenPalid"
              : "border-gray-700"
          }`}
        >
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
            className="w-8"
          />
          I’m a parent
        </label>

        <label
          className={`w-full border-[2px] rounded-lg py-6 small:py-8 px-4 flex gap-2 hover:cursor-pointer ${
            selectedOption === "option2"
              ? "border-green text-green bg-greenPalid"
              : "border-gray-700"
          }`}
        >
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
            className="w-8"
          />
          I’m a student
        </label>

        <label
          className={`w-full border-[2px] rounded-lg py-6 small:py-8 px-4 flex gap-2 hover:cursor-pointer ${
            selectedOption === "option3"
              ? "border-green text-green bg-greenPalid"
              : "border-gray-700"
          }`}
        >
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
            className="w-8"
          />
          I’m an educational professional
        </label>

        <label
          className={`w-full border-[2px] rounded-lg py-6 small:py-8 px-4 flex gap-2 hover:cursor-pointer ${
            selectedOption === "option4"
              ? "border-green text-green bg-greenPalid"
              : "border-gray-700"
          }`}
        >
          <input
            type="radio"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={handleOptionChange}
            className="w-8"
          />
          Other
        </label>

        <div className="flex items-baseline gap-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green text-white px-12 py-3 rounded-full font-semibold mt-4 hover:bg-green2"
          >
            Next
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default StepOneForm;
