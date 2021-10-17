import Button from "@material-ui/core/Button";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import MaterialTable from "material-table";

const columnsA = [
  { field: "number", title: "Number of Hotels" },
  { field: "address", title: "Address" },
];
const columnsS = [
  { field: "number", title: "Number of Hotels" },
  { field: "stars", title: "Star Rating" },
];

function Stats() {
  const [{ hotels, searchedHotels }] = useStateValue();

  const [addressTable, setAddressTable] = React.useState([]);
  const [starRating, setStarRating] = React.useState([]);

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
    // An Object to map the The number of hotels by each address
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
    console.log(addressTableStrs);
    setAddressTable(addressTableStrs);
  }, []);

  return (
    <div>
      <Button
        style={{ margin: "1em" }}
        component={Link}
        to="/"
        variant="outlined"
        color="primary"
      >
        BACK
      </Button>

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
