/* eslint-disable @next/next/no-img-element */
import { TestContext, TestContextProps } from "@/lib/context/test-context";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { PiExam } from "react-icons/pi";

const TestSelected: React.FC = () => {
  const { selectedTest } = useContext(TestContext) as TestContextProps;

  if (!selectedTest) {
    return <div>No pathway selected</div>;
  }

  return (
    <div className="p-6 small:p-10 flex flex-col small:flex-row items-start gap-6 small:gap-10 bg-white rounded-2xl shadow-md shadow-neutral-200 w-full">
      <div className="flex flex-col max-w-sm gap-8 items-start">
        <div className="flex gap-4 items-center">
          <img src={selectedTest.icon} alt={selectedTest.title} />
          <h2 className="text-xl font-bold tracking-wider">
            {selectedTest.subtitle}
          </h2>
        </div>
        <p className="leading-relaxed text-neutral-700">
          {selectedTest.description}
        </p>
        <Link
          href="/dashboard/guides/[id]"
          as={`/dashboard/guides/${selectedTest.id}`}
        >
          <p
            className="font-semibold hover:underline"
            style={{ color: selectedTest?.color }}
          >
            Learn more
          </p>
        </Link>
      </div>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-start justify-between border border-neutral-300 rounded-2xl p-3 small:p-4">
            <div className="flex gap-3 small:gap-5 items-center">
              <img
                src="/icons/list-icon.png"
                alt="list-icon"
                className="w-16 small:w-12"
              />
              <div className="flex flex-col gap-2 small:gap-0">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-sm small:text-base">
                    Information Technology
                  </h3>
                  <span className="text-xs">Gain on-the-job IT skills</span>
                </div>
                <button className="flex small:hidden items-center gap-1">
                  <span className="text-xs underline">View Guide</span>
                  <PiExam />
                </button>
              </div>
            </div>
            <button className="hidden small:flex items-center gap-1 border rounded-lg border-neutral-200 p-2 hover:border-neutral-400">
              <span className="text-xs">View Guide</span>
              <PiExam />
            </button>
          </div>

          <div className="flex gap-4 items-start justify-between border border-neutral-300 rounded-2xl p-3 small:p-4">
            <div className="flex gap-3 small:gap-5  items-center">
              <img
                src="/icons/blue-setting.png"
                alt="list-icon"
                className="w-20 small:w-12"
              />
              <div className="flex flex-col gap-2 small:gap-0">
                <div className="flex flex-col">
                  <h3 className="font-semibold text-sm small:text-base">
                    Retail Management
                  </h3>
                  <span className="text-xs">
                    Learn the ropes of retail operations
                  </span>
                </div>
                <button className="flex small:hidden items-center gap-1">
                  <span className="text-xs underline">View Guide</span>
                  <PiExam />
                </button>
              </div>
            </div>
            <button className="hidden small:flex items-center gap-1 border rounded-lg border-neutral-200 p-2 hover:border-neutral-400">
              <span className="text-xs">View Guide</span>
              <PiExam />
            </button>
          </div>

          <div className="bg-darkOrange flex flex-col gap-4 text-white p-6 items-center rounded-2xl shadow text-center font-averia relative screen-texture">
            <h2 className="text-2xl small:text-3xl font-semibold">
              Sign Up to view all Resources
            </h2>
            <p className="font-light max-w-xs text-neutral-100 text-sm small:text-base">
              It’s only $4.99/month for access to all of our over 42,343 high
              quality resources
            </p>
            <SpecialSmallButton text="Sign Up" css="px-12 py-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSelected;
