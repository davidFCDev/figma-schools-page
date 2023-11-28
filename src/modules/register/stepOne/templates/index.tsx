import { BsArrowLeft } from "react-icons/bs";
import ProgressBar from "@/modules/common/components/progress-bar";
import Title from "../components/title";
import { style } from "@/style";
import { useState } from "react";

/* eslint-disable @next/next/no-img-element */
const StepOneTemplate = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full font-outfit flex">
      <div className="flex flex-col gap-24 screen relative text-white bg-green min-h-screen p-12 overflow-hidden shadow shadow-green">
        <img src="/logo-edufy.png" alt="logo" className="w-52" />
        <img
          src="/points.png"
          alt="points"
          className="absolute -top-12 -right-10"
        />
        <img
          src="/small-points.png"
          alt="small-points"
          className="absolute -bottom-10 -left-10 w-72"
        />

        <Title />
      </div>

      <div className="p-12 w-full flex flex-col gap-10 items-center">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex justify-between px-2">
            <h3 className="font-semibold text-2xl">Account set up</h3>
            <p className="font-semibold text-2xl">1/3</p>
          </div>
          <ProgressBar progress={33} />
          <div className="text-2xl px-2">
            <BsArrowLeft />
          </div>
        </div>

        <div className="flex flex-col gap-5 max-w-xl items-center">
          <h2 className={`${style.title}`}>
            What is the primary purpose of using Edufy?
          </h2>
          <p className={`${style.subtitle}`}>
            We’ll get you started with personalized recommendations based on
            your focus.
          </p>
          <form>
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              Option 1
            </label>

            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              Option 2
            </label>

            <label>
              <input
                type="radio"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              Option 3
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepOneTemplate;
