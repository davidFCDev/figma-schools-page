import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function YearSelect() {
  const [year, setYear] = React.useState("");
  const currentYear = new Date().getFullYear();

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  const years = Array.from({ length: 5 }, (_, index) => 2018 + index);

  return (
    <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
      <InputLabel id="demo-select-small-label">{currentYear}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={year}
        label={`${currentYear}`}
        onChange={handleChange}
        sx={{
          display: "flex",
          padding: "0px 0px",
          borderRadius: 5,
          backgroundColor: "white",
          border: "1px solid #E0E0E0",
          fontSize: 16,
          fontWeight: 600,
          color: "#4F4F4F",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <MenuItem value="">
          <em>none</em>
        </MenuItem>
        {years.map((yearValue) => (
          <MenuItem key={yearValue} value={yearValue}>
            {yearValue}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
