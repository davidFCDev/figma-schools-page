"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FormStepOne = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
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
    router.push("/step-one-two");
  };

  return (
    <form className="flex flex-col gap-4 w-full items-start">
      <label
        className={`w-full border-[2px] rounded-lg py-8 px-4 flex gap-2 hover:cursor-pointer ${
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
        className={`w-full border-[2px] rounded-lg py-8 px-4 flex gap-2 hover:cursor-pointer ${
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
        className={`w-full border-[2px] rounded-lg py-8 px-4 flex gap-2 hover:cursor-pointer ${
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
        className={`w-full border-[2px] rounded-lg py-8 px-4 flex gap-2 hover:cursor-pointer ${
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
  );
};

export default FormStepOne;
