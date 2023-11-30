/* eslint-disable @next/next/no-img-element */
"use client";
import { IoIosArrowDown } from "react-icons/io";
import Routes from "../../components/routes";

const Nav = () => {

  return (
    <aside className="px-12 py-10 w-1/4 flex flex-col gap-20 rounded-r-[60px] bg-white font-nunito shadow-md shadow-neutral-200">
      <img src="/logo-edufy2.png" alt="logo" className="w-40" />

      <div className="flex flex-col gap-10">
        <Routes />

        <img src="/light.png" alt="light" className="w-48" />

        <div className="flex items-center w-full justify-between font-semibold">
          <img src="/usercircle.png" alt="user" className="" />
          <h3>Sign In</h3>
          <IoIosArrowDown />
        </div>
      </div>
    </aside>
  );
};

export default Nav;
