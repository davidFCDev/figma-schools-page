import { SchoolProps } from "@/types";
import React from "react";

const cellStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  padding: '6px',
  textAlign: 'center',
};

const FeesTable = ({
  selectedSchool,
}: {
  selectedSchool: SchoolProps;
}) => {
  return (
    <table className="text-sm w-full">
      <thead>
        <tr>
          <th className="font-semibold" style={cellStyle}>
            Grade/Year
          </th>
          <th className="font-semibold" style={cellStyle}>
            Fee
          </th>
        </tr>
      </thead>
      <tbody className="font-bold">
        <tr>
          <td style={cellStyle}>Year 7</td>
          <td style={cellStyle}>${selectedSchool.admissions.school_fees.year_7}</td>
        </tr>
        <tr>
          <td style={cellStyle}>Year 12</td>
          <td style={cellStyle}>${selectedSchool.admissions.school_fees.year_10}</td>
        </tr>
        <tr>
          <td style={cellStyle}>Year 12</td>
          <td style={cellStyle}>${selectedSchool.admissions.school_fees.year_11}</td>
        </tr>
        <tr>
          <td style={cellStyle}>Year 12</td>
          <td style={cellStyle}>${selectedSchool.admissions.school_fees.year_12}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default FeesTable;
