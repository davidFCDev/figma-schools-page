/* eslint-disable @next/next/no-img-element */
"use client";
import { IoIosArrowDown } from "react-icons/io";
import Routes from "../../components/routes";
import { useEffect, useState } from "react";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import { RxCross2 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const currentPath = usePathname();

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="hidden small:flex px-12 py-10 w-1/4 flex-col gap-20 rounded-r-[60px] bg-white font-nunito shadow-md shadow-neutral-200">
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
      </nav>

      {!show && (
        <div className="flex items-center gap-4 small:hidden absolute my-3 mx-6">
          <SpecialSmallButton
            onClick={handleShow}
            css="p-2"
            icon={<MdMenu />}
          />
          <div className="text-xl font-bold font-averia">
            {ROUTES.map((route) =>
              route.path === currentPath ? route.name : null
            )}
            <hr className="border-2 border-darkGreen w-[60%]" />
          </div>
        </div>
      )}

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex small:hidden absolute z-20 px-8 py-5 w-3/4 flex-col gap-8 rounded-r-[60px] bg-white font-nunito shadow-md shadow-neutral-200"
          >
            <div className="absolute -right-4 top-5">
              <SpecialSmallButton
                onClick={handleShow}
                css="p-1"
                icon={<RxCross2 />}
              />
            </div>
            <img src="/logo-edufy2.png" alt="logo" className="w-32" />
            <div className="flex flex-col gap-10 items-center">
              <Routes />

              <img src="/light.png" alt="light" className="w-32" />
              <div className="flex items-center w-full justify-between font-semibold">
                <img src="/usercircle.png" alt="user" className="" />
                <h3>Sign In</h3>
                <IoIosArrowDown />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
