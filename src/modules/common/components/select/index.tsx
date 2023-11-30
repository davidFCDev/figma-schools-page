import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function BasicSelect() {
  const [filter, setFilter] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          value={filter}
          onChange={handleChange}
          displayEmpty
          sx={{
            display: "flex",
            padding: "0px 10px",
            borderRadius: 5,
            backgroundColor: "white",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.05)",
            border: 'none',
            fontSize: 18,
            fontWeight: 600,
            color: '#4F4F4F',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
          
        >
          <MenuItem hidden value="">Filter</MenuItem>
          <MenuItem value={10}>None</MenuItem>
          <MenuItem value={20}>Option2</MenuItem>
          <MenuItem value={30}>Option3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}