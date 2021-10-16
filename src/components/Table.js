import * as React from "react";
import Button from "@mui/material/Button";
import "../App.css";
import { useStateValue } from "../StateProvider";
import MaterialTable from "material-table";
const columns = [
  { field: "id", title: "ID", width: 100 },
  { field: "name", title: "Name", width: 230 },
  { field: "address", title: "Address", width: 230 },
  {
    field: "starRating",
    title: "Star Rating",
    type: "number",
    width: 200,
  },
];

export default function DataTable() {
  // Pull all of the Rows of the Table grid, which are the list of hotels.
  const [{ hotels }, dispatch] = useStateValue();

  // This is the List which are going to be printed after selection
  const [selectedHotels, setSelectedHotels] = React.useState([]);

  const style = {
    color: "white",
    position: "realtive",
    marginTop: "0.5em",
    marginLeft: "0.2em",
    float: "left",
    borderRadius: "50px",
  };
  return (
    <div style={{ height: 400, width: 1000 }} className="container">
      <MaterialTable
        title="Styling with MuiThemeProvider Preview"
        data={hotels}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        options={{
          selection: true,
          actionsColumnIndex: -1,
          toolbarButtonAlignment: "left",
          exportButton: false,
          showTitle: false,
        }}
        actions={[
          {
            tooltip: "Print All Selected Hotels",
            icon: "print",
            onClick: (evt, data) => {
              setSelectedHotels(data);
            },
          },
        ]}
      />

      <div className="list">
        {selectedHotels.map((hotel) => (
          <div key={hotel.id}>
            <div>
              <p></p>
              <h2 className="listName">
                {hotel.id}. {hotel.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
