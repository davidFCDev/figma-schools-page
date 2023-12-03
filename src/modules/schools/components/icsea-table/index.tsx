import { SchoolProps } from "@/types";
import React from "react";

const IcseaTable = ({ selectedSchool }: { selectedSchool: SchoolProps }) => {
  return (
    <table
      className="w-full text-sm"
      style={{ borderCollapse: "collapse", borderRadius: "15px" }}
    >
      <thead>
        <tr>
          <th className="font-semibold text-left" style={cellStyle}>
            Distribution of students
          </th>
          <th className="font-semibold" style={cellStyle}>
            Bottom Quarter
          </th>
          <th className="font-semibold" style={cellStyle}>
            Middle Quarter
          </th>
          <th className="font-semibold" style={cellStyle}>
            Top Quarter
          </th>
        </tr>
      </thead>
      <tbody className="font-semibold">
        <tr>
          <td className="font-bold" style={cellStyle}>
            School distribution
          </td>
          {selectedSchool.performance.distribution.school.map((item, index) => (
            <td
              className="font-bold"
              key={index}
              style={{ ...cellStyle, textAlign: "center" }}
            >
              {item} %
            </td>
          ))}
        </tr>
        <tr>
          <td className="font-bold" style={cellStyle}>
            Australia distribution
          </td>
          {selectedSchool.performance.distribution.australia.map(
            (item, index) => (
              <td
                className="font-bold"
                key={index}
                style={{ ...cellStyle, textAlign: "center" }}
              >
                {item} %
              </td>
            )
          )}
        </tr>
      </tbody>
    </table>
  );
};

const cellStyle = {
  border: "1px solid #D5D5D5",
  padding: "8px",
};

export default IcseaTable;
