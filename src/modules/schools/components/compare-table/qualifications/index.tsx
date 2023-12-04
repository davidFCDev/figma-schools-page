import React from "react";
import TableCell from "@mui/material/TableCell";
import { PiBasketball, PiGraduationCap } from "react-icons/pi";
import { SchoolProps } from "@/types";

const cellStyle = {
  border: "1px solid #DEDEDE",
  width: "33%",
};

const Qualifications = ({ schools }: { schools: SchoolProps[] }) => {
  return (
    <>
      <TableCell style={cellStyle} component="th" scope="row">
        <div className="flex items-center gap-3 ">
          <div className="text-3xl">
          <PiGraduationCap />
          </div>
          <h3 className="text-lg font-semibold">Faculty Qualifications</h3>
        </div>
      </TableCell>
      {schools.slice(0, 2).map((school, index) => (
        <TableCell
          key={index}
          align="left"
          style={{ border: "1px solid #DEDEDE" }}
        >
          <div className="flex flex-col gap-4 font-semibold">
            <p>
              Teacher-Student Ratio:{" "}
              <span className="text-blue bg-bluePalid p-2 rounded-md">
                {school.qualifications.ratio}
              </span>
            </p>
            <p>
              % Teachers w/ Adv. Degrees:{" "}
              <span className="text-blue bg-bluePalid p-2 rounded-md">
                {school.qualifications.degrees}
              </span>
            </p>
          </div>
        </TableCell>
      ))}
    </>
  );
};

export default Qualifications;
