import React from "react";
import TableCell from "@mui/material/TableCell";
import { GrLocation } from "react-icons/gr";
import { SchoolProps } from "@/types";
import { VscLocation } from "react-icons/vsc";
import Link from "next/link";

const cellStyle = {
  border: "1px solid #DEDEDE",
  width: "33%",
};

const Location = ({ schools }: { schools: SchoolProps[] }) => {
  return (
    <>
      <TableCell style={cellStyle} component="th" scope="row">
        <div className="flex items-center gap-3 ">
          <div className="text-3xl">
            <GrLocation />
          </div>
          <h3 className="text-base small:text-lg font-semibold">Location and Accessibility</h3>
        </div>
      </TableCell>
      {schools.slice(0, 2).map((school, index) => (
        <TableCell
          key={index}
          align="left"
          style={{ border: "1px solid #DEDEDE" }}
        >
          <div className="flex flex-col gap-4 font-semibold items-start">
            <Link href={school.location}>
              <div className="text-violet bg-violetPalid p-2 rounded-md flex items-center gap-1">
                <span>See on Map</span>
                <VscLocation />
              </div>
            </Link>
          </div>
        </TableCell>
      ))}
    </>
  );
};

export default Location;
