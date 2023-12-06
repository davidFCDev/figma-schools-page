/* eslint-disable @next/next/no-img-element */
"use client";
import { IoIosArrowDown } from "react-icons/io";
import Routes from "../../components/routes";
import { useState } from "react";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import { RxCross2 } from "react-icons/rx";
import { MdMenu } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { ROUTES } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();

  const handleShow = () => {
    setShow(!show);
  };

  const handleLinkClick = (path: string) => {
    setTimeout(() => {
      setShow(false);
      router.push(path);
    }, 100);
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
            {ROUTES.map((route, index) =>
              route.path === currentPath ? (
                <div key={index}>
                  <span>{route.name}</span>
                  <hr className="border-2 border-darkGreen w-[60%]" />
                </div>
              ) : null
            )}
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
                css="p-1 text-xs"
                icon={<RxCross2 />}
              />
            </div>
            <img src="/logo-edufy2.png" alt="logo" className="w-32" />
            <div className="flex flex-col gap-10 items-center">
              <div className="flex flex-col gap-3 small:gap-4 items-start">
                {ROUTES.map((route, index) => (
                  <Link
                    href={route.path}
                    key={index}
                    onClick={() => handleLinkClick(route.path)}
                    className={`flex items-center gap-3 small:gap-4 font-semibold ${
                      currentPath === route.path ||
                      currentPath.startsWith(route.path)
                        ? "bg-darkOrange text-white"
                        : "bg-white text-green"
                    } px-1 small:px-2 py-1 small:py-2 rounded-full w-full`}
                  >
                    <span
                      className={`text-xl small:text-2xl rounded-full p-1 small:p-2 ${
                        currentPath === route.path ||
                        currentPath.startsWith(route.path)
                          ? "bg-white text-darkOrange"
                          : ""
                      }`}
                    >
                      {route.icon}
                    </span>
                    <h3 className="text-sm small:text-base hover:scale-105 transform transition-all">
                      {route.name}
                    </h3>
                  </Link>
                ))}
                <Link
                  href={"/dashboard/schoolmatch"}
                  className="pl-3 small:pl-6"
                  onClick={() => handleLinkClick("/dashboard/schoolmatch")}
                >
                  <SpecialSmallButton
                    text="SchoolMatch"
                    css="px-8 py-1 small:py-2"
                  />
                </Link>
              </div>

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
