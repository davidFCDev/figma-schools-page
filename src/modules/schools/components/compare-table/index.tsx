/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SpecialSmallButton from "@/modules/common/components/special-small-button";
import { GoPlus } from "react-icons/go";
import { SCHOOLS } from "@/constants/schools";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import Performance from "./performance";
import Financial from "./financial";
import Activities from "./activities";
import Qualifications from "./qualifications";
import Facilities from "./facilities";
import Cost from "./cost";
import Culture from "./culture";
import Location from "./location";
import Reviews from "./reviews";

const cellStyle = {
  border: "1px solid #DEDEDE",
  width: "33%",
};

const schools = SCHOOLS;

export default function CompareTable({handleToggle}: {handleToggle: () => void}) {
  return (
    <TableContainer
      sx={{
        borderRadius: "20px",
        border: "1px solid #E9E9E9",
      }}
      component={Paper}
    >
      <Table
        sx={{
          minWidth: "600",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell style={cellStyle}>
              <div className="flex flex-col gap-4 p-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Compare Schools</h2>
                  <div className="text-xl font-semibold">
                    <SpecialSmallButton
                      text="Add"
                      icon={<GoPlus />}
                      css="px-3 py-1"
                      onClick={handleToggle}
                    />
                  </div>
                </div>
                <p className="text-sm">
                  Choose up to 5 schools and compare them based on several
                  factors
                </p>
              </div>
            </TableCell>
            {schools.slice(0, 2).map((school, index) => (
              <TableCell key={index} align="right" style={cellStyle}>
                <div className="flex flex-col gap-4 p-2">
                  <div className="flex gap-4 items-center justify-between">
                    <img src={school.small_logo} alt="logo" className="w-14" />
                    <h2 className="text-xl font-semibold">{school.name}</h2>
                  </div>
                  <div className="flex gap-5 items-center justify-between">
                    <Link
                      href={school.web}
                      className="bg-darkGreen px-10 py-4 rounded-xl text-white w-full text-center"
                    >
                      View Website
                    </Link>
                    <SpecialSmallButton icon={<RxCross2 />} css="p-1" />
                  </div>
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <Performance schools={schools} />
          </TableRow>
          <TableRow>
            <Financial schools={schools} />
          </TableRow>
          <TableRow>
            <Activities schools={schools} />
          </TableRow>
          <TableRow>
            <Qualifications schools={schools} />
          </TableRow>
          <TableRow>
            <Facilities schools={schools} />
          </TableRow>
          <TableRow>
            <Cost schools={schools} />
          </TableRow>
          <TableRow>
            <Culture schools={schools} />
          </TableRow>
          <TableRow>
            <Location schools={schools} />
          </TableRow>
          <TableRow>
            <Reviews schools={schools} />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
