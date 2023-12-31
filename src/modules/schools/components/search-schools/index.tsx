/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { LuSearch } from "react-icons/lu";
import { useContext } from "react";
import { SchoolContext } from "@/lib/context/schools-context";
import SpecialSmallButton from "@/modules/common/components/special-small-button";

export default function SearchSchools() {
  const context = useContext(SchoolContext);

  if (!context) {
    return <div>No context provider found</div>;
  }

  const handleSearchSubmit = () => {
    const results = context.searchSchools(context.searchTerm);
    context.setSearchResults(results);
  };

  return (
    <main className="flex items-center gap-4">
      <Stack
        spacing={2}
        sx={{
          width: 400,
          "@media screen and (max-width: 600px)": {
            width: 200,
          },
        }}
      >
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={[]}
          onChange={() => context.handleSearchChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label=""
              placeholder="Search schools..."
              InputProps={{
                ...params.InputProps,
                type: "search",
                startAdornment: (
                  <LuSearch style={{ marginRight: 10, fontSize: 20 }} />
                ),
              }}
              sx={{
                position: "relative",
                borderRadius: "20px",
                backgroundColor: "white",
                boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.05)",
                color: "#4F4F4F",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
          )}
        />
      </Stack>

      <SpecialSmallButton
        text="Search"
        onClick={handleSearchSubmit}
        css="px-4 small:px-8 py-3"
      />
    </main>
  );
}
