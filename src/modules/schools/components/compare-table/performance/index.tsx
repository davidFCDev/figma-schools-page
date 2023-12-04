import React from "react";
import TableCell from "@mui/material/TableCell";
import { PiBookOpen } from "react-icons/pi";
import { SchoolProps } from "@/types";

const cellStyle = {
  border: "1px solid #DEDEDE",
  width: "33%",
};

const Performance = ({ schools }: { schools: SchoolProps[] }) => {
  return (
    <>
      <TableCell style={cellStyle} component="th" scope="row">
        <div className="flex items-center gap-3 ">
          <div className="text-3xl">
            <PiBookOpen />
          </div>
          <h3 className="text-lg font-semibold">Academic Performance</h3>
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
              Average ATAR:{" "}
              <span className="text-darkOrange bg-orangePalid p-2 rounded-md">
                {school.academic_performance.average_atar}%
              </span>
            </p>
            <p>
              Scholarship Recipients:{" "}
              <span className="text-darkOrange bg-orangePalid p-2 rounded-md">
                {school.academic_performance.recipients}%
              </span>
            </p>
          </div>
        </TableCell>
      ))}
    </>
  );
};

export default Performance;
