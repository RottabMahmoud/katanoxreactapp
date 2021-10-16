import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import "../App.css";
const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 230 },
  { field: "address", headerName: "Address", width: 230 },
  {
    field: "starRating",
    headerName: "Star Rating",
    type: "number",
    width: 200,
  },
];

const rows = [
  { id: 1, name: "Marriott", address: "London", starRating: 3 },
  { id: 2, name: "Hilton", address: "Paris", starRating: 4 },
  { id: 3, name: "Mahali Mzuri", address: "Masai Mara", starRating: 3 },
  {
    id: 4,
    name: "Nayara Tented Camp",
    address: "Cairo",
    starRating: 4,
  },
  { id: 5, name: "The Opposite House", address: "California", starRating: 3 },
  { id: 6, name: "Capella", address: "Paris", starRating: 4 },
  { id: 7, name: "Capella Ubud", address: "Bali", starRating: 3 },
  { id: 8, name: " Grace Hotel", address: "Santorini", starRating: 4 },
  { id: 9, name: " Kamalame Cay", address: "London", starRating: 3 },
  {
    id: 10,
    name: "The Oberoi Udaivilas",
    address: "Udaipur",
    starRating: 4,
  },
  {
    id: 11,
    name: "The Temple House",
    address: "Chengdu",
    starRating: 3,
  },
  { id: 12, name: "The Oberoi", address: "New Delhi", starRating: 4 },
  { id: 13, name: "Hotel Paracas", address: "Paracas", starRating: 3 },
  {
    id: 14,
    name: "Taj Holiday Village Resort & Spa",
    address: "Goa",
    starRating: 4,
  },
  {
    id: 15,
    name: "Savute Elephant Lodge",
    address: "Chobe National Park",
    starRating: 3,
  },
  {
    id: 16,
    name: "The Oberoi Vanyavilas Wildlife Resort",
    address: "Ranthambhore",
    starRating: 4,
  },
  { id: 17, name: "andarin Oriental", address: "Milan", starRating: 3 },
  { id: 18, name: "La Réserve", address: "Paris", starRating: 4 },
  {
    id: 19,
    name: "Nobu Ryokan Malibu",
    address: "California",
    starRating: 3,
  },
  { id: 20, name: "Soneva Fushi", address: "Maldives", starRating: 4 },
  { id: 21, name: "Shangri-La the Shard", address: "London", starRating: 3 },
  { id: 22, name: "Alila Manggis", address: "Paris", starRating: 4 },
  { id: 23, name: "Canaves Oia Epitome", address: "London", starRating: 3 },
  { id: 24, name: "Four Seasons ", address: "Turkey", starRating: 4 },
  { id: 25, name: "Fasano Boa Vista", address: "London", starRating: 3 },
];

export default function DataTable() {
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [selectedHotels, setSelectedHotels] = React.useState([]);
  const printHotels = () => {
    var result = [];
    for (let i = 0; i < rows.length; i++) {
      if (selectionModel.includes(rows[i].id)) {
        result.push(rows[i]);
        console.log(rows[i]);
      }
      //   console.log(result);
      //   console.log(selectedHotels);
    }
    // console.log(result, "ARRAY");
    setSelectedHotels(result);
  };

  return (
    <div style={{ height: 400, width: 1000 }} className="container">
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
