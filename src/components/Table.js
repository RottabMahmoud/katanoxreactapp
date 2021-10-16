import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "First name", width: 230 },
  { field: "lastName", headerName: "Last name", width: 230 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 200,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 260,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  const [selectionModel, setSelectionModel] = React.useState([]);
  const printHotels = () => {
    for (let i = 0; i < rows.length; i++) {
      if (selectionModel.includes(rows[i].id)) console.log(rows[i]);
    //   console.log(selectionModel[i]);
    }
    // console.log(selectionModel, "HELLO BUTTON");
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
      />
      <Button onClick={printHotels} variant="contained">
        Primary
      </Button>
    </div>
  );
}
