import * as React from "react";
import "../App.css";
import { useStateValue } from "../StateProvider";
import MaterialTable, { MTableToolbar } from "material-table";
import Search from "../components/Search.js";

const columns = [
  { field: "id", title: "ID" },
  { field: "name", title: "Name" },
  { field: "address", title: "Address" },
  {
    field: "starRating",
    title: "Star Rating",
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
      <Search />
      <MaterialTable
        data={hotels}
        columns={columns}
        components={{
          Toolbar: (props) => (
            <div
              style={{
                position: "relative",
                top: "30.6em",
              }}
            >
              <MTableToolbar {...props} searchable={false} />
            </div>
          ),
        }}
        options={{
          search: false,
          selection: true,
          showTitle: false,
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
      {selectedHotels.length > 0 ? (
        <div className="list">
          {selectedHotels.map((hotel) => (
            <div key={hotel.id}>
              <div>
                <h2 className="listName">{hotel.name}</h2>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Table;
