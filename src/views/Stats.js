import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

// Address Stats Table Columns
const columnsA = [
  { field: "number", title: "Number of Hotels" },
  { field: "address", title: "Address" },
];

// Star Rating Stats Table Columns
const columnsS = [
  { field: "number", title: "Number of Hotels" },
  { field: "stars", title: "Star Rating" },
];

function Stats() {
  // Our main Table Row's Data
  const [{ hotels }] = useStateValue();

  // Address Table rows Data
  const [addressTable, setAddressTable] = useState([]);

  // StarRating Table rows Data
  const [starRating, setStarRating] = useState([]);

  // Update the Tables Data using React LifeCycle Hook Use effect, and added the [] as the 2nd parameter,
  // as we use setState inside it and we shall avoid the infinite loops
  useEffect(() => {
    // An Object to map the The number of hotels by star Rating
    let starsTable = {};
    for (let i = 0; i < hotels.length; i++) {
      if (starsTable[hotels[i].starRating]) starsTable[hotels[i].starRating]++;
      else starsTable[hotels[i].starRating] = 1;
    }
    let starsArray = [];
    for (let i = 0; i < Object.keys(starsTable).length; i++) {
      let ratings = Object.keys(starsTable)[i];
      let noOfHotels = starsTable[ratings];

      starsArray.push({ number: noOfHotels, stars: ratings });
    }
    setStarRating(starsArray);

    // An Object to map the The number of hotels by address
    let addressTable = {};
    for (let i = 0; i < hotels.length; i++) {
      if (addressTable[hotels[i].address])
        addressTable[hotels[i].address].push(hotels[i]);
      else addressTable[hotels[i].address] = [hotels[i]];
    }
    let addressTableStrs = [];
    for (let i = 0; i < Object.keys(addressTable).length; i++) {
      let str = Object.keys(addressTable)[i];
      let number = addressTable[str].length;
      addressTableStrs.push({
        number: number,
        address: str,
      });
    }
    setAddressTable(addressTableStrs);
  }, [hotels]);

  return (
    <div>
      {/* Back Button  */}
      <Button
        style={{ margin: "1em" }}
        component={Link}
        to="/"
        variant="outlined"
        color="primary"
      >
        BACK
      </Button>

      {/* Adresss Stat Table */}
      <MaterialTable
        title="Address Stats"
        data={addressTable}
        columns={columnsA}
        options={{
          search: false,
          selection: false,
          toolbarButtonAlignment: "left",
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
      />

      {/* Star Ratings Stat Table */}
      <MaterialTable
        title="Star Rating Stats"
        data={starRating}
        columns={columnsS}
        options={{
          search: false,
          selection: false,
          toolbarButtonAlignment: "left",
          actionsColumnIndex: -1,
          addRowPosition: "first",
        }}
      />
    </div>
  );
}

export default Stats;
