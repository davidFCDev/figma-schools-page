import React from "react";
import TableCell from "@mui/material/TableCell";
import { SchoolProps } from "@/types";
import { MdAttachMoney } from "react-icons/md";

const cellStyle = {
  border: "1px solid #DEDEDE",
  width: "33%",
};

const Financial = ({ schools }: { schools: SchoolProps[] }) => {
  return (
    <>
      <TableCell style={cellStyle} component="th" scope="row">
        <div className="flex items-center gap-3 ">
          <div className="text-3xl">
            <MdAttachMoney />
          </div>
          <h3 className="text-base small:text-lg font-semibold">
            Scholarships & Financial Aid
          </h3>
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
              Scholarship Types:{" "}
              <span className="text-violet bg-violetPalid p-2 rounded-md">
                {school.financial_aid.types}
              </span>
            </p>
            <p>
              No. of Scholarships:{" "}
              <span className="text-violet bg-violetPalid p-2 rounded-md">
                {school.financial_aid.total}
              </span>
            </p>
          </div>
        </TableCell>
      ))}
    </>
  );
};

export default Financial;
