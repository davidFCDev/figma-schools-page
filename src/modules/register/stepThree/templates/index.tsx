"use client";
import { BsArrowLeft } from "react-icons/bs";
import ProgressBar from "@/modules/common/components/progress-bar";
import Title from "../components/title";
import { style } from "@/style";
import Link from "next/link";
import Email from "../components/email";
import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
const StepThreeTemplate = () => {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    // TODO: Send value to the next route
    e.preventDefault();
    router.push("/dashboard/home");
  };

  return (
    <div className="w-full font-outfit flex flex-col small:flex-row">
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

      <div className="p-12 w-full flex flex-col gap-10 items-center bg-gray">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex justify-between px-2">
            <h3 className="font-semibold text-2xl">Account set up</h3>
            <p className="font-semibold text-2xl">3/3</p>
          </div>
          <ProgressBar progress={100} />
          <Link href={"/step-two"} className="text-2xl px-2">
            <BsArrowLeft />
          </Link>
        </div>

        <div className="flex flex-col gap-5 w-4/6 items-start">
          <h2 className={`${style.title}`}>Check your email</h2>
          <p className={`${style.subtitle}`}>
            We’ve sent an email to johndoe@harvard.edu with a link to activate
            your account
          </p>

          <Email />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green text-white px-12 py-3 rounded-full font-semibold mt-4 hover:bg-green2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThreeTemplate;
