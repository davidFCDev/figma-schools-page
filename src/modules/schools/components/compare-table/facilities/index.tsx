import React from "react";
import TableCell from "@mui/material/TableCell";
import { PiBuildings, PiSealCheckFill } from "react-icons/pi";
import { SchoolProps } from "@/types";
import { RiCloseCircleFill } from "react-icons/ri";

const cellStyle = {
  border: "1px solid #DEDEDE",
  width: "33%",
};

const Facilities = ({ schools }: { schools: SchoolProps[] }) => {
  return (
    <>
      <TableCell style={cellStyle} component="th" scope="row">
        <div className="flex items-center gap-3 ">
          <div className="text-3xl">
            <PiBuildings />
          </div>
          <h3 className="text-base small:text-lg font-semibold">Facilities</h3>
        </div>
      </TableCell>
      {schools.slice(0, 2).map((school, index) => (
        <TableCell
          key={index}
          align="left"
          style={{ border: "1px solid #DEDEDE" }}
        >
          <div className="flex flex-col gap-4 font-semibold">
            <div className="flex items-center gap-1">
              Smart Classrooms:{" "}
              <div
                className={`${
                  school.facilities.smart_class === true
                    ? "text-greenLime bg-green3"
                    : "text-red bg-redPalid"
                } p-1 rounded-md text-2xl`}
              >
                {school.facilities.smart_class === true ? (
                  <PiSealCheckFill />
                ) : (
                  <RiCloseCircleFill />
                )}
              </div>
            </div>
            <p>
              No. of Sports Facilities:{" "}
              <span className="text-blue bg-bluePalid p-2 rounded-md">
                {school.activities.sports}
              </span>
            </p>
          </div>
        </TableCell>
      ))}
    </>
  );
};

export default Facilities;
