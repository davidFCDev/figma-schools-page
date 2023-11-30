/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { SCHOLARSHIPS } from "@/constants";
import { ScholarshipProps } from "@/types";
import { LuSearch } from "react-icons/lu";

export default function SearchInput() {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={SCHOLARSHIPS as ScholarshipProps[]}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.name
        }
        PaperComponent={({ children, style, ...other }) => (
          <div
            style={{
              ...style,
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              backgroundColor: "white",
            }}
            {...other}
          >
            {children}
          </div>
        )}
        onClose={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        open={isFocused}
        renderOption={(props, option) => (
          <li
            {...props}
            className="flex w-full justify-between items-center p-4 hover:bg-gray hover:cursor-pointer"
          >
            <div className="flex items-center">
              <img
                src={option.logo}
                alt={`${option.name} logo`}
                style={{ marginRight: 8, width: 24, height: 24 }}
              />
              <span className="text-sm">{option.name}</span>
            </div>
            <span
              className={`${
                option.status === true
                  ? "text-greenLime bg-green3"
                  : "text-red bg-redPalid"
              } px-3 py-1 text-xs rounded-xl`}
            >
              {option.status === true ? "Available" : "Unavailable"}
            </span>
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label=""
            placeholder="Search scholarships..."
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <LuSearch style={{ marginRight: 10, fontSize: 20 }} />
              ),
            }}
            sx={{
              borderRadius: isFocused ? "15px 15px 0 0" : "15px",
              backgroundColor: "white",
              boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.05)",
              border: "none",
              color: "#4F4F4F",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
        )}
      />
    </Stack>
  );
}
