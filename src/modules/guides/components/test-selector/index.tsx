/* eslint-disable @next/next/no-img-element */
import { TESTS } from "@/constants";
import { TestContext, TestContextProps } from "@/lib/context/test-context";
import { useContext } from "react";

const TestSelector = () => {
  const contextValue = useContext(TestContext) as TestContextProps;

  const { selectedTest, handleTestClick } = contextValue;

  return (
    <div className="flex justify-center gap-8">
      {TESTS.map((test) => (
        <div
          key={test.id}
          className="border border-white p-5 flex items-center bg-white rounded-2xl shadow-md shadow-neutral-200 gap-4 hover:cursor-pointer"
          style={{
            borderColor: selectedTest?.id === test.id ? test.color : "",
            color: selectedTest?.id === test.id ? test.color : "",
          }}
          onClick={() => handleTestClick(test)}
        >
          <img src={test.icon} alt={test.title} />
          <h2 className="text-lg tracking-wider">{test.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default TestSelector;
