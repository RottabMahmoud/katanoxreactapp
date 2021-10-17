import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useStateValue } from "../StateProvider";

export default function Search() {
  const [{ hotels }, dispatch] = useStateValue();

  let onSearch = (event, values) => {
    // dispatch the item into the data later
    dispatch({
      type: "SEARCH",
      value: values,
    });
  };
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
