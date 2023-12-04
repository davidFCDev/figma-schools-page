import React from "react";
import TableCell from "@mui/material/TableCell";
import { PiCreditCard, PiLink } from "react-icons/pi";
import { SchoolProps } from "@/types";
import Link from "next/link";

const cellStyle = {
  border: "1px solid #DEDEDE",
  width: "33%",
};

const Cost = ({ schools }: { schools: SchoolProps[] }) => {
  return (
    <>
      <TableCell style={cellStyle} component="th" scope="row">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-3xl">
              <PiCreditCard />
            </div>
            <h3 className="text-lg font-semibold">Cost</h3>
          </div>
          <Link href="#" className="text-pink bg-pinkPalid p-2 rounded-md flex items-center gap-1">
            <span>check out scholarships</span>
            <PiLink />
          </Link>
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
              Tuition Fees:{" "}
              <span className="text-pink bg-pinkPalid p-2 rounded-md">
                ${school.cost.tuition.toLocaleString()}
              </span>
            </p>
            <p>
              Additional Costs:{" "}
              <span className="text-pink bg-pinkPalid p-2 rounded-md">
                ${school.cost.add.toLocaleString()}
              </span>
            </p>
          </div>
        </TableCell>
      ))}
    </>
  );
};

export default Cost;
