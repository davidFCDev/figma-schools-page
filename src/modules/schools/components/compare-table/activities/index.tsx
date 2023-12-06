import React from "react";
import TableCell from "@mui/material/TableCell";
import { PiBasketball } from "react-icons/pi";
import { SchoolProps } from "@/types";

const cellStyle = {
  border: "1px solid #DEDEDE",
  width: "33%",
};

const Activities = ({ schools }: { schools: SchoolProps[] }) => {
  return (
    <>
      <TableCell style={cellStyle} component="th" scope="row">
        <div className="flex items-center gap-3 ">
          <div className="text-3xl">
          <PiBasketball />
          </div>
          <h3 className="text-base small:text-lg font-semibold">Extracurricular Activities</h3>
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
              No. of Clubs:{" "}
              <span className="text-greenLime bg-green3 p-2 rounded-md">
                {school.activities.clubs}
              </span>
            </p>
            <p>
              No. of Sports Facilities:{" "}
              <span className="text-greenLime bg-green3 p-2 rounded-md">
                {school.activities.sports}
              </span>
            </p>
          </div>
        </TableCell>
      ))}
    </>
  );
};

export default Activities;
