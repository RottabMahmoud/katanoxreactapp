import * as React from "react";
// import Button from "@mui/material/Button";
import "../App.css";
import { useStateValue } from "../StateProvider";
import MaterialTable from "@material-table/core";
const columns = [
  { field: "id", title: "ID", width: 100 },
  { field: "name", title: "Name", width: 230 },
  { field: "address", title: "Address", width: 230 },
  {
    field: "starRating",
    title: "Star Rating",
    width: 200,
  },
];

function Table() {
  // Pull all of the Rows of the Table grid, which are the list of hotels.
  const [{ hotels }, dispatch] = useStateValue();

  // Remove Hotel from Table row
  const removeHotel = (id) => {
    dispatch({
      type: "DELETE_HOTEL",
      id,
    });
  };
  // This is the List which are going to be printed after selection
  const [selectedHotels, setSelectedHotels] = React.useState([]);

  return (
    <div>
      <MaterialTable
        title="List of Hotels"
        data={hotels}
        columns={columns}
        options={{
          selection: true,
          toolbarButtonAlignment: "left",
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
        editable={{
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
                removeHotel(selectedRow.id);
              }, 1000);
            }),
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

export default Table;
