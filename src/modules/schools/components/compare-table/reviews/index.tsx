import React from "react";
import TableCell from "@mui/material/TableCell";
import { PiStarFill, PiUsersFour } from "react-icons/pi";
import { SchoolProps } from "@/types";

const cellStyle = {
  border: "1px solid #DEDEDE",
  width: "33%",
};

const Reviews = ({ schools }: { schools: SchoolProps[] }) => {
  return (
    <>
      <TableCell style={cellStyle} component="th" scope="row">
        <div className="flex items-center gap-3 ">
          <div className="text-3xl">
            <PiUsersFour />
          </div>
          <h3 className="text-base small:text-lg font-semibold">
            Parent and Student Reviews
          </h3>
        </div>
      </TableCell>
      {schools.slice(0, 2).map((school, index) => (
        <TableCell
          key={index}
          align="left"
          style={{ border: "1px solid #DEDEDE" }}
        >
          <div className="flex flex-col gap-4 font-semibold items-start">
            <div className="flex items-center gap-1">
              Avg Rating:{" "}
              <div className="text-yellow bg-yellowPalid p-2 rounded-md flex items-center gap-1">
                <span>{school.reviews}</span>
                <PiStarFill />
              </div>
            </div>
          </div>
        </TableCell>
      ))}
    </>
  );
};

export default Reviews;
