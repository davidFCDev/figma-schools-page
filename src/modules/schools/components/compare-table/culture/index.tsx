import React from "react";
import TableCell from "@mui/material/TableCell";
import { PiUsersFour } from "react-icons/pi";
import { SchoolProps } from "@/types";

const cellStyle = {
  border: "1px solid #DEDEDE",
  width: "33%",
};

const Culture = ({ schools }: { schools: SchoolProps[] }) => {
  return (
    <>
      <TableCell style={cellStyle} component="th" scope="row">
        <div className="flex items-center gap-3 ">
          <div className="text-3xl">
          <PiUsersFour />
          </div>
          <h3 className="text-base small:text-lg font-semibold">School Culture</h3>
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
              Ethos:{" "}
              <span className="text-darkGreen bg-greenPalid p-2 rounded-md">
                {school.culture}
              </span>
            </p>

          </div>
        </TableCell>
      ))}
    </>
  );
};

export default Culture;
