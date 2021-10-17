import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useStateValue } from "../StateProvider";

export default function Search() {
  const [{ hotels }, dispatch] = useStateValue();

  let onSearch = (event, values) => {
    console.log(values);
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
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={hotels.map((option) => option.name)}
        onChange={onSearch}
        onInputChange={afterSearch}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
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
