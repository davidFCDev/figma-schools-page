"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";

const FormStepOneTwo = () => {
  const router = useRouter();
  const [selectedInput, setSelectedInput] = useState<string | null>(null);

  const handleDivClick = (inputName: string) => {
    setSelectedInput(inputName === selectedInput ? null : inputName);
  };

  const handleSubmit = (e: any) => {
    // TODO: Send value to the next route
    e.preventDefault();
    router.push("/step-two");
  };

  const handleSkip = (e: any) => {
    // TODO: Skip values and send to the next route
    e.preventDefault();
    router.push("/step-two");
  };

  const handleAddMore = (e: any) => {
    e.preventDefault();
    console.log("Add more");
  };

  return (
    <form className="flex flex-col gap-6 w-full items-start">
      <div className="w-full flex flex-col gap-3">
        <h3 className="font-semibold text-lg">Student who graduates in:</h3>
        <div className="flex flex-col gap-2 font-semibold">
          <div className="flex w-full justify-between text-lg items-center bg-greenPalid rounded-lg px-4 py-3 text-green">
            <span>2026</span>
            <div className="text-3xl">
              <FiCheck />
            </div>
          </div>
          <div className="flex w-full justify-between text-lg items-center bg-greenPalid rounded-lg px-4 py-3 text-green">
            <span>Christ Church Grammar School</span>
            <div className="text-3xl">
              <FiCheck />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <div
          className={`flex w-full justify-between text-lg items-center rounded-lg px-4 py-3 cursor-pointer ${
            selectedInput === "graduationYear" ? "bg-greenPalid" : "bg-white"
          }`}
          onClick={() => handleDivClick("graduationYear")}
        >
          <span>Graduation Year</span>
          <div className="text-3xl">
            {selectedInput === "graduationYear" ? (
              <IoIosArrowUp />
            ) : (
              <IoIosArrowDown />
            )}
          </div>
        </div>
        {selectedInput === "graduationYear" && (
          <input
            type="text"
            className="rounded-lg px-4 py-3 active:outline-none outline-none"
            placeholder="Introduce the graduation year..."
          />
        )}

        <div
          className={`flex w-full justify-between text-lg items-center rounded-lg px-4 py-3 cursor-pointer ${
            selectedInput === "school" ? "bg-greenPalid" : "bg-white"
          }`}
          onClick={() => handleDivClick("school")}
        >
          <span>What School</span>
          <div className="text-3xl">
            {selectedInput === "school" ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {selectedInput === "school" && (
          <input
            type="text"
            className="rounded-lg px-4 py-3 active:outline-none outline-none"
            placeholder="Introduce the school..."
          />
        )}
        <button
          className="flex items-center text-green2 gap-2"
          onClick={handleAddMore}
        >
          <FaCirclePlus />
          <span>Add more</span>
        </button>
      </div>

      <div className="flex items-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-green text-white px-12 py-3 rounded-full font-semibold mt-4 hover:bg-green2"
        >
          Next
        </button>
        <button
          type="submit"
          onClick={handleSkip}
          className="text-green px-12 py-3 rounded-full font-semibold mt-4 hover:bg-white"
        >
          Skip
        </button>
      </div>
    </form>
  );
};

export default FormStepOneTwo;
