import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";

export default function BasicSelect({ label }: { label?: string }) {
  const [filter, setFilter] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 160 }}>
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <Select
          value={filter}
          onChange={handleChange}
          displayEmpty
          sx={{
            display: "flex",
            padding: "0px 10px",
            borderRadius: 5,
            backgroundColor: "white",
            border: "1px solid #DEDEDE",
            fontSize: 16,
            fontWeight: 600,
            color: "#4F4F4F",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem hidden value="">
            {label || "Filter"}
          </MenuItem>
          <MenuItem value={10}>None</MenuItem>
          <MenuItem value={20}>Option2</MenuItem>
          <MenuItem value={30}>Option3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
