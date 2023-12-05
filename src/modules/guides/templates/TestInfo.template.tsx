/* eslint-disable @next/next/no-img-element */
"use client";

import { TESTS } from "@/constants";
import { style } from "@/style";
import { TestProps } from "@/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const TestInfoTemplate = () => {
  const { id } = useParams();
  const [testData, setTestData] = useState<TestProps | null>(null);

  useEffect(() => {
    const test = TESTS.find((test) => test.id === Number(id));

    if (test) {
      setTestData(test);
    } else {
      console.error(`Object not found with id: ${id}`);
    }
  }, [id]);

  if (!testData) {
    return (
      <main className={`${style.page} flex flex-col gap-8 items-center `}>
        <div className="p-5 bg-white shadow shadow-neutral-200 items-center flex flex-col gap-10 rounded-3xl">
          <h3 className="text-avaria font-semibold text-xl ">
            Sorry, we couldn’t find the test you’re looking for.
          </h3>
          <Link href="/dashboard/guides">
            <span className="underline">Back to Guides</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={`${style.page} flex flex-col gap-5 items-start`}>
      <div className="flex flex-col small:flex-row gap-5 w-full items-start small:items-center">
        <div
          style={{ borderColor: `${testData.color}` }}
          className="border-2 py-3 px-5 flex items-center bg-white rounded-2xl gap-4 hover:cursor-pointer"
        >
          <img src={testData.icon} alt={testData.title} />
          <h2
            className="text-lg font-semibold tracking-wider"
            style={{ color: `${testData.color}` }}
          >
            {testData.title}
          </h2>
        </div>

        <div className="flex gap-5 items-center">
          <img
            src="/icons/list-icon.png"
            alt="list-icon"
            className="border-[3px] border-pink rounded-2xl h-[75px]"
          />
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-lg">Information Technology</h3>
            <span className="text-sm">Gain on-the-job IT skills</span>
          </div>
        </div>
      </div>

      <div className="p-5 small:p-10 flex flex-col small:flex-row items-start gap-10 bg-white rounded-2xl shadow-md shadow-neutral-200 w-full">
        <div className="flex flex-col max-w-sm gap-8 items-start">
          <div className="flex gap-4 items-center">
            <img src={testData.icon} alt={testData.title} />
            <h2 className="text-xl font-bold tracking-wider">
              {testData.subtitle_2}
            </h2>
          </div>
          <p className="leading-relaxed text-neutral-700">
            {testData.description}
          </p>
          <button
            className="font-semibold hover:underline"
            style={{
              color: testData?.color,
            }}
          >
            Learn more
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-start small:items-center border border-neutral-300 rounded-2xl p-3 small:p-4">
            <img src="/icons/list-icon.png" alt="list-icon" />
            <p className="small:pr-10">{testData.features[0]}</p>
          </div>
          <div className="flex gap-4 items-start small:items-center border border-neutral-300 rounded-2xl p-3 small:p-4">
            <img src="/icons/list-icon.png" alt="list-icon" />
            <p className="small:pr-10">{testData.features[1]}</p>
          </div>
          <div className="flex gap-4 items-start small:items-center border border-neutral-300 rounded-2xl p-3 small:p-4">
            <img src="/icons/list-icon.png" alt="list-icon" />
            <p className="small:pr-10">{testData.features[2]}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestInfoTemplate;
