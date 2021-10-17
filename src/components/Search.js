import * as React from "react";
import { useStateValue } from "../StateProvider";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Search() {
  // Table Data
  const [{ hotels }, dispatch] = useStateValue();

  // On Change event handling
  let onSearch = (event, values) => {
    dispatch({
      type: "SEARCH",
      value: values,
    });
  };
  // OnInputChange event handling
  let afterSearch = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <Stack style={{ margin: "1em" }} spacing={2} sx={{ width: 500 }}>
      <Autocomplete
        freeSolo
        disableClearable
        options={hotels.map((option) => option.name)}
        onChange={onSearch}
        onInputChange={afterSearch}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search hotels"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
}
